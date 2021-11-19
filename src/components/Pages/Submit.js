import React, { useState } from 'react'
import Page from "../Page/Page"
import SubmitBanner from "../../images/submitbanner.png";
import "./Submit.css"
import StartNow from "../StartNow/StartNow"
import Input from "../Input/Input"
import Button from "../Button/Button"
import { NavLink } from 'react-router-dom'
import InputHeader from "../Input/InputHeader"
import axios from "axios";


const Submit = () => {
    const [success, setSuccess] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [listerEmail, setListerEmail] = useState("");
    const [description, setDescription] = useState("");
    const [amenities, setAmenities] = useState("");


    const submit = () => {
        setShowErrorMessage(false);
        if(name === "" || address === "" || city === "" || state === "" || zipCode === "" || 
        imageUrl === "" || listerEmail === "" || description === "" || amenities === "") {
            setShowErrorMessage(true);
            return;
        }
        const listingData = {
            "name": name,
            "address": address,
            "city": city,
            "state": state,
            "zip_code": zipCode,
            "image_url": imageUrl,
            "email": listerEmail,
            "description": description,
            "amenities": amenities
        }
        axios.post('http://api.campuslease.com:5000/listings/submit', listingData)
            .then(response => setSuccess(true));
    }

    let errorMessage; 
    if(showErrorMessage) {
        errorMessage = <span style={{"color": "red", "font-size": "25px"}}>Must fill out all fields</span>;
    }

    let form = <>
        <form className="contact-form">
            {errorMessage}
            <InputHeader value="Name" />
            <Input type="text" placeholder="Name" onChange={(event) => { setName(event.target.value) }} />
            <InputHeader value="Address" />
            <Input type="text" placeholder="Address" onChange={(event) => { setAddress(event.target.value) }} />
            <InputHeader value="City" />
            <Input type="text" placeholder="City" onChange={(event) => { setCity(event.target.value) }} />
            <InputHeader value="State" />
            <Input type="text" placeholder="State" onChange={(event) => { setState(event.target.value) }} />
            <InputHeader value="Zip Code" />
            <Input type="text" placeholder="Zip Code" onChange={(event) => { setZipCode(event.target.value) }} />
            <InputHeader value="Image URL" />
            <Input type="text" placeholder="Image URL" onChange={(event) => { setImageUrl(event.target.value) }} />
            <InputHeader value="Lister Email" />
            <Input type="text" placeholder="Lister Email" onChange={(event) => { setListerEmail(event.target.value) }} />
            <InputHeader value="Description" />
            <Input type="textarea" placeholder="Description" onChange={(event) => { setDescription(event.target.value) }} />
            <InputHeader value="Amenities" />
            <Input type="textarea" placeholder="Amenities" onChange={(event) => { setAmenities(event.target.value) }} />
            <Button onClick={submit}>Submit Your Listing</Button>
        </form>
    </>;
    if(success) {
        form = <h4>Success!</h4>;
    }

    return (
        <Page>
            <div className="banner-container">
                <img src={SubmitBanner} alt="submit-banner" />
            </div>
            <div className="contact-container">
                {form}
            </div>
            <StartNow />
        </Page>
    )
}

export default Submit;
