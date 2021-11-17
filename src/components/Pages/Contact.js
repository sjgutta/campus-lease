import React from 'react'
import Page from "../Page/Page"
import ContactBanner from "../../images/contactbanner.png";
import "./Contact.css"
import InputHeader from "../Input/InputHeader"
import Input from "../Input/Input"


const Contact = () => {
    
    return (
        <Page>
            <div className="banner-container">
                <img src={ContactBanner} alt="contact-banner" />
            </div>
            <div className="contact-container">
                <form className="contact-form">
                    <InputHeader value="Contact Form" />
                    <div className="input-container">
                        <Input type="text" placeholder="Name"></Input>
                        <Input type="email" placeholder="Email"></Input>   
                        <Input type="textarea" placeholder="Message"></Input>
                    </div>
                    <a class="nav-links button-links nav-button submit-button" href="/contact" >Send your message</a>      
                </form>
            </div>
        </Page>
    )
}

export default Contact;
