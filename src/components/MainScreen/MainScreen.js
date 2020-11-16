import React from 'react';
import "./MainScreen.scss";
import duck from "./noun_Duck_151982 (1).svg";
import BigButton from "../../components/BigButton/BigButton";


function scrollAppear() {
    const introText = document.querySelector('.text-container');
    if (introText === null) {
        return;
    }
    const introPosition = introText.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (introPosition < screenPosition) {
        introText.classList.add('text-container-appear');
    }
}

window.addEventListener('scroll', scrollAppear);


const MainScreen = () => {
    return (
        <section className="mainScreen">
            <div className="mainScreen-container">
                <div className="mainScreen-text">
                    <div className="text-container">
                        <h1>Welcome to the duck side</h1>
                    </div>
                    <div className="mainScreen-button">
                        <BigButton/>
                    </div>


                </div>
                <div className="images-container">
                    <div className="circle1 circle">

                    </div>
                    <div className="circle2 circle">

                    </div>
                    <div className="circle3 circle">

                    </div>
                    <div className="circle4 circle">

                    </div>
                    <div className="bigDuck">
                        <img src={duck} className="duckImg"/>
                    </div>

                </div>
            </div>
        </section>
    )
};

export default MainScreen;