import React from "react";
import ReactDOM from "react-dom";
/* Add NavLink to import */
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import Add  from "./Add";
// import  BookedProperties from "./BookedProperties "

/* Add basic styling for NavLinks */
const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "black",
  textDecoration: "none",
  color: "white",
};

/* define the NavBar component */
function NavBar() {
  return (
    <div id="navBar">
      <NavLink
        to="/"
        /* set exact so it knows to only set activeStyle when route is deeply equal to link */
        exact
        /* add styling to Navlink */
        style={linkStyles}
        /* add prop for activeStyle */
        activeStyle={{
          background: "darkblue",
        }}
      >
       Home
      </NavLink>
      <NavLink
        to="/add"
        exact
        style={linkStyles}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Add 
      </NavLink>
      <NavLink
        to="/delisted"
        exact
        style={linkStyles}
        activeStyle={{
        background: "darkblue",
        }}
      >
        DeListed
      </NavLink>
      <hr/>
    </div>
  );
}

export default NavBar
