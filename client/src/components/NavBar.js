import React, { useState } from 'react';

import './css/NavBar.css';
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
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CreateIcon from '@material-ui/icons/Create';
import SearchIcon from '@material-ui/icons/Search';
import CasinoIcon from '@material-ui/icons/Casino';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
};

export const NavBar = ({ currentUser, onSignOut }) => {
    const handleSignOutClick = event => {
        event.preventDefault();
        if (typeof onSignOut === "function") {
            onSignOut();
        }
    };

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
                    className="logo-static"
                >
                    TECHR
                    <i className="fas fa-dice-d20 fa fa-spin-hover"></i>
                    LLMANCER
                </ListItemLink>     
            }
            className="NavBar collapsible-header"
            >
            {!currentUser && (
                <>
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
                </>
            )}
            {currentUser && (
                <>
                    <ListItemLink button onClick={handleSignOutClick}>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sign Out" />
                    </ListItemLink>
                </>
            )}
                <ListItemLink button href="/characters">
                    <ListItemIcon>
                        <CreateIcon />
                    </ListItemIcon>
                    <ListItemText primary="Characters" />
                </ListItemLink>
                <ListItemLink button href="/generator">
                    <ListItemIcon>
                        <CasinoIcon />
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
                    <ListItemLink button href="/libraries/races">
                        <ListItemText className="nested" primary="Races" />
                    </ListItemLink>
                    <ListItemLink button href="/libraries/classes">
                        <ListItemText className="nested" primary="Classes" />
                    </ListItemLink>
                    <ListItemLink button href="/libraries/conditions">
                        <ListItemText className="nested" primary="Conditions" />
                    </ListItemLink>
                    <ListItemLink button href="/libraries/spells">
                        <ListItemText className="nested" primary="Spells" />
                    </ListItemLink>
                    <ListItem button onClick={() => handleClick("equipment")}>
                    <ListItemText className="nested" primary="Equipment:" />
                    </ListItem>
                </List>

                <List component="div" disablePadding>
                    <ListItemLink button href="/libraries/equipment/adventuring-gear">
                        <ListItemText className="double-nested" primary="Adventuring Gear" />
                    </ListItemLink>
                    <ListItemLink button href="/libraries/equipment/armor">
                        <ListItemText className="double-nested" primary="Armor" />
                    </ListItemLink>
                    <ListItemLink button href="/libraries/equipment/mounts-and-vehicles">
                        <ListItemText className="double-nested" primary="Mounts and Vehicles" />
                    </ListItemLink>
                    <ListItemLink button href="/libraries/equipment/tools">
                        <ListItemText className="double-nested" primary="Tools" />
                    </ListItemLink>
                    <ListItemLink button href="/libraries/equipment/weapons">
                        <ListItemText className="double-nested" primary="Weapons" />
                    </ListItemLink>
                </List>
            </List>
        </div>
    );

    return (
        <div className="NavBar-container">
            <div className="NavBar" id="collapsible" >
                <div className="sidebar-container">
                    <Button onClick={toggleDrawer('left', true)} className="MENU">MENU</Button>
                    <ListItemLink button 
                            href="/"
                            className="logo-collapsible"
                        >
                            TECHR
                            <i className="fas fa-dice-d20 fa fa-spin-hover"></i>
                            LLMANCER
                    </ListItemLink>
                </div>
                <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                    {sideList('left')}
                </Drawer>
            </div>

            <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListItemLink button 
                    href="/"
                    className="logo-static"
                >
                    TECHR
                    <i className="fas fa-dice-d20 fa fa-spin-hover"></i>
                    LLMANCER
                </ListItemLink>         
            }
            className="NavBar"
            id="static"
            >
                {!currentUser && (
                <>
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
                </>
            )}
            {currentUser && (
                <>
                    <ListItemLink button onClick={handleSignOutClick}>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="Sign Out" />
                    </ListItemLink>
                </>
            )}
                <ListItemLink button href="/characters">
                        <ListItemIcon>
                            <CreateIcon />
                        </ListItemIcon>
                        <ListItemText primary="Characters" />
                    </ListItemLink>
                <ListItemLink button href="/generator">
                    <ListItemIcon>
                        <CasinoIcon />
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
                        <ListItemLink button href="/libraries/races">
                            <ListItemText className="nested" primary="Races" />
                        </ListItemLink>
                        <ListItemLink button href="/libraries/classes">
                            <ListItemText className="nested" primary="Classes" />
                        </ListItemLink>
                        <ListItemLink button href="/libraries/conditions">
                            <ListItemText className="nested" primary="Conditions" />
                        </ListItemLink>
                        <ListItemLink button href="/libraries/spells">
                            <ListItemText className="nested" primary="Spells" />
                        </ListItemLink>
                        <ListItem button onClick={() => handleClick("equipment")}>
                        <ListItemText className="nested" primary="Equipment" />
                        {equipmentOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                    </List>
                </Collapse>
                <Collapse in={equipmentOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemLink button href="/libraries/equipment/adventuring-gear">
                            <ListItemText className="double-nested" primary="Adventuring Gear" />
                        </ListItemLink>
                        <ListItemLink button href="/libraries/equipment/armor">
                            <ListItemText className="double-nested" primary="Armor" />
                        </ListItemLink>
                        <ListItemLink button href="/libraries/equipment/mounts-and-vehicles">
                            <ListItemText className="double-nested" primary="Mounts and Vehicles" />
                        </ListItemLink>
                        <ListItemLink button href="/libraries/equipment/tools">
                            <ListItemText className="double-nested" primary="Tools" />
                        </ListItemLink>
                        <ListItemLink button href="/libraries/equipment/weapons">
                            <ListItemText className="double-nested" primary="Weapons" />
                        </ListItemLink>
                    </List>
                </Collapse>
            </List>
        </div>
    );
};
