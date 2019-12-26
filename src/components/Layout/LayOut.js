import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import classes from './Layout.module.css';
import ToolBar from '../Navigation/ToolBar/ToolBar';

const layout = (props) => (
    <Auxiliary>
        <ToolBar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxiliary>
);

export default layout