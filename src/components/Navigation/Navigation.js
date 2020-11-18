import React from 'react';
import "./Navigation.scss";
import logo from "./logo.png";
import {NavLink} from "react-router-dom";


const Navigation = () => {
    return(
        <header className="header">
            <div className="header-container">
                <NavLink to="/" >
                    <img src={logo} alt="logo" className="logo"/>
                </NavLink>
            </div>
            <nav>
                <ul className="header-nav">
                    <li className="nav-element">
                        <NavLink to="/shop">SHOP NOW</NavLink>
                    </li>
                    <li className="nav-element">
                        <NavLink to="/">ABOUT US</NavLink>
                    </li>
                    <li className="nav-element">
                        <NavLink to="/">CONTACT</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
};
export default Navigation;