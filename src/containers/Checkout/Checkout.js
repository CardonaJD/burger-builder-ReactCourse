import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    state = {
        ingredients: null
    }

    checkoutCancelHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    componentDidMount(){
        let params = new URLSearchParams(this.props.location.search);
        let ingredients = {};
        
        for ( let [ingKey, ingQty] of params.entries()) {
            ingredients[ingKey] = ingQty;
        }

        this.setState({ingredients : ingredients});
    }

    render(){
        console.log(this.props)
        return (
            <div>
                <CheckoutSummary 
                    ingredients = {this.state.ingredients}
                    checkoutCanceled = {this.checkoutCancelHandler}
                    checkoutContinued = { this.checkoutContinueHandler}>
                </CheckoutSummary>
            </div>
        )
    }
}

export default Checkout;