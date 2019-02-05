import React from "react";
import { Nav, NavItem} from "reactstrap";
import {
  BrowserRouter as Router,
  Route, NavLink, Switch
} from 'react-router-dom';
import CartContainer from './cartcontainer'
const sections = ["Vegetables", "Dairy", "Meats", "Drinks"];

const Navs = ({section}) => {

return (

<NavLink className="navigs" exact to={`/${section}`}>{`${section}`}</NavLink>


  )
}



class FoodNav extends React.Component {
  render() {
    return (
      <div>
      
      
        <Nav className="menu">
          <NavLink className="navigs"
      exact to="/">Home</NavLink>
        {sections.map(section=>{
          return (
        <Navs section = {section}/>
        )})}
        <CartContainer/>

        </Nav> 
        
     
      
      </div>
    );
  }
}

export default FoodNav