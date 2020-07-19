import React, { useState, useEffect } from 'react';
import './List.css';

function List(props) {

  return (
    <ul className="List">
      {props.list.map((item) => {

      })}
    </ul>
  )
}

export default List;
