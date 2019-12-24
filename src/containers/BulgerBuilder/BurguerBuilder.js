import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import Burguer from '../../components/Burguer/Burguer'

class BurgerBuilder extends Component {
    constructor(props){
        super(props);
        this.state = {
            ingredientes: {
                salad: 1,
                bacon: 1,
                cheese: 2,
                meat: 2
            }
        } 
    }
    render () {
        return (
            <Auxiliary>
                <Burguer ingredients={this.state.ingredientes}/>
                <div>Build controls</div>
            </Auxiliary>
        )
    }
}

export default BurgerBuilder