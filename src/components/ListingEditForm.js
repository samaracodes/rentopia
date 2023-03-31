import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom"

const ListingEditForm = () => {
    const [listingToEdit, setListingToEdit] = useState(null)

    const completeEditing() = {
        setListingToEdit(null)
    }

    return (
        <>
            Listing Edit Form 
        
        </>
    )
}

export default ListingEditForm