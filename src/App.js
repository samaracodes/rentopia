import './App.css';
import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import ListingForm from './components/ListingForm';




function App() {
  const [allListings, setAllListings] = useState([])
  
  useEffect(() => {
      fetch("http://localhost:3001/listings")
      .then((response) => response.json())
      .then((allListings) => setAllListings(allListings))
  }, [])

  const onAddListing = (newListing) => {
    setAllListings([...allListings, newListing])
  }

// Console Messages
  console.log("Rental Listings Inventory🔑")
  console.table(allListings)




  return (
    <div className="App">
       
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage allListings={allListings} />} />

          <Route path="/listings/new" element={<ListingForm onAddListing={onAddListing} allListings={allListings} />} />
          
        </Routes>
    </div>
  );
}

export default App;
