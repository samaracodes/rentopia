import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm">
                <div className="container-fluid">
                    
                    <a className="navbar-brand mb-1 h1" id="nav-brand-name" href="/rentopia">
                        <img src="./brand-2.png" className="d-inline-block" />

                        RENTOPIA
                        <span className="navbar-brand" id="nav-sub-brand">LUXURY RENTALS</span>
                    </a>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/" alt="homepage nav link">Home</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/listings" alt="all available rentals nav link">Available Rentals</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/listings/new" alt="add listing nav link">Add Listing</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/favorites" alt="listing favorites">Favorites </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar