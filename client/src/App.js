import React, { Component } from "react";
import "./App.css";

import FoodNav from "./nav";

import MeatContainer from "./meatcontainer";
import VegetableContainer from "./vegetablecontainer";
import DairyContainer from "./dairycontainer";
import DrinkContainer from "./drinkcontainer";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Jumbotron, Button } from "reactstrap";
import { getCookies } from "./actions";
import foodmoney from "./foodmoney.jpg";
import beta from "./beta-stamp.png";
import Login from "./login";

class home extends Component {
  constructor(props) {
    super(props);
    this.state = { login: false, register: false };
  }

  loginClick = e => {
    this.setState({ login: true });
  };

  registerClick = e => {
    this.setState(prevState=>({
      register: !prevState.register
    }))
  };

  render() {
    return (
      <div>
        <Jumbotron
          className="jumbo"
          style={{ marginBottom: "0px", padding: "0px" }}
        >
          <h3 className="display-4" style={{ paddingTop: "0px" }}>
            Hello, Sales!
          </h3>

          <div>
            {this.state.register === true ? <Login /> :
            <img src={beta} alt="beta" />}
          </div>
          <p className="lead">
            Find recipes and items on sale to create a shopping list which
            maximizes savings!
          </p>
          <hr className="my-2" />

          <p
            className="lead"
            style={{ marginBottom: "0px", paddingBottom: "9px" }}
          >
            <Button color="primary" style={{ fontSize: "12px" }}>
              Select Stores <i>(Coming soon)</i>
            </Button>
            <Button
              onClick={this.registerClick}
              color="white"
              style={{ fontSize: "12px", backgroundColor: "white" }}
            >
              Sign Up
            </Button>
            <Button
              color="white"
              style={{
                fontSize: "12px",
                backgroundColor: "black",
                color: "white"
              }}
            >
              Login
            </Button>
          </p>
        </Jumbotron>
        <div
          className="introBack"
          style={{
            height: "790px",
            backgroundImage: `url(${foodmoney})`,
            backgroundSize: "cover"
          }}
        />
      </div>
    );
  }
}
/*<div className="content" style={{ backgroundImage: `url(${picture})`, height: "1300px", padding: "0%"}}>*/

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div
            className="navigation"
            style={{
              position: "sticky",
              top: "0px",
              zIndex: "9"
            }}
          >
            <FoodNav cookies={this.props.cookies} />
          </div>

          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/meats" component={MeatContainer} />
            <Route exact path="/vegetables" component={VegetableContainer} />
            <Route exact path="/dairy" component={DairyContainer} />
            <Route exact path="/drinks-snacks" component={DrinkContainer} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCookies: () => {
      dispatch(getCookies());
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(App);
