import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import Burguer from '../../components/Burguer/Burguer'
import BurgerControls from '../../components/Burguer/BuildControls/BuildControls'

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
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            },
            totalPrice : INGREDIENT_PRICES.basePrice,
            purchaseable: false
        } 
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

    render () {
        const disableInfo = {
            ...this.state.ingredients
        };

        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] === 0;
        }

        return (
            <Auxiliary>
                <Burguer ingredients={this.state.ingredients}/>
                <BurgerControls
                    ingredientAdd = {this.addingIngredientHandler}
                    ingredientRemove = {this.removeIngredientHandler}
                    disabled = {disableInfo}
                    price = {this.state.totalPrice}
                    purchaseble = {!this.state.purchaseable}
                ></BurgerControls>
            </Auxiliary>
        )
    }
}

export default BurgerBuilder