import React from "react";
import './App.scss';
import Header from "../../components/Header/Header"
import Navigation from "../../components/Navigation/Navigation";
import MainScreen from "../../components/MainScreen/MainScreen";


function App() {
  return (
    <div className="App">
        <Navigation />
        <MainScreen />
        <Header />
    </div>
  );
}

export default App;
