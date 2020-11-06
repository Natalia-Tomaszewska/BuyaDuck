import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import ShopApp from "../src/layouts/ShopApp/ShopApp";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
    <React.StrictMode>
        <ShopApp />
    </React.StrictMode>,
    document.getElementById('rootShop')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
