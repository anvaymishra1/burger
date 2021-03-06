import React from 'react'

import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'

import './CheckoutSummary.css'

function CheckoutSummary(props) {
    console.log(props)
    return (
        <div className = 'CheckoutSummary'>
            <h1>We hope it tastes well!</h1>
            <div style = {{width:'100%',margin:'auto'}}>
                <Burger val = {props.ingredients}></Burger>
            </div>
            <Button 
            btnType = "Danger"
            clicked = {props.checkoutCancelled}
            >CANCEL</Button>
            <Button 
            btnType = "Success"
            clicked = {props.checkoutContinued}
            >CONTINUE</Button>
        </div>
    )
}

export default CheckoutSummary
