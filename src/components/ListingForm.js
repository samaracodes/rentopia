import React, { useState, useEffect } from "react";

const ListingForm = () => {

    return (
        <>
            <div className="col">
                <div className="mx-auto col-sm-4 ">

                    <form className="form">
                        <h1 className="display-3" id="greeting-heading">Listing Form</h1>
                        <p>We will display Listing Form here.</p>


                        <div className="col mb-3 form-group">
                            <label className="col-form-label" htmlFor="imageUrl">Image Url</label>
                            <input
                                type="text"
                                className="form-control"
                                id="image-url"
                                placeholder="Enter Image Url..."
                                name="image-url"
                            />
                        </div>

                        <div className="col mb-3 form-group">
                            <label className="col-form-label" htmlFor="location">Location</label>
                            <input
                                type="location"
                                className="form-control"
                                id="location"
                                placeholder="Enter Location..."
                                name="location"
                            />
                        </div>

                        <div className="col mb-3 form-group">
                            <label className="col-form-label" htmlFor="price">Price</label>
                            <input
                                type="price"
                                className="form-control"
                                id="price"
                                placeholder="Enter Price..."
                                name="price"
                            />
                        </div>

                        <div className="col mb-3 form-group">
                            <label className="col-form-label" htmlFor="bedrooms">Bedrooms</label>
                            <input
                                type="bedrooms"
                                className="form-control"
                                id="bedrooms"
                                placeholder="Enter Bedrooms..."
                                name="bedrooms"
                            />
                        </div>

                        <div className="col mb-3 form-group">
                            <label className="col-form-label" htmlFor="bathrooms">Bathrooms</label>
                            <input
                                type="bathrooms"
                                className="form-control"
                                id="bathrooms"
                                placeholder="Enter Bathrooms..."
                                name="bathrooms"
                            />
                        </div>

                        <div className="col mb-3 form-group">
                            <label htmlFor="listingDescription" className="col-form-label">Listing Description</label>
                            <textarea class="form-control" id="listingDescription" rows="3"></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary btn-customized mt-4">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ListingForm