import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from "../Button/Button"
import StartNow from "../StartNow/StartNow"
import Page from "../Page/Page"
import bannerImage from '../../images/campusleasebanner.png'
import "./Home.css"


const Home = () => {
    return (
        <Page>
            <h1 className="home-header">A New Way To Sublease</h1>
            <div className="home-details-container">
                <p className="home-details-paragraph">List your apartment.</p>
                <p className="home-details-paragraph">Connect with potential subleasers.</p>
                <p className="home-details-paragraph">Find your new college home.</p>
            </div>
            <div className="home-buttons-container">
                <NavLink exact to="/explore">
                    <Button isDark={true}>I'm A Subleaser</Button>
                </NavLink>
                <NavLink exact to="/submit">
                    <Button>Get Started</Button>
                </NavLink>
            </div>
            <div className="banner-image-container">
                <img src={bannerImage} alt="banner-image" />
            </div>
            <div className="one-line-description-container">
                <h3>WHAT IS CAMPUSLEASE?</h3>
                <p className="description-paragraph">
                    CampusLease is a 2-sided marketplace where students can list their apartment for sublease or find their next home.
                </p>
            </div>
            <StartNow />
        </Page>
    )
}

export default Home;
