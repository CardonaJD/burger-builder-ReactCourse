import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import Burguer from '../../components/Burguer/Burguer';
import BurgerControls from '../../components/Burguer/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burguer/OrderSummary/OrderSummary'
import Axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

const INGREDIENT_PRICES = {
    salad: 0.7,
    bacon: 0.6,
    cheese: 0.8,
    meat: 1.3,
    basePrice : 4
}

class BurgerBuilder extends Component {
    constructor(props){
        super(props);
        this.state = {
            ingredients: null,
            totalPrice : INGREDIENT_PRICES.basePrice,
            purchaseable: false,
            purchasing: false,
            loading : false,
            error: false
        } 
    }

    componentDidMount(){
        Axios.get('/ingredients.json')
            .then(response => {
                this.setState({ingredients : response.data})
            })
            .catch(error => {
                this.setState({error: true})
            })
    }

    addingIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({ingredients:updatedIngredients, totalPrice: newPrice});
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        this.setState({ingredients:updatedIngredients, totalPrice: newPrice});
        this.updatePurchaseState(updatedIngredients);
    }

    updatePurchaseState = (ingredients) => {
        let ingredientsAmount = 0;
        for (let keyIg in ingredients) {
            ingredientsAmount += ingredients[keyIg];
        }

        this.setState({purchaseable: ingredientsAmount > 0});
    }

    purchaseHandler = () => {
        this.setState({purchasing : true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing : false});
    }

    purchaseContinueHandler = () => {
        // alert('You Continue');
        this.setState({loading : true})
        const order = {
            ingredients : this.state.ingredients,
            price : this.state.totalPrice,
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
                this.setState({loading : false, purchasing : false })
            })
            .catch(error => {
                this.setState({loading : false, purchasing : false })
            });
    }

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for ( let key in disabledInfo ) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let orderSummary = null;
        let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

        if ( this.state.ingredients ) {
            burger = (
                <Auxiliary>
                    <Burguer ingredients={this.state.ingredients} />
                    <BurgerControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        purchasable={this.state.purchasable}
                        ordered={this.purchaseHandler}
                        price={this.state.totalPrice} />
                </Auxiliary>
            );
            orderSummary = <OrderSummary
                ingredients={this.state.ingredients}
                price={this.state.totalPrice}
                purchaseCancelled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler} />;
        }
        if ( this.state.loading ) {
            orderSummary = <Spinner />;
        }

        return (
            <Auxiliary>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Auxiliary>
        );
    }
}

export default withErrorHandler(BurgerBuilder, Axios);