import React from 'react';
import "./ShopScreen.scss";



const ShopScreen = ({ setShowCanvas }) => {

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

                            </div>
                            <div className="customize-container">
                                <p>Customize your duck</p>
                                <button className="surprise" onClick={() => setShowCanvas(true)}>
                                    Surprise
                                </button>
                            </div>
                            <div className="buy-container">
                                <p>Add to cart</p>
                                <button>Add</button>
                            </div>

                        </div>
                    </div>
                    <div className="product-box-box1">

                    </div>
                </div>
            </div>
        </section>
    )
};

export default ShopScreen;
