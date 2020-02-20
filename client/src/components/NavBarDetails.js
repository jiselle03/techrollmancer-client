import React, { useState } from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import './css/NavBar.css';
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

export const NavBarDetails = ({ currentUser, onSignOut }) => {
    const handleSignOutClick = () => {
        if (typeof onSignOut === "function") {
            onSignOut();
        }
    };

    const [librariesOpen, setLibrariesOpen] = useState(false);
    const [equipmentOpen, setEquipmentOpen] = useState(false);

    const matches = useMediaQuery('(min-width:960px)');


    const handleClick = tab => {
        if (tab === "libraries") {
            if (equipmentOpen === true && librariesOpen === true) {
                setEquipmentOpen(false);
            };
            setLibrariesOpen(!librariesOpen);
        } else {
            setEquipmentOpen(!equipmentOpen);
        };
    };

    const nestedList = () => {
        return(
            <>
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
                    {matches && (
                    <ListItem button onClick={() => handleClick("equipment")}>
                        <ListItemText className="nested" primary="Equipment" />
                        {equipmentOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>
                    )}
                    {!matches && (
                        <ListItemLink button href="/libraries/equipment">
                            <ListItemText className="nested" primary="Equipment" />
                        </ListItemLink>
                    )}
                </List>
            </>
        );
    };

    const doubleNestedList = () => {
        return(
            <>
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
            </>
        );
    };

    return (
        <>
            <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListItemLink button 
                    href="/"
                    className="logo-static"
                >
                    TECHR
                    <i className={`fas fa-dice-d20 fa ${matches ? "fa-spin-hover" : "fa-spin"}`}></i>
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
                        <ListItemText primary="SIGN IN" />
                    </ListItemLink>
                    <ListItemLink button href="/sign_up">
                        <ListItemIcon>
                            <PersonAddIcon />
                        </ListItemIcon>
                        <ListItemText primary="SIGN UP" />
                    </ListItemLink>
                </>
            )}
            {currentUser && (
                <>
                    <ListItemLink button href="/characters">
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary={currentUser.username.toUpperCase()} />
                    </ListItemLink>
                    <ListItemLink button href="/" onClick={handleSignOutClick}>
                        <ListItemIcon>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="SIGN OUT" />
                    </ListItemLink>
                </>
            )}
            <ListItemLink button href="/characters">
                    <ListItemIcon>
                        <CreateIcon />
                    </ListItemIcon>
                    <ListItemText primary="CHARACTERS" />
                </ListItemLink>
            <ListItemLink button href="/generator">
                <ListItemIcon>
                    <CasinoIcon />
                </ListItemIcon>
                <ListItemText primary="CHARACTER GENERATOR" />
            </ListItemLink>
            <ListItemLink button href="/scheduler">
                <ListItemIcon>
                    <EventAvailableIcon />
                </ListItemIcon>
                <ListItemText primary="SCHEDULER" />
            </ListItemLink>

            {matches && (
                <>
                    <ListItem button onClick={() => handleClick("libraries")}>
                        <ListItemIcon>
                            <SearchIcon />
                        </ListItemIcon>
                        <ListItemText primary="LIBRARIES" />
                        {librariesOpen ? <ExpandLess /> : <ExpandMore />}
                    </ListItem>

                    <Divider />

                    <Collapse in={librariesOpen} timeout="auto" unmountOnExit>
                        {nestedList()}
                    </Collapse>

                    <Collapse in={equipmentOpen} timeout="auto" unmountOnExit>
                        {doubleNestedList()}
                    </Collapse>
                </>
            )}

            {!matches && (
                <>
                    <ListItemLink button href="/libraries">
                        <ListItemIcon>
                            <SearchIcon />
                        </ListItemIcon>
                        <ListItemText primary="LIBRARIES" />
                    </ListItemLink>
                    {nestedList()}
                    {doubleNestedList()}
                </>
            )}
            </List>
        </>
    );
};
