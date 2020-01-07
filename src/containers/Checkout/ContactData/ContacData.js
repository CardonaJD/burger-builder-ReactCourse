import React, { Component } from "react";
import Button from '../../../components/UI/Button/Button';
import classes from "./ContacData.module.css";
import Axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input'
import input from "../../../components/UI/Input/Input";


class ContacData extends Component {
    state = {
        orderForm : {
            name : {
                elementType : 'input',
                elementconfig : {
                    type : 'text',
                    placeholder : 'Your Name'
                },
                value: ''
            },
            street : {
                elementType : 'input',
                elementconfig : {
                    type : 'text',
                    placeholder : 'Street'
                },
                value: ''
            },
            zipCode : {
                elementType : 'input',
                elementconfig : {
                    type : 'text',
                    placeholder : 'ZIP Code'
                },
                value: ''
            },
            country : {
                elementType : 'input',
                elementconfig : {
                    type : 'text',
                    placeholder : 'Country'
                },
                value: ''
            },
            email : {
                elementType : 'input',
                elementconfig : {
                    type : 'email',
                    placeholder : 'Your E-Mail'
                },
                value: ''
            },
            deliveryMethod : {
                elementType : 'select',
                elementconfig : {
                    options : [
                        {value: 'fastes', displayName: 'Fastest'},
                        {value: 'cheapest', displayName: 'Cheapest'}
                    ]
                },
                value: ''
            }
        },
        loading: false,
    }

    orderHandler = (e) => {
        e.preventDefault();
        this.setState({loading : true});
        const formData = {};
        for (let formElement in this.state.orderForm) {
            formData[formElement] = this.state.orderForm[formElement].value;
        }
        const order = {
            ingredients : this.props.ingredients,
            price : this.props.price,
            orderData : formData
        };
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

    inputChangedHandler = (e, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = { 
            ...updatedOrderForm[inputIdentifier]
        };

        updatedFormElement.value = e.target.value;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        this.setState({orderForm : updatedOrderForm });
    }

    render () {
        let inputs = [];
        for (let [formElement, {elementType, elementconfig, value}] of Object.entries(this.state.orderForm)) { 
            inputs.push(
                <Input 
                    elementType = {elementType} 
                    elementConfig = {elementconfig} 
                    value = {value} 
                    key = {formElement}
                    changed = {(e) => this.inputChangedHandler(e, formElement)} >
                </Input>
            );
        }  
        let form = (
            <form onSubmit = {(e) => this.orderHandler(e)}>
                {inputs}
                <Button btnType = 'Success' > ORDER </Button>
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