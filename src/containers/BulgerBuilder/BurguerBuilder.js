import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import Burguer from '../../components/Burguer/Burguer'
import BurgerControls from '../../components/Burguer/BuildControls/BuildControls'

class BurgerBuilder extends Component {
    constructor(props){
        super(props);
        this.state = {
            ingredientes: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0
            }
        } 
    }
    render () {
        return (
            <Auxiliary>
                <Burguer ingredients={this.state.ingredientes}/>
                <BurgerControls></BurgerControls>
            </Auxiliary>
        )
    }
}

export default BurgerBuilder