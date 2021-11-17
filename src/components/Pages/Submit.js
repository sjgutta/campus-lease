import React from 'react'
import Page from "../Page/Page"
import SubmitBanner from "../../images/submitbanner.png";
import "./Submit.css"
import StartNow from "../StartNow/StartNow"


const Submit = () => {
    return (
        <Page>
            <div className="banner-container">
                <img src={SubmitBanner} alt="submit-banner" />
            </div>
            <StartNow />
        </Page>
    )
}

export default Submit;
