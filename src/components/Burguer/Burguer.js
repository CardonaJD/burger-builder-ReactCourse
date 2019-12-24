import React from 'react'
import BurguerIngredient from './BurgerIngredient/BurguerIngredient'
import classes from './Burguer.module.css'

const burger = (props) => {
    let transformedIngredients = [];

    for (let ingredientKey in props.ingredients ) {
        let ingredientQty = props.ingredients[ingredientKey]
        for (let i = 0; i < ingredientQty; i++) {
            transformedIngredients.push(
                <BurguerIngredient type = {ingredientKey} key={ingredientKey + i}/>
            )
        }
    }

    if (transformedIngredients.length === 0){
        transformedIngredients = <p> Please start adding ingredients</p>
    }

    return(
        <div className={classes.Burger}>
            <BurguerIngredient type = 'bread-top'/>
            {transformedIngredients}
            <BurguerIngredient type = 'bread-botton'/>
        </div>
    )
}

export default burger;