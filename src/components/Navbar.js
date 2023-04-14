import React from "react";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm">
                <div className="container-fluid">
                    
                    <a className="navbar-brand mb-1 h1" id="nav-brand-name" href="/">
                        <img src="./brand-2.png" className="d-inline-block" />

                        RENTOPIA
                        <span className="navbar-brand" id="nav-sub-brand">LUXURY RENTALS</span>
                    </a>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/rentopia" alt="homepage nav link">Home</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/listings" alt="all available rentals nav link">Available Rentals</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/listings/new" alt="add listing nav link">Add Listing</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="/favorites" alt="listing favorites">Favorites </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar