import React from 'react';
import './Header.css'

function Header(props) {
  return (
    <div className="Header">
      <header className="Header-header">
        <p>
          Welcome to Poke React!
      </p>
      </header>
      {props.children}
    </div>
  );
}

export default Header;