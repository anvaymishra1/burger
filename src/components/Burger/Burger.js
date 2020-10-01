import React from 'react'

import './Burger.css';

import BurgerIngredient from './BurgerIngredients/BurgerIngredient';
const burger = (props) => {
    console.log(props.val)
    let transformedIngredients = Object.keys(props.val)
    .map(igKey => {
        return [...Array(props.val[igKey])].map((_,i)=>{
            return <BurgerIngredient key = {igKey + i} type = {igKey}/>;
        });
    })
    .reduce((arr,el)=>{
        return arr.concat(el)
    },[]);
    if(transformedIngredients.length ===0){
        transformedIngredients = <p>Please enter elements</p>
    }
    return (
        <div className = 'Burger'>
            <BurgerIngredient type = "bread-top"></BurgerIngredient>
            {transformedIngredients}
            <BurgerIngredient type = "bread-bottom"></BurgerIngredient>
        </div>
    )
}

export default burger
