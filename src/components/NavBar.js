import React from "react";
import { NavLink} from "react-router-dom";
function NavBar() {
  return (
    <div className="navbar">
      {/* home navlink */}
      <NavLink
        to="/"
        exact
        activeStyle={{ background: "darkblue"}}>
        Home
      </NavLink>
          {/* movies navlink */}
        <NavLink
        to="/movies"
        activeStyle={{ background: "darkblue",}}>
          Movies
        </NavLink>
        {/* directors navlink */}
      <NavLink
        to="/directors"
        activeStyle={{background: "darkblue",}}>
            Directors
          </NavLink>
        {/* actors navlink */}
        <NavLink
        to="/actors"
        activeStyle={{ background: "darkblue",}}>
          Actors
          </NavLink>
    </div>
  )
}

export default NavBar;
