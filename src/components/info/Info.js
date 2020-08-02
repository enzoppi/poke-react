import React from 'react';
import './Info.css';

function Info(props) {
    return(
        <div className="Info">
            {props.children}
        </div>
    )
}

export default Info;