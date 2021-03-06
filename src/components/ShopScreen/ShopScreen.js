import React from 'react';
import "./ShopScreen.scss";
import ducky from "./pinkduck1.jpeg";


const ShopScreen = ({setShowCanvas}) => {

    return (

        <section className="shopScreen-section">
            <div className="shopScreen-container">
                <h1 className="shopScreen-heading">
                    CHOOSE WISELY
                </h1>
                <div className="product-box-container">
                    <div className="product-box-box1">
                        <div className="box1-container">
                            <h6>Buy a duck</h6>
                            <div className="duckRender">
<img src={ducky} height="200px" width="200px"/>
                            </div>
                            <div className="customize-container">
                                <button className="customize-button" onClick={() => setShowCanvas(true)}>
                                    Customize
                                </button>
                                <p>Customize your duck</p>

                            </div>
                            <div className="buy-container">

                                <div className="buy">
                                    <div className="left-side">
                                        <div className="card">
                                            <div className="card-line">

                                            </div>
                                            <div className="buttons">

                                            </div>
                                        </div>
                                        <div className="post">
                                            <div className="post-line">

                                            </div>
                                            <div className="screen">
                                                <div className="dollar">$
                                                </div>
                                            </div>
                                            <div className="numbers">

                                            </div>
                                            <div className="numbers-line2">

                                            </div>
                                        </div>
                                    </div>
                                    <div className="right-side">
                                        <div className="new">New Transaction</div>

                                        <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="512"
                                             height="512" viewBox="0 0 451.846 451.847">
                                            <path
                                                d="M345.441 248.292L151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z"
                                                data-original="#000000" className="active-path" data-old_color="#000000"
                                                fill="#cfcfcf"/>
                                        </svg>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
};

export default ShopScreen;
