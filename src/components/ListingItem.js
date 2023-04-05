import React, { useEffect, useState }from "react";
import { useParams } from 'react-router-dom'

const ListingItem = () => {
    const { id } = useParams() 
    const [listing, setListing] = useState({})


    console.log(id)
    
    return (
        <>
        <h1>Listing Item</h1>
         
        <h1>Listing Id: {id}</h1>
        </>
    )
}

export default ListingItem