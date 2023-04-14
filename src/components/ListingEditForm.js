import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"


const ListingEditForm = ({ onUpdateListing }) => {
    const { id } = useParams()

    const [formData, setFormData] = useState({
        imageUrl: "",
        location: "",
        price: "",
        bedrooms: "",
        bathrooms: "",
        listingDescription: ""
    })

    const { imageUrl, location, price, bedrooms, bathrooms, listingDescription } = formData

    const navigate = useNavigate()

     // Everytime we update "listingId", we want to fire 
    // off a fetch request to pull THAT listing's ID.
    useEffect(() => {
        fetch(`https://rentopia-backend.onrender.com/listings/${id}`)
            .then((res) => res.json())
            .then((listing) => setFormData(listing))
    }, [])


    const handleOnChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })

        console.log(`📥 Form Input via ${e.target.id}:  ${e.target.value}`);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const configObj = {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            body: JSON.stringify(formData),
        }

        fetch(`https://rentopia-backend.onrender.com/listings/${id}`, configObj)
          .then((resp) => resp.json())
          .then((updatedListing) => {

            // merge newest listing into "allListings"
                onUpdateListing(updatedListing);

            // Console Log when successfully updated
            console.log(`🎉 Listing ${id}: Successfully updated`);

            // redirect to homepage to see new listing
                navigate("/listings")
        });
    };


    return (
        <>
            <div className="col">
                <div className="mx-auto col-sm-5 ">
                    <form className="form" onSubmit={handleSubmit}>
                        <h1 className="display-3" id="greeting-heading">Edit Listing Form</h1>


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

                        <button type="submit" className="btn btn-primary btn-customized mt-4">Update Listing</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ListingEditForm