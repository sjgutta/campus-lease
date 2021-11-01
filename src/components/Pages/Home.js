import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from "../Button/Button"
import Page from "../Page/Page"
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
        </Page>
    )
}

export default Home;
