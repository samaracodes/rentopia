import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Listings = ({ listings }) => {


    const allListings = listings.map((listing) => 
    <div key={listing.id} className="col" id={`listing-col-${listing.id}`}>
        <div id={`listing-card-${listing.id}`}className="card h-100">

        <Link to={`/listings/${listing.id}`}>
            <img src={listing.imageUrl} className="card-img-top" alt="..."/>
        </Link>
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
                

                <Link to={`/listings/${listing.id}`} className="btn btn-primary">View Listing</Link>
                
            </div>
        </div>
    </div>        
    )


    return (
        <>
            <div id="Listing-carousel" class="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
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
                <h1 className="display-3" id="greeting-heading">
                    Available Rentals 
                </h1>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {allListings}
                </div>
            </div>
        </>
    )
}

export default Listings