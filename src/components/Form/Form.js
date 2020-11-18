import React, {useRef} from "react";
import "./Form.scss"

const Form = () => {
    return (
        <section className="form-section">
            <div className="wave">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#fff" fill-opacity="1"
                          d="M0,224L34.3,197.3C68.6,171,137,117,206,112C274.3,107,343,149,411,192C480,235,549,277,617,250.7C685.7,224,754,128,823,106.7C891.4,85,960,139,1029,186.7C1097.1,235,1166,277,1234,282.7C1302.9,288,1371,256,1406,240L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                </svg>
            </div>
            <div className="form-container">
                <div className="form-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d80127.55468535425!2d16.921824505978645!3d51.12716471938331!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe9c2d4b58abf%3A0xb70956aec205e0f5!2zV3JvY8WCYXc!5e0!3m2!1spl!2spl!4v1605710870886!5m2!1spl!2spl"
                        width="600" height="450" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"/>
                </div>
                <div className="form-contact">
                    <h1>Contact Us</h1>
                    <form>
                        <input type="text" placeholder="Name" className="text-name"/>
                        <input type="text" placeholder="Email" className="text-email"/>
                        <textarea placeholder="Message" className="text-message"/>
                        <input type="submit" name="Submit" className="text-submit"/>
                    </form>
                </div>
            </div>
        </section>
    )
};


export default Form;