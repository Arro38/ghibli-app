import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/favorites" end style={{ marginLeft: "20px" }}>
        Favorites
      </NavLink>
    </nav>
  );
}
