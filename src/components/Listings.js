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

                <button className="btn btn-outline-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                    </svg>
                </button>

                
            </div>
        </div>
    </div>        
    )


    return (
        <>
            <div id="Listing-carousel" className="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
                <div className="carousel-inner">

                    <div className="carousel-item active" data-bs-interval="2000">
                        <img src="./rental-carousel1.jpeg" className="d-block w-100" alt="..."/>
                    </div>

                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="./rental-carousel2.jpg" className="d-block w-100" alt="..."/>
                    </div>

                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="./rental-carousel3.jpg" className="d-block w-100" alt="..."/>
                    </div>

                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="./rental-carousel4.jpg" className="d-block w-100" alt="..."/>
                    </div>

                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="./rental-carousel5.jpg" className="d-block w-100" alt="..."/>
                    </div>

                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="./rental-carousel6.jpg" className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src="./rental-carousel7.jpg" className="d-block w-100" alt="..."/>
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