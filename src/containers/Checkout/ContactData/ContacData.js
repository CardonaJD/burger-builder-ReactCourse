import React, { Component } from "react";
import Button from '../../../components/UI/Button/Button';
import classes from "./ContacData.module.css";
import Axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input'


class ContacData extends Component {
    state = {
        orderForm : {
            name : {
                elementType : 'input',
                elementconfig : {
                    type : 'text',
                    placeholder : 'Your Name'
                },
                value: '',
                validation:{
                    required:true
                },
                valid: false,
                touched: false
            },
            street : {
                elementType : 'input',
                elementconfig : {
                    type : 'text',
                    placeholder : 'Street'
                },
                value: '',
                validation:{
                    required:true
                },
                valid: false,
                touched: false
            },
            zipCode : {
                elementType : 'input',
                elementconfig : {
                    type : 'text',
                    placeholder : 'ZIP Code'
                },
                value: '',
                validation:{
                    required:true,
                    minLength: 4,
                    maxLength: 6
                },
                valid: false,
                touched: false
            },
            country : {
                elementType : 'input',
                elementconfig : {
                    type : 'text',
                    placeholder : 'Country'
                },
                value: '',
                validation:{
                    required:true
                },
                valid: false,
                touched: false
            },
            email : {
                elementType : 'input',
                elementconfig : {
                    type : 'email',
                    placeholder : 'Your E-Mail'
                },
                value: '',
                validation:{
                    required:true
                },
                valid: false,
                touched: false
            },
            deliveryMethod : {
                elementType : 'select',
                elementconfig : {
                    options : [
                        {value: 'fastes', displayName: 'Fastest'},
                        {value: 'cheapest', displayName: 'Cheapest'}
                    ]
                },
                value: '',
                valid: true
            }
        },
        loading: false,
        formIsValid: false
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
        updatedFormElement.valid = this.checkValidity(e.target.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let inputElmentsValidation = [];

        for (let inputElement in updatedOrderForm) {
            inputElmentsValidation.push(updatedOrderForm[inputElement].valid);
        }
        let formIsValid = inputElmentsValidation.every((validValue) => validValue == true );
        this.setState({orderForm : updatedOrderForm, formIsValid : formIsValid });
    }

    checkValidity (value, rules) {
        if (rules) {
            let isValid = true;
    
            if (rules.required) {
                isValid = value.trim() !== '' && isValid;
            }
    
            if (rules.minLength) {
                isValid = value.length >= rules.minLength && isValid;
            }
    
            if (rules.maxLength) {
                isValid = value.length <= rules.maxLength && isValid;
            }
    
            return isValid;
        }
    }

    render () {
        let inputs = [];
        for (let [formElement, {elementType, elementconfig, value, validation, valid, touched}] of Object.entries(this.state.orderForm)) { 
            inputs.push(
                <Input 
                    elementType = {elementType} 
                    elementConfig = {elementconfig} 
                    value = {value} 
                    key = {formElement}
                    invalid = {!valid}
                    shouldValidate = {validation}
                    touched = {touched}
                    changed = {(e) => this.inputChangedHandler(e, formElement)} >
                </Input>
            );
        }  
        let form = (
            <form onSubmit = {(e) => this.orderHandler(e)}>
                {inputs}
                <Button btnType = 'Success' disabled = {!this.state.formIsValid} > ORDER </Button>
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