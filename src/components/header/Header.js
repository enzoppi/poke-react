import React from 'react';
import './Header.css'

function Header(props) {
  return (
    <div className="Header">
      <header className="Header-header">
        <p className="Header-topbar">
          Welcome to Poke React!
        </p>
        <div className="Header-children">
          {props.children}
        </div>
      </header>
    </div>
  );
}

export default Header;