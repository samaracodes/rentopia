import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Homepage = ({ listings }) => {


    return (
        <>
            <div className="carousel slide" id="homepage-carousel" data-bs-ride="carousel" data-bs-pause="false">
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
                    Welcome to Rentopia
                </h1>

            </div>
        </>
    )
}

export default Homepage