import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                
                <a className="navbar-brand mb-1 h1" id="nav-brand-name" href="#">

                    <img src="../brand-2.png" className="d-inline-block" />

                    RENTOPIA
                    <span className="navbar-brand" id="nav-sub-brand">LUXURY RENTALS</span>
                </a>
                
            
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">Add Listing</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar