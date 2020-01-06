import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContacData from './ContactData/ContacData';

class Checkout extends Component {
    state = {
        ingredients: null,
        totalPrice: 0
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
        let price = 0;
        for ( let [ingKey, ingQty] of params.entries()) {
            if (ingKey === 'price') {
                price = ingQty;
            } else {
                ingredients[ingKey] = ingQty;
            }
        }

        this.setState({ingredients : ingredients, totalPrice: price});
    }

    render(){
        console.log(this.props.match)
        return (
            <div>
                <CheckoutSummary 
                    ingredients = {this.state.ingredients}
                    checkoutCanceled = {this.checkoutCancelHandler}
                    checkoutContinued = { this.checkoutContinueHandler}>
                </CheckoutSummary>
                <Route path = {this.props.match.path + '/contact-data'}
                render = {() => <ContacData ingredients = {this.state.ingredients} price = {this.state.totalPrice} {...this.props}/>}/>
            </div>
        )
    }
}

export default Checkout;