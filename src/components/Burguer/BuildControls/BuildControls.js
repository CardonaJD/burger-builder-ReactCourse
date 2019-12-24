import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label : 'Salad', type: 'salad'},
    {label : 'Bacaon', type: 'bacaon'},
    {label : 'Chesse', type: 'chesse'},
    {label : 'Meat', type: 'meat'}
];

const buildControls = (props) => {
    return (
        <div className = {classes.BuildControls}>
            {controls.map((control) => (
                <BuildControl label = {control.label} key = {control.type}></BuildControl>
                ))}
        </div>
    );
}

export default buildControls;