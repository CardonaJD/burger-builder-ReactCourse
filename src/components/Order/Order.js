import React from 'react';
import classes from './Order.module.css'

const order = (props) => {
    let ingredients = [];
    for (let [ingName, ingQty] of Object.entries(props.ingredients)) {
        ingredients.push(
            <span key = {ingName}> {ingName} ({ingQty}) </span>
        )
    }
    return (
        <div className = {classes.Order}>
            <p>Ingredients: {ingredients}</p>
            <p>Price <strong>USD {props.price}</strong></p>
            <p>{JSON.stringify(props.ingredients, null ,4)}</p>
            <p>{props.price}</p>
            <p>{props.deliveryMethod}</p>
            <p>{JSON.stringify(props.customer, null, 4)}</p>
        </div>
    )
};

export default order;