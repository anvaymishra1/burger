import React from 'react'

import Logo from '../../../Logo/Logo';
import NavigationItems from '../NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../../UI/Backdrop/Backdrop'
import Aux from '../../../../hoc/Auxi'

const SideDrawer = (props) => {
    let attachedClasses = ["SideDrawer","Close"];
    if(props.open){
        attachedClasses = ["SideDrawer","Open"]
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked = {props.closed}></Backdrop>
        <div className = {attachedClasses.join(' ')}>
            <div className = "SDLogo">
                <Logo />
            </div>
            <nav>
                <NavigationItems></NavigationItems>
            </nav>
        </div>
        </Aux>
    )
}

export default SideDrawer
