import React, {useState} from "react";
import './App.scss';
import Header from "../../components/Header/Header"
import Navigation from "../../components/Navigation/Navigation";
import MainScreen from "../../components/MainScreen/MainScreen";
import ShopApp from "../ShopApp/ShopApp";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ShopScreen from "../../components/ShopScreen/ShopScreen";
import Canvas from "../../Canvas";
import WhyDuck from "../../components/WhyDuck/WhyDuck";

function App() {
    const [showCanvas, setShowCanvas] = useState(false);
    return (
        <Router>
            <div className="App">
                <Navigation/>
                <Switch>
                    <Route exact path="/" component={MainScreen}/>
                    {/*<Route path="/shop" component={ShopApp} />*/}
                    <Route exact path="/shop" component={() => <ShopScreen setShowCanvas={setShowCanvas}/>}/>
                </Switch>
                {/*<ShopScreen setShowCanvas={setShowCanvas} />*/}
                {showCanvas && <Canvas onClick={() => setShowCanvas(false)}/>}
                <WhyDuck/>
                <Header/>
            </div>
        </Router>

    );
}

export default App;
