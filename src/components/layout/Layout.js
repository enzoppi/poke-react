import React from 'react';

function Layout(props) {
  return (
    <div className="Layout">
      {props.children}
    </div>
  );
}

export default Layout;