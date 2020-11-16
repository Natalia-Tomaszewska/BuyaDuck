import React from 'react';
import "./WhyDuck.scss";
import image1 from "./lotofducks.jpg";
import image2 from "./unicornduck.jpg";


function scrollAppearBox1() {
    const introTextBox1 = document.querySelector('.whyDuck-box1');
    if (introTextBox1 === null) {
        return;
    }
    const introPosition = introTextBox1.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (introPosition < screenPosition) {
        introTextBox1.classList.add('whyDuck-box1-appear');
    }
}
function scrollAppearBox2() {
    const introTextBox2 = document.querySelector('.whyDuck-box2');
    if (introTextBox2 === null) {
        return;
    }
    const introPosition = introTextBox2.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (introPosition < screenPosition) {
        introTextBox2.classList.add('whyDuck-box2-appear');
    }
}



window.addEventListener('scroll', scrollAppearBox1);
window.addEventListener('scroll', scrollAppearBox2);


const WhyDuck = () => {
    return (
        <section className="whyDuck-section">
            <div className="whyDuck-container">
<div className="whyDuck-box1">
    <div className="box1-text1">
    <h2 className="whyDuck-heading1">
        Why do you need a duck?
    </h2>
        <p className="whyDuck-paragraph1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium exercitationem fuga id impedit ipsa non porro quae sapiente similique tempore.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cum eligendi est incidunt iure laboriosam libero, necessitatibus nemo nihil qui.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dicta dolore dolores excepturi exercitationem iure, iusto officia praesentium quam quod.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis dolor eaque eveniet, expedita, facere facilis in ipsa ipsum laudantium modi nobis nulla obcaecati omnis placeat ratione repudiandae unde voluptatem. Aperiam asperiores deleniti esse facere fuga id optio sapiente, velit vitae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eaque eos laboriosam neque nihil porro praesentium quasi temporibus ullam velit!</p>
</div>
    <img src={image1} height="40%" width="40%" alt="imageofducks" className="image-lotOfDucks"/>
</div>
                <div className="whyDuck-box2">
                    <div className="box1-text2">
                        <h2 className="whyDuck-heading2">
                            Learn something about our ducks
                        </h2>
                        <p className="whyDuck-paragraph2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, blanditiis commodi fugiat itaque nostrum perferendis reprehenderit sunt? Est, nam, tempora.Lorem ipsum dolor sit amet, consectetur adipisicing elit. A doloribus ducimus ex minus mollitia natus perspiciatis quod tempora. A alias aliquam aliquid at aut consequuntur deleniti deserunt fugiat iste iure iusto magnam maiores modi mollitia natus obcaecati possimus quaerat quo, rem repellat, repellendus sed sit ullam! Commodi consequuntur ducimus eligendi, eum eveniet iste, laboriosam nostrum quae quaerat rerum saepe velit!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eaque eos laboriosam neque nihil porro praesentium quasi temporibus ullam velit!</p>
                    </div>
                    <img src={image2} height="40%" width="40%" alt="imageofducks" className="image-unicornDuck"/>
                </div>
            </div>
        </section>
    )
};

export default WhyDuck;