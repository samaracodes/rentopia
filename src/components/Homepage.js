import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Homepage = ({ listings }) => {


    return (
        <>
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
                <h1 className="display-3" id="greeting-heading">
                    Welcome to Rentopia
                </h1>

            </div>
        </>
    )
}

export default Homepage