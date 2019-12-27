import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../Navigationitems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

const toolBar = (props) => (
    <header className = {classes.Toolbar}>
        <DrawerToggle clicked = {props.toggleSideDrawer}/>
        <Logo/>
        <nav className = {classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolBar;