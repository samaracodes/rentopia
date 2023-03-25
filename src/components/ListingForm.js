import React, { useState } from "react";

const ListingForm = ({ onAddListing, allListings }) => {
    const initialState = {
        imageUrl: "",
        location: "",
        price: "",
        bedrooms: "",
        bathrooms: "",
        listingDescription: ""
    }


    const [formData, setFormData] = useState(initialState)

    //Object destructuring assignment
    const { imageUrl, location, price, bedrooms, bathrooms, listingDescription } = formData

    const handleOnChange = (e) => {
        const { name, value } = e.target
        
        console.log(`📥 Form Input via ${e.target.id}:  ${e.target.value}`);

        setFormData((formData) => ({ ...formData, [name]: value }))
    }

    // Handle submit event / Add newest listing to "allListings"
    const handleSubmit = (e) => {
        e.preventDefault();

        // Optomistic Rendering
        //Update "allListings" state with newest project
        onAddListing(formData)

        const configObj = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accepts": "application/json",
          },
          body: JSON.stringify(formData),
        };
    

        //Add POST fetch request
        fetch("http://localhost:3001/listings", configObj)
          .then((res) => res.json())
          .then((newListing) => {
            // merge newest listing into "allListings"
            onAddListing(newListing);

            //reset/clear form 
            setFormData(initialState);
            
            console.log(`🎉 New Listing Successfully Submitted`)
        });
    };

    return (
        <>
            <div className="col">
                <div className="mx-auto col-sm-5 ">
                    <form className="form" onSubmit={handleSubmit}>
                        <h1 className="display-3" id="greeting-heading">Listing Form</h1>
                        <p>We will display Listing Form here.</p>


                        <div className="col mb-3 form-group">
                            <label className="col-form-label" htmlFor="imageUrl">Image Url</label>
                            <input
                                type="text"
                                className="form-control"
                                id="imageUrl"
                                placeholder="Enter Image Url..."
                                name="imageUrl"
                                value={imageUrl}
                                onChange={handleOnChange}
                            />
                        </div>

                        <div className="col mb-3 form-group">
                            <label className="col-form-label" htmlFor="location">Location</label>
                            <input
                                type="text"
                                className="form-control"
                                id="location"
                                placeholder="Enter Location..."
                                name="location"
                                value={location}
                                onChange={handleOnChange}
                            />
                        </div>

                        <div className="col mb-3 form-group">
                            <label className="col-form-label" htmlFor="price">Price</label>
                            <input
                                type="text"
                                className="form-control"
                                id="price"
                                placeholder="Enter Price..."
                                name="price"
                                value={price}
                                onChange={handleOnChange}
                            />
                        </div>

                        <div className="col mb-3 form-group">
                            <label className="col-form-label" htmlFor="bedrooms">Bedrooms</label>
                            <input
                                type="text"
                                className="form-control"
                                id="bedrooms"
                                placeholder="Enter Bedrooms..."
                                name="bedrooms"
                                value={bedrooms}
                                onChange={handleOnChange}
                            />
                        </div>

                        <div className="col mb-3 form-group">
                            <label className="col-form-label" htmlFor="bathrooms">Bathrooms</label>
                            <input
                                type="text"
                                className="form-control"
                                id="bathrooms"
                                placeholder="Enter Bathrooms..."
                                name="bathrooms"
                                value={bathrooms}
                                onChange={handleOnChange}
                            />
                        </div>

                        <div className="col mb-3 form-group">
                            <label htmlFor="listingDescription" className="col-form-label">Listing Description</label>
                            <textarea
                                className="form-control"
                                id="listingDescription"
                                name="listingDescription"
                                rows="3"
                                onChange={handleOnChange}
                                value={listingDescription}
                                
                            />
                        </div>

                        <button type="submit" className="btn btn-primary btn-customized mt-4">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ListingForm