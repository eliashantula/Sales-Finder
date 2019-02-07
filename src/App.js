import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './menu'
import FoodNav from './nav'
import { Nav, NavItem } from "reactstrap";
import MeatContainer from './meatcontainer'
import VegetableContainer from './vegetablecontainer'
import DairyContainer from './dairycontainer'
import DrinkContainer from './drinkcontainer'
import picture from "./dairy.jpg";
import {
  BrowserRouter as Router,
  Route, NavLink, Switch
} from 'react-router-dom'
import { Jumbotron, Button } from 'reactstrap';
import CartContainer from './cartcontainer'


const home = (props) => {
return (

    <div>
      <Jumbotron className="jumbo">
        <h1 className="display-3">Hello, Sales!</h1>
        <p className="lead">Choose your items and check out some money saving recipes</p>
        <hr className="my-2" />

        <p className="lead">
          <Button color="primary">Select Stores</Button>
        </p>
      </Jumbotron>
    </div>





  )
}

/*<div className="content" style={{ backgroundImage: `url(${picture})`, height: "1300px", padding: "0%"}}>*/






class App extends Component {
  render() {
    return (
      <Router>

      <div className="App">
      <div className="wrapper">
         <div className="navigation" style={{position: "sticky",
  top: "0", zIndex: "9"}}>

        <FoodNav />
        
        </div>

        <Switch>
      
      <Route exact path="/" component={home}/>

     <Route exact path = "/meats" component={MeatContainer}/>
      <Route exact path = "/vegetables" component={VegetableContainer}/>
      <Route exact path ="/dairy" component ={DairyContainer}/>
      <Route exact path = '/drinks' component = {DrinkContainer}/>
      
</Switch>
     </div>
      </div>
      </Router>
    );
  }
}

export default App;
