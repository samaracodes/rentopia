import React, { useState, useEffect } from "react";

const Homepage = ({ listings }) => {

    const allListings = listings.map((listing) => 
        <div className="col" id="listing-card-col" key={listing.id} >
            <div className="card h-100">
                <img src={listing.imageUrl} className="card-img-top" alt="..."/>
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
                        {listing.listingDescription}
                    </p>
                    
                </div>
            </div>
        </div>       
    )

    return (
        <>
            {/* <h1 className="display-3" id="greeting-heading">
                Welcome to Rentopia
            </h1> */}

            <div id="homepage-carousel" class="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
                <div class="carousel-inner">

                    <div class="carousel-item active" data-bs-interval="2000">
                        <img src="./rental-carousel1.jpeg" class="d-block w-100" alt="..."/>
                    </div>

                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="./rental-carousel2.jpg" class="d-block w-100" alt="..."/>
                    </div>

                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="./rental-carousel3.jpg" class="d-block w-100" alt="..."/>
                    </div>

                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="./rental-carousel4.jpg" class="d-block w-100" alt="..."/>
                    </div>

                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="./rental-carousel5.jpg" class="d-block w-100" alt="..."/>
                    </div>

                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="./rental-carousel6.jpg" class="d-block w-100" alt="..."/>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <img src="./rental-carousel7.jpg" class="d-block w-100" alt="..."/>
                    </div>
                </div>
            </div>


            <div className="container" id="listings-container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {allListings}
                </div>
            </div>
        </>
    )
}

export default Homepage