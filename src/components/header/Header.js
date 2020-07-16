import React from 'react';

function Header(props) {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to Poke React!
      </p>
      </header>
      {props.children}
    </div>
  );
}

export default Header;