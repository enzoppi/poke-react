import React from 'react';
import './Layout.css';

function Layout(props) {
  return (
    <div className="Layout">
      {props.children}
    </div>
  );
}

export default Layout;