import './App.css';
import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Listings from './components/Listings';
import ListingForm from './components/ListingForm';
import ListingEditForm from './components/ListingEditForm';
import ListingItem from './components/ListingItem';
import Favorites from './components/Favorites';



function App() {
  const [listings, setListings] = useState([])
  const [listingId, setListingId] = useState(null)
  
  useEffect(() => {
      fetch("https://my-json-server.typicode.com/samaracodes/rentopia/listings")
      .then((response) => response.json())
      .then((listings) => setListings(listings))
  }, [])

  const onAddListing = (newListing) => {
    setListings([...listings, newListing])
  }

  const onUpdateListing = (updatedL) => {
    const updatedListings = listings.map((originalListing) => {
      if (updatedL.id === originalListing.id) {
        return updatedL
      } else {
        return originalListing
      }
    })
    setListings(updatedListings)
  }

  const onDeleteListing = (deletedListing) => {
    const updatedListings = listings.filter(
      (listing) => listing.id !== deletedListing.id
    );
    setListings(updatedListings);
  };

  // Console Messages
  console.log("Rental Listings Inventory🔑")
  console.table(listings)

  return (
    <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" 
            element={<Homepage />
            } 
          />

          <Route path="/listings"
            element={<Listings 
              listings={listings}  
            />}
          />

          <Route path="/listings/new" 
            element={<ListingForm 
              onAddListing={onAddListing}  />
            } 
          />

          <Route path="/listings/:id" 
            element={<ListingItem 
              onDeleteListing={onDeleteListing} />
            }
          />

          <Route path="/listings/:id/edit" 
            element={<ListingEditForm 
              onUpdateListing={onUpdateListing} />
            }
          />

          <Route path="/favorites" element={<Favorites />}/>
          
        </Routes>
    </div>
  );
}

export default App;
