import React, { Component } from "react";
import Axios from '../../axios-orders';
import Order from '../../components/Order/Order';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'


class Orders extends Component {

    state = {
        orders : [],
        loading: true,
        error: false
    }

    componentDidMount(){
        Axios.get('/orders.json')
        .then(response => {
            let orders = [];
            for (let [orderKey, orderData] of Object.entries(response.data) ) {
                orders.push({
                    ...orderData,
                    id : orderKey
                })
            }
            this.setState({orders : orders, loading : false})
        })
        .catch(error => {
            this.setState({error: true, loading : false})
        })
    }
    render () {
        let orders = this.state.orders.map(order => {
            var {customer, deliveryMethod, ingredients, price, id} = order;
            return <Order key = {id} price = {price} customer = {customer} ingredients = {ingredients} deliveryMethod = {deliveryMethod}/>
        });
        return (
            <div>{orders}</div>
        )
    }
}

export default withErrorHandler(Orders, Axios);