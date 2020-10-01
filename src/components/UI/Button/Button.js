import React from 'react'

import'./Button.css';

function Button(props) {
    console.log(['Button' , props.btnType].join(' '))
    return (
        <button 
        disabled = {props.disabled}
        className = {['Button' , props.btnType].join(' ')}
        onClick = {props.clicked}>
            {props.children}
        </button>
    )
}

export default Button
