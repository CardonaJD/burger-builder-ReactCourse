import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Navigationitems/NavigationItems'

const toolBar = (props) => (
    <header className = {classes.Toolbar}>
        <div>MENU</div>
        <Logo></Logo>
        <NavigationItems />
    </header>
);

export default toolBar;