import React from 'react';
import '../AButton/main.css';


function AButton(props) {
    return (
        <div className="aButton">
            <button 
                className="button"
                disabled={props.disabled}
                onClick={props.onClick}
            >{props.text}</button> 
        </div>
    )
}

export default AButton


