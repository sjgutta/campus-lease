import React from 'react'
import Page from "../Page/Page"
import SubmitBanner from "../../images/submitbanner.png";
import "./Submit.css"


const Submit = () => {
    return (
        <Page>
            <div className="banner-container">
                <img src={SubmitBanner} alt="submit-banner" />
            </div>
        </Page>
    )
}

export default Submit;
