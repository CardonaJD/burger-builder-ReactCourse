import React, { Component } from "react";
import Button from '../../../components/UI/Button/Button';
import classes from "./ContacData.module.css";
import Axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner'


class ContacData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street : '',
            postalCode : ''
        },
        loading: false,
    }

    orderHandler = (e) => {
        e.preventDefault();
        this.setState({loading : true})
        const order = {
            ingredients : this.props.ingredients,
            price : this.props.price,
            customer: {
                name : 'Jose David',
                address : {
                    street : 'TestStreet',
                    zipCode : '11111',
                    country : 'Colombia'
                },
                email : 'test@test.com'
            },
            deliveryMethod : 'fastest'
        }
        Axios.post('/orders.json', order)
            .then(response => {
                // console.log(response)
                this.setState({loading : false })
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading : false })
            });
    }

    render () {
        let form = (
            <form>
                <input type='text' name='name' placeholder ='Your Name'></input>
                <input type='email' name='email' placeholder ='Your Email'></input>
                <input type='text' name='street' placeholder ='Your Street'></input>
                <input type='text' name='postal' placeholder ='Postal Code'></input>
                <Button btnType = 'Success' clicked = {(e) => this.orderHandler(e)} > ORDER </Button>
            </form>
        );

        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className = {classes.ContactData}>
                <h4>Enter your  Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default ContacData;