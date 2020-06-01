import React from 'react';
import './main.css'

function InputField(props) {
    return (
        <div className="inputField" > 
            <input 
                className="input"
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={ (e) => props.onChange(e.target.value)}
                maxLength={props.maxLength}
            />
        </div>
    )
}

export default InputField
