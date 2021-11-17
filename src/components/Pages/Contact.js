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
            <div className="contact-container">
                <form className="contact-form" action="/tbd" method="post">
                <ul>
                    <li>
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="user_name"/>
                    </li>
                    <li>
                        <label for="mail">E-mail:</label>
                        <input type="email" id="mail" name="user_email"/>
                    </li>
                    <li>
                        <label for="msg">Message</label>
                        <br/>
                        <textarea id="msg" name="user_message"></textarea>
                    </li>
                    <li>
                        <a class="nav-links button-links nav-button" href="/contact" >Send your message</a>
                    </li>
                </ul>
                </form>    
            </div>
        </Page>
    )
}

export default Contact;
