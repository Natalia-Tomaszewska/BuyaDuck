import React from 'react';
import "./Navigation.scss";
import logo from "./logo.png";

const Navigation = () => {
    return(
        <header className="header">
            <div className="header-container">
                <a href="../../../public/index.html" className="logo">
                    <img src={logo} alt="logo"/>
                </a>
            </div>
            <nav>
                <ul className="header-nav">
                    <li className="nav-element">
                        <a href="../../../public/index.html" className="nav-link">SHOP NOW</a>
                    </li>
                    <li className="nav-element">
                        <a href="../../../public/index.html" className="nav-link">ABOUT US</a>
                    </li>
                    <li className="nav-element">
                        <a href="../../../public/index.html" className="nav-link">CONTACT</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
};
export default Navigation;