import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';

const orderSummary = (props) => {
    const ingredientsSummary = [];

    for (let [ingKey, IngQty] of Object.entries(props.ingredients)) {
        ingredientsSummary.push(
            <li key = {ingKey}>
                <span style = {{textTransform: 'capitalize'}}>{ingKey}</span> : {IngQty} 
            </li>
        )
    }

    return ( 
        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to checkout</p>     
        </Auxiliary>
    )
}

export default orderSummary