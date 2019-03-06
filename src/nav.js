import React from "react";
import { Nav } from "reactstrap";
import { NavLink } from "react-router-dom";
import CartContainer from "./cartcontainer";

const sections = ["Vegetables", "Dairy", "Meats", "Drinks-Snacks"];

const Navs = ({ section, info }) => {
  return (
    <NavLink
      className="navigs"
      key={info}
      exact
      to={`/${section}`}
    >{`${section}`}</NavLink>
  );
};

class FoodNav extends React.Component {
  render() {
    return (
      <Nav className="menu">
        <NavLink className="navigs" exact to="/">
          Home
        </NavLink>
        {sections.map((section, i) => {
          return <Navs section={section} key={i} />;
        })}

        <CartContainer />
      </Nav>
    );
  }
}

export default FoodNav;
