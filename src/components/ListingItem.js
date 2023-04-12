import React, { useEffect, useState }from "react";
import { Link, useParams, useNavigate } from 'react-router-dom'

const ListingItem = ({ onDeleteListing }) => {
    const { id } = useParams() 
    const [listing, setListing] = useState(null)
    const [ isLoaded, setIsLoaded ] = useState(false)


    useEffect(() => {
        fetch(`http://localhost:3001/listings/${id}`)
        .then((resp) => resp.json())
        .then((listing => {
            // Currently, before we can get to this step, we need to be able to destructure project
            setListing(listing)

            // Invoke setIsLoaded to change isLoaded
            setIsLoaded(!isLoaded)
        }))
    }, [id])


    const navigate = useNavigate()

    //Reference isLoaded State. If false, render simple "Hi.. Loading.." component
    if (!isLoaded) return <h1>Loading...</h1>

    const { imageUrl, location, price, bedrooms, bathrooms, listingDescription } = listing 

    const handleDeleteClick = () => {
        fetch(`http://localhost:3001/listings/${id}`, {
            method: "DELETE",
        })
            .then((resp) => navigate("/listings"))
            .then(onDeleteListing(listing))
    }
    
    return (
        <>
        <h1>Listing Id: {id}</h1>

        <img src={imageUrl} alt="Listing Images" style={{width: 800, height: 500}}  />
        <h1>{price}</h1>
        <h3>Location: {location}</h3>
        <h3>Bedroooms: {bedrooms}</h3>
        <h3>Bathrooms: {bathrooms}</h3>
        <p>{listingDescription}</p>


        <Link to={`/listings/${id}/edit`} className="btn btn-primary">Edit</Link>
        <br/>

        <Link className="btn btn-danger" onClick={handleDeleteClick}>Delete</Link>
        </>
    )
}

export default ListingItem