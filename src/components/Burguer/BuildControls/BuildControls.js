import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label : 'Salad', type: 'salad'},
    {label : 'Bacaon', type: 'bacon'},
    {label : 'Chesse', type: 'cheese'},
    {label : 'Meat', type: 'meat'}
];

const buildControls = (props) => {
    return (
        <div className = {classes.BuildControls}>
            <p>Price: <strong>{props.price.toFixed(2)}</strong>$</p>
            {controls.map((control) => (
                <BuildControl 
                    label = {control.label} 
                    key = {control.type}
                    added = {() => props.ingredientAdded(control.type)}
                    removed = {() => props.ingredientRemoved(control.type)}
                    disabled = {props.disabled[control.type]}
                ></BuildControl>
                ))}
            <button 
                className = {classes.OrderButton} 
                disabled = {props.purchaseble}
                onClick = {props.ordered} 
                >ORDER NOW</button>
        </div>
    );
}

export default buildControls;