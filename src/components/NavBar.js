import React from "react";
import ReactDOM from "react-dom";
/* Add NavLink to import */
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import Add  from "./Add";
// import  BookedProperties from "./BookedProperties "

/* Add basic styling for NavLinks */
const linkStyles = {
  display: "inline-block",
  // width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "gray",
  textDecoration: "none",
  color: "white",
};


function NavBar() {
  return (
    <div id="navBar">
      <NavLink
        to="/"
       
        exact
        
        style={linkStyles}
       
        activeStyle={{
          background: "black",
        }}
      >
       Home
      </NavLink>
      <NavLink
        to="/add"
        exact
        style={linkStyles}
        activeStyle={{
          background: "black",
        }}
      >
        Add 
      </NavLink>
      <NavLink
        to="/delisted"
        exact
        style={linkStyles}
        activeStyle={{
        background: "black",
        }}
      >
        DeListed
      </NavLink>
      <hr/>
    </div>
  );
}

export default NavBar
