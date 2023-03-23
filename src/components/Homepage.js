import React, { useState, useEffect } from "react";

const Homepage = () => {
    const [listings, setListings] = useState([])

    console.dir(listings)
    
    useEffect(() => {
        fetch("http://localhost:3001/listings")
        .then((response) => response.json())
        .then((listings) => setListings(listings))
    }, [])

    const listingItems = listings.map((listingItem) => 
        <div className="col" key={listingItem.id} >
            <div className="card">
                <img src={listingItem.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title text-start">{listingItem.price}</h4>
                    
                    <p className="card-text text-start">
                        <small className="text-muted">
                            {listingItem.bedrooms} bedrooms | {listingItem.bathrooms} bathrooms
                            <br></br>
                            Location: {listingItem.location}
                        </small>
                    </p>

                    <p className="card-text text-start" id="card-desc-prev">
                        {listingItem.description}
                    </p>
                    
                </div>
            </div>
        </div>       
    )

    return (
        <>
            <h1 className="display-3" id="greeting-heading">Welcome to Rentopia</h1>
            <h3 className="">All Rental Listings</h3>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {listingItems}
                </div>
            </div>

        </>
    )
}

export default Homepage