import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary'
import Burguer from '../../components/Burguer/Burguer'

class BurgerBuilder extends Component {
    render () {
        return (
            <Auxiliary>
                <Burguer />
                <div>Build controls</div>
            </Auxiliary>
        )
    }
}

export default BurgerBuilder