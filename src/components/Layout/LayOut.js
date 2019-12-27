import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import ToolBar from '../Navigation/ToolBar/ToolBar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    constructor(props){
        super(props);
        this.state = {
            showSideDrawer : false
        } 
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer : false})
    }

    toggleSideDrawerHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer : !prevState.showSideDrawer}
        })
    }

    render () {
        return (
            <Auxiliary>
                <ToolBar toggleSideDrawer = {this.toggleSideDrawerHandler} />
                <SideDrawer open = {this.state.showSideDrawer} closed = {this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        )
    }
}

export default Layout