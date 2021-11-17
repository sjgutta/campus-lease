import React from 'react'
import Page from "../Page/Page"
import { NavLink } from 'react-router-dom'
import ContactBanner from "../../images/contactbanner.png";
import "./Contact.css"
import InputHeader from "../Input/InputHeader"
import Input from "../Input/Input"
import Button from "../Button/Button"
import StartNow from "../StartNow/StartNow"


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
                    <NavLink exact to="/contact">
                        <Button>Send Your Message</Button>
                    </NavLink>
                </form>
            </div>
            <StartNow />
        </Page>
    )
}

export default Contact;
