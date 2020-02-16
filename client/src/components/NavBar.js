import React, { useState } from 'react';

import './css/NavBar.css';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import CreateIcon from '@material-ui/icons/Create';
import SearchIcon from '@material-ui/icons/Search';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
};

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: 360,
        backgroundColor: "rgba(45,99,127,1)",
        borderRight: "1px solid rgba(189, 195, 199, 0.5)", 
        minHeight: "100vh",
        boxShadow: "5px 0 5px -2px #888",
        color: "#ffffff",
        position: "fixed"
    },
    nested: {
        paddingLeft: theme.spacing(9)
    },
    nestedRoot: {
        paddingLeft: theme.spacing(6.75)
    },
    nestedDouble: {
      paddingLeft: theme.spacing(12)
    },list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  }));

export const NavBar = ({ currentUser, onSignOut }) => {
    const classes = useStyles();
    const [state, setState] = useState({
        left: false
      });

    const [librariesOpen, setLibrariesOpen] = useState(false);
    const [equipmentOpen, setEquipmentOpen] = useState(false);

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }

        setState({ ...state, [side]: open });
    };

    const handleClick = tab => {
        if (tab === "libraries") {
            setLibrariesOpen(!librariesOpen);
        } else {
            setEquipmentOpen(!equipmentOpen);
        };
    };

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(side, false)}
            onKeyDown={toggleDrawer(side, false)}
        >
            <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListItemLink button 
                    href="/"
                    className="logo"
                >
                    TECHR
                    <i className="fas fa-dice-d20 fa fa-spin-hover"></i>
                    LLMANCER
                </ListItemLink>         
            }
            className={`${classes.root} mobile-header`}
            >
                <ListItemLink button href="/sign_in">
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sign In" />
                </ListItemLink>
                <ListItemLink button href="/sign_up">
                        <ListItemIcon>
                            <PersonAddIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sign Up" />
                </ListItemLink>
                <ListItemLink button href="/characters">
                        <ListItemIcon>
                            <CreateIcon />
                        </ListItemIcon>
                        <ListItemText primary="Characters" />
                </ListItemLink>
                <ListItemLink button href="/generator">
                    <ListItemIcon>
                        <i className="fas fa-dice MuiSvgIcon-root"></i>
                    </ListItemIcon>
                <ListItemText primary="Generator" />
                </ListItemLink>
                <ListItemLink button href="/scheduler">
                    <ListItemIcon>
                        <EventAvailableIcon />
                    </ListItemIcon>
                <ListItemText primary="Scheduler" />
                </ListItemLink>
                <ListItem button onClick={() => handleClick("libraries")}>
                    <ListItemIcon>
                        <SearchIcon />
                    </ListItemIcon>
                    <ListItemText primary="Libraries" />
                </ListItem>

                <Divider />

                <List component="div" disablePadding>
                    <ListItemLink button className={classes.nested} href="/libraries/races">
                        <ListItemText primary="Races" />
                    </ListItemLink>
                    <ListItemLink button className={classes.nested} href="/libraries/classes">
                        <ListItemText primary="Classes" />
                    </ListItemLink>
                    <ListItemLink button className={classes.nested} href="/libraries/conditions">
                        <ListItemText primary="Conditions" />
                    </ListItemLink>
                    <ListItemLink button className={classes.nested} href="/libraries/spells">
                        <ListItemText primary="Spells" />
                    </ListItemLink>
                    <ListItem button onClick={() => handleClick("equipment")}>
                    <ListItemText primary="Equipment:" className={classes.nestedRoot} />
                    </ListItem>
                </List>

                <List component="div" disablePadding>
                    <ListItemLink button className={classes.nestedDouble} href="/libraries/equipment/adventuring-gear">
                        <ListItemText primary="Adventuring Gear" />
                    </ListItemLink>
                    <ListItemLink button className={classes.nestedDouble} href="/libraries/equipment/armor">
                        <ListItemText primary="Armor" />
                    </ListItemLink>
                    <ListItemLink button className={classes.nestedDouble} href="/libraries/equipment/mounts-and-vehicles">
                        <ListItemText primary="Mounts and Vehicles" />
                    </ListItemLink>
                    <ListItemLink button className={classes.nestedDouble} href="/libraries/equipment/tools">
                        <ListItemText primary="Tools" />
                    </ListItemLink>
                    <ListItemLink button className={classes.nestedDouble} href="/libraries/equipment/weapons">
                        <ListItemText primary="Weapons" />
                    </ListItemLink>
                </List>
            </List>
        </div>
    );

    return (
        <div className="NavBar-container">
            <div className="NavBar" id="mobile" >
                <ListItemLink button 
                    href="/"
                    className="logo-mobile"
                >
                    TECHR
                    <i className="fas fa-dice-d20 fa fa-spin-hover"></i>
                    LLMANCER
                </ListItemLink>
                <Button onClick={toggleDrawer('left', true)}>MENU</Button>
                <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                    {sideList('left')}
                </Drawer>
            </div>

            <div className="NavBar" id="non-mobile">
                <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListItemLink button 
                        href="/"
                        className="logo"
                    >
                        TECHR
                        <i className="fas fa-dice-d20 fa fa-spin-hover"></i>
                        LLMANCER
                    </ListItemLink>         
                }
                className={classes.root}
                >
                    <ListItemLink button href="/sign_in">
                            <ListItemIcon>
                                <AccountCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Sign In" />
                    </ListItemLink>
                    <ListItemLink button href="/sign_up">
                            <ListItemIcon>
                                <PersonAddIcon />
                            </ListItemIcon>
                            <ListItemText primary="Sign Up" />
                    </ListItemLink>
                    <ListItemLink button href="/characters">
                            <ListItemIcon>
                                <CreateIcon />
                            </ListItemIcon>
                            <ListItemText primary="Characters" />
                        </ListItemLink>
                    <ListItemLink button href="/generator">
                        <ListItemIcon>
                            <i className="fas fa-dice MuiSvgIcon-root"></i>
                        </ListItemIcon>
                        <ListItemText primary="Generator" />
                    </ListItemLink>
                    <ListItemLink button href="/scheduler">
                        <ListItemIcon>
                            <EventAvailableIcon />
                        </ListItemIcon>
                        <ListItemText primary="Scheduler" />
                    </ListItemLink>
                    <ListItem button onClick={() => handleClick("libraries")}>
                            <ListItemIcon>
                                <SearchIcon />
                            </ListItemIcon>
                            <ListItemText primary="Libraries" />
                            {librariesOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    <Divider />
                    <Collapse in={librariesOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemLink button className={classes.nested} href="/libraries/races">
                                <ListItemText primary="Races" />
                            </ListItemLink>
                            <ListItemLink button className={classes.nested} href="/libraries/classes">
                                <ListItemText primary="Classes" />
                            </ListItemLink>
                            <ListItemLink button className={classes.nested} href="/libraries/conditions">
                                <ListItemText primary="Conditions" />
                            </ListItemLink>
                            <ListItemLink button className={classes.nested} href="/libraries/spells">
                                <ListItemText primary="Spells" />
                            </ListItemLink>
                            <ListItem button onClick={() => handleClick("equipment")}>
                            <ListItemText primary="Equipment" className={classes.nestedRoot} />
                            {equipmentOpen ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>
                        </List>
                    </Collapse>
                    <Collapse in={equipmentOpen} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemLink button className={classes.nestedDouble} href="/libraries/equipment/adventuring-gear">
                                <ListItemText primary="Adventuring Gear" />
                            </ListItemLink>
                            <ListItemLink button className={classes.nestedDouble} href="/libraries/equipment/armor">
                                <ListItemText primary="Armor" />
                            </ListItemLink>
                            <ListItemLink button className={classes.nestedDouble} href="/libraries/equipment/mounts-and-vehicles">
                                <ListItemText primary="Mounts and Vehicles" />
                            </ListItemLink>
                            <ListItemLink button className={classes.nestedDouble} href="/libraries/equipment/tools">
                                <ListItemText primary="Tools" />
                            </ListItemLink>
                            <ListItemLink button className={classes.nestedDouble} href="/libraries/equipment/weapons">
                                <ListItemText primary="Weapons" />
                            </ListItemLink>
                        </List>
                    </Collapse>
                </List>
            </div>
        </div>
    );
}
