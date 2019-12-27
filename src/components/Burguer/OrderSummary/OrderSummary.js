import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {

    componentDidUpdate(){
        console.log('[OrderSummary]')
    }

    render () {
        const ingredientsSummary = [];

        for (let [ingKey, IngQty] of Object.entries(this.props.ingredients)) {
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
        <p><strong>Total price: {this.props.price.toFixed(2)} $</strong></p>
                <p>Continue to Checkout ? </p>
                <Button btnType = 'Danger' clicked = {this.props.purchaseCancel}>CANCEL</Button>  
                <Button btnType = 'Success' clicked = {this.props.purchaseContinue}>CONTINUE</Button>  
            </Auxiliary>
        )
    }
}


export default OrderSummary