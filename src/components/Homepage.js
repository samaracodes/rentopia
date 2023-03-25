import React, { useState, useEffect } from "react";



const Homepage = ({ allListings }) => {

    const listings = allListings.map((listing) => 
        <div className="col" id="listing-card-col" key={listing.id} >
            <div className="card h-100">
                <img src={listing.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4 className="card-title text-start">{listing.price}</h4>
                    
                    <p className="card-text text-start">
                        <small className="text-muted">
                            {listing.bedrooms} bedrooms | {listing.bathrooms} bathrooms
                            <br></br>
                            Location: {listing.location}
                        </small>
                    </p>

                    <p className="card-text text-start" id="card-desc-prev">
                        {listing.description}
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
                    {listings}
                </div>
            </div>

        </>
    )
}

export default Homepage