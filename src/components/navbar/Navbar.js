import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css';

function Navbar() {
  return (
    <div>
      <nav>
        <ul className="Navbar-list">
          <li key="home" className="Navbar-list-item">
            <NavLink to="/home" activeClassName="active-route" className="Navbar-NavLink">
              Pokemon
            </NavLink>
          </li>
          <li key="abilities" className="Navbar-list-item">
            <NavLink to="/abilities" activeClassName="active-route" className="Navbar-NavLink">
              Abilities
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
