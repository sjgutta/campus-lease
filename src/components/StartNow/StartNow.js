import React from 'react'
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom'
import './StartNow.css';

const StartNow = () => {
    return (
        <div className="start-now-container">
            <h3 className="start-now-header">Find Your New Home Today</h3>
            <p className="start-now-paragraph">
                Today is the day to find the college home of your dreams. Click below to get started now.
            </p>
            <NavLink exact to="/about">
                <Button>Learn More</Button>
            </NavLink>
        </div>
    )
}

export default StartNow;
