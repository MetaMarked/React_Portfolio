import React, { Component } from 'react';
import moment from "moment";
import {
  BrowserRouter as Router,
  Switch, 
  Route
} from 'react-router-dom'
import PortfolioContainer from "./Imports/portfolio-container";
import NavigationContainer from "./Navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        
        <Router>
          <div>
            <NavigationContainer />

            <switch>
              <Route exact path="/" component = {Home} />
              <Route path="/About-Me" component = {About} />
            </switch>
          </div>
        </Router>

        <div>
          {moment().format("MMMM Do YYYY, h:mm:ss a")}
        </div>
        <PortfolioContainer />
      </div>
    );
  }
}
