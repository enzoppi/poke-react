import React, { useState, useEffect } from 'react';
import '../List.css';

function ListItem(props) {
  const [isShown, setIsShown] = useState(false);

  return <li className="List-Item" key={item.name} 
  onMouseEnter={() => setTimeout(() => setIsShown(true), 500)} onMouseLeave={() => setIsShown(false)}>
    {isShown && <div> info goes here </div>}
    <img src={item.sprite} alt={item.name} />
    {item.name}
  </li>
}

export default ListItem;