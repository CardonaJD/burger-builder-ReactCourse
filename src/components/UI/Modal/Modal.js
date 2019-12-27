import React, { Component } from 'react'
import classes from './Modal.module.css'
import Auxiliary from '../../../hoc/Auxiliary';
import BackDrop from '../Backdrop/Backdrop';

 class Modal extends Component {

    shouldComponentUpdate(prevState, prevProps){
        return prevState.show !== this.props.show;
    }
     
    render(){
        return (
            <Auxiliary>
                <BackDrop show = {this.props.show} clicked = {this.props.modalClosed}></BackDrop>
                <div 
                    className = {classes.Modal}
                    style = {{
                        transform : this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity : this.props.show ? '1' : '0'
                    }}
                    >  {this.props.children}
                </div>
            </Auxiliary>
        );
    } 
}


export default Modal;