import React from 'react'

import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label : 'Salad' , type: 'salad'},
    { label : 'Bacon' , type: 'bacon'},
    { label : 'Cheese' , type: 'cheese'},
    { label : 'Meat' , type: 'meat'},
]

function BuildControls(props) {
    console.log(props.disabled)
    return (
        <div className = 'BuildControls'>
            <p>Current Price : <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map (ctrl =>(
                <BuildControl 
                key ={ctrl.label} 
                label = {ctrl.label}
                added = {()=>props.func1(ctrl.type)}
                removed = {()=>props.func2(ctrl.type)}
                disabled = {props.disabled[ctrl.type]}
                >
                </BuildControl>
            ))}
             <button 
             className ='OrderButton'
             disabled = {!props.purchasable}
             onClick = {props.ordered}
             >ORDER NOW</button>
        </div>
    )
}

export default BuildControls
