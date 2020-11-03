import React from "react";
import './App.scss';
import Header from "../../components/Header/Header"
import BigButton from "../../components/BigButton/BigButton";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Uważaj na kaczki</h1>
      </header>
        <Header />
        <BigButton />
    </div>
  );
}

export default App;
