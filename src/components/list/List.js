import React from 'react';
import './List.css';
import ListItem from './list-item/ListItem';

function List(props) {

  return (
    <ul className="List">
      {props.list.map((item) => <ListItem item={item} />)}
    </ul>
  )
}

export default List;
