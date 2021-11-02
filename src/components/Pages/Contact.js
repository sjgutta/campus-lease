import React from 'react'
import Page from "../Page/Page"
import ContactBanner from "../../images/contactbanner.png";
import "./Contact.css"


const Contact = () => {
    
    return (
        <Page>
            <div className="banner-container">
                <img src={ContactBanner} alt="contact-banner" />
            </div>
        </Page>
    )
}

export default Contact;
