import React from "react";
import './App.scss';
import Header from "../../components/Header/Header"
import Navigation from "../../components/Navigation/Navigation";
import MainScreen from "../../components/MainScreen/MainScreen";
import ShopApp from "../ShopApp/ShopApp";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ShopScreen from "../../components/ShopScreen/ShopScreen";

function App() {
  return (
      <Router>
          <div className="App">
              <Navigation />
              <Switch>
                  <Route exact path="/" component={MainScreen} />
                  <Route path="/shop" component={ShopApp} />
              </Switch>
              <Switch>
                  <Route exact path="/shop" component={ShopScreen} />
              </Switch>
              <Header />
          </div>
      </Router>

  );
}

export default App;
