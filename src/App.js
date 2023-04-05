import './App.css';
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Listings from './components/Listings';
import ListingForm from './components/ListingForm';
import ListingEditForm from './components/ListingEditForm';
import ListingItem from './components/ListingItem';



function App() {
  const [listings, setListings] = useState([])
  const [listingId, setListingId] = useState(null)
  
  useEffect(() => {
      fetch("http://localhost:3001/listings")
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

  const onDeleteListing = (deletedList) => {
    const updatedListing = listings.filter(
      (listing) => listing.id !== deletedList.id
    );
    setListings(updatedListing);
  };

  const completeEditing = () => {
    setListingId(null)
  }

  // Updates a State => listingId
  // Initially it is null, ultimately we want listingId to be updated when we press the edit button
  const enterListingEditModeFor = (listingId) => {
    setListingId(listingId)
  }

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
              enterListingEditModeFor={enterListingEditModeFor} onDeleteListing={onDeleteListing} 
            />}
          />

          <Route path="/listings/new" 
            element={<ListingForm 
              onAddListing={onAddListing}  />
            } 
          />

          <Route path="/listings/:id" 
            element={<ListingItem />}
          />

          <Route path="/listings/:id/edit" 
            element={<ListingEditForm 
              listingId={listingId} onUpdateListing={onUpdateListing} />
            }
          />
          
        </Routes>
    </div>
  );
}

export default App;
