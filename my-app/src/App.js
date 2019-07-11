import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from './views/register/register'
import Account from './views/account'
import Ad from './views/ad/ad'
import Listing from './views/listing/listing'
import Login from "./views/login/login";
import './App.css';


class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={Register}/>
              <Route exact path="/register" component={Register}/>
              <Route exact path="/connexion" component={Login}/>
            <Route exact path="/account" component={Account}/>
            <Route exact path="/ad" component={Ad}/>
            <Route exact path="/listing" component={Listing}/>
          </Switch>
        </Router>
    );
  }
}

export default App;
