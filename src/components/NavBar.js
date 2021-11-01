import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
    const [isOpen, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!isOpen);
    }

    const handleLinkClick = () => {
        if(isOpen) {
            setOpen(false);
        }
    }

    return <>
        <nav className="navbar" >
            <div className="nav-container" >
                    <NavLink exact to="/" className="nav-logo" >
                    CampusLease
        </NavLink>

                <ul className={isOpen ? "nav-menu active" : "nav-menu"} >
                    <li className="nav-item" >
                        <NavLink exact to="/" activeClassName="active" className="nav-links" onClick={handleLinkClick}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item" >
                        <NavLink exact to="/about" activeClassName="active" className="nav-links" onClick={handleLinkClick}>
                            About
                                </NavLink>
                    </li>
                    <li className="nav-item" >
                        <NavLink exact to="/explore" activeClassName="active" className="nav-links" onClick={handleLinkClick}>
                            Explore
                                </NavLink>
                    </li>
                    <li className="nav-item" >
                        <NavLink exact to="/contact" activeClassName="active" className="nav-links" onClick={handleLinkClick}>
                            Contact
                                </NavLink>
                    </li>
                    <li className="nav-button-item" >
                        <div className="nav-button">
                        <NavLink exact to="/submit" activeClassName="active" className="nav-links button-links" onClick={handleLinkClick}>
                            Submit A Listing
                                </NavLink>
                                </div>
                    </li>
                </ul>
                <div className="nav-icon" onClick={handleClick}>
                    <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
            </div>
        </nav>
    </>
}

export default NavBar