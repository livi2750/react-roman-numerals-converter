import React from 'react'

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


