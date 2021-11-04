import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from "../Button/Button"
import StartNow from "../StartNow/StartNow"
import Page from "../Page/Page"
import HomeBanner from '../../images/homebanner.png'
import bannerImage from '../../images/campusleasebanner.png'
import "./Home.css"


const Home = () => {
    return (
        <Page>
            <div className="banner-container">
                <img src={HomeBanner} alt="home-banner" />
            </div>
            <div className="one-line-description-container">
                <h3>WHAT IS CAMPUSLEASE?</h3>
                <p className="description-paragraph">
                    CampusLease is a 2-sided marketplace where students can list their apartment for sublease or find their next home.
                </p>
            </div>
            <div className="home-buttons-container">
                <NavLink exact to="/explore">
                    <Button isDark={true}>I'm A Subleaser</Button>
                </NavLink>
                <NavLink exact to="/submit">
                    <Button>Get Started</Button>
                </NavLink>
            </div>
            <img className="banner-image" src={bannerImage} alt="banner-image" />
            <StartNow />
        </Page>
    )
}

export default Home;
