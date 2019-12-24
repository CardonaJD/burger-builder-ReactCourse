import React from 'react';
import classes from './BuildControl.module.css'

const buildControl = (props) => {
    console.log(JSON.stringify(classes, null, 4))
    return (
        <div className = {classes.BuildControl}>
            <div className = {classes.Label}> {props.label} </div>
            <button className = {classes.Less}>LESS</button>
            <button className = {classes.More}>MORE</button>
        </div>
    )
}

export default buildControl;