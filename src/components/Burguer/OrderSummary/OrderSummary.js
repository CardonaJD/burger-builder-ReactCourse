import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button'

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
    <p><strong>Total price: {props.price.toFixed(2)} $</strong></p>
            <p>Continue to Checkout ? </p>
            <Button btnType = 'Danger' clicked = {props.purchaseCancel}>CANCEL</Button>  
            <Button btnType = 'Success' clicked = {props.purchaseContinue}>CONTINUE</Button>  
        </Auxiliary>
    )
}

export default orderSummary