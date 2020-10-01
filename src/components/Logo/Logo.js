import React from 'react'

import burgerLogo from '../../assets/Images/burger_logo.png'
import './Logo.css'

const Logo= (props)=> {
    return (
        <div className = "Logo" > 
            <img src = {burgerLogo} alt = "My Burger"/> 
        </div>
    )
}

export default Logo
