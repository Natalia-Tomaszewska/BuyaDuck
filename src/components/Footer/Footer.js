import React, {useRef} from "react";
import "./Footer.scss"
import twitter from "./twitter-sign.svg";
import facebook from "./facebook-app-logo.svg";



const Footer = () => {
    return (

        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-copyright">
                    <p className="footer-rights">© 2020 BuyaDuck, All Rights Reserved</p>
                </div>
                <div className="footer-icons">
                    <a href="#" className="facebook">
                        <img src={facebook} height="50px" alt=""/>
                    </a>
                    <a href="#" className="twitter">
                        <img src={twitter} height="50px" alt=""/>
                    </a>
                </div>
            </div>
        </footer>
    )
};

export default Footer;