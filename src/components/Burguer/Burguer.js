import React from 'react'
import BurguerIngredient from './BurgerIngredient/BurguerIngredient'
import classes from './Burguer.module.css'

const burger = (props) => {
    console.log(classes.Burger)
    return(
        <div className={classes.Burger}>
            <BurguerIngredient type='bread-top'></BurguerIngredient>
            <BurguerIngredient type='cheese'></BurguerIngredient>
            <BurguerIngredient type='meat'></BurguerIngredient>
            <BurguerIngredient type='bread-botton'></BurguerIngredient>
        </div>
    )
}

export default burger;