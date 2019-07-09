import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Home from './views/home'
import Registration from './views/registration'
import Account from './views/account'
import Ad from './views/ad'
import Listing from './views/listing'
import Connexion from "./views/login";

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/registration" component={Registration}/>
            <Route exact path="/connexion" component={Connexion}/>
            <Route exact path="/account" component={Account}/>
            <Route exact path="/ad" component={Ad}/>
            <Route exact path="/listing" component={Listing}/>
          </Switch>
        </Router>
    );
  }
}

export default App;
