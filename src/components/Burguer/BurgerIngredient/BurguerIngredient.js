import React from 'react'
import classes from './BurgerIngredient.module.css'
import Proptypes from 'prop-types'

const burguerIngredient = (props) => {
    var ingredient = null;

    switch (props.type) {
        case 'bread-botton' :
            ingredient = <div className = {classes.BreadBottom}> </div>
            break;
        case 'bread-top' :
            ingredient = (
                <div className = {classes.BreadTop}>
                    <div className = {classes.Seeds1}></div>
                    <div className = {classes.Seeds2}></div>
                </div>
            );
            break;
        case 'meat' :
            ingredient = <div className = {classes.Meat}></div>
            break;
        case 'cheese' :
            ingredient = <div className = {classes.Cheese}></div>
            break;
        case 'bacon' :
            ingredient = <div className = {classes.Bacon}></div>
            break;
        case 'salad' :
            ingredient = <div className = {classes.Salad}></div>
            break;
        default : 
        ingredient = null;
    }
    return ingredient
};

burguerIngredient.propTypes = {
    type : Proptypes.string.isRequired
}

export default burguerIngredient