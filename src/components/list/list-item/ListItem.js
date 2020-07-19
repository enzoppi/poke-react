import React, { useState } from 'react';
import './ListItem.css';
import Info from '../../info/Info';

let timeout = null;

function ListItem(props) {
  const [isShown, setIsShown] = useState(false);

  const showItem = () => {
    timeout = setTimeout(() => setIsShown(true), 500);
  };

  const hideItem = () => {
    clearTimeout(timeout);
    setIsShown(false);
  };

  return <li className="List-Item" key={props.item.name}
    onMouseEnter={showItem} onMouseLeave={hideItem}>
    {isShown && <Info> {props.item.info} </Info>}
    <img className="List-Item-sprite" src={props.item.sprite} alt={props.item.name} />
    <p className="List-Item-title">{props.item.name}</p>
  </li>
}

export default ListItem;
