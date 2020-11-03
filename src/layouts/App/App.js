import React from "react";
import './App.scss';
import Header from "../../components/Header/Header"
import BigButton from "../../components/BigButton/BigButton";
import Navigation from "../../components/Navigation/Navigation";


function App() {
  return (
    <div className="App">
        <Navigation />
        <Header />
        <BigButton />
    </div>
  );
}

export default App;
