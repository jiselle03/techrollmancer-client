import React, { useState } from 'react';

import { Collapse, Divider, List, ListItem, ListItemIcon, ListItemText, useMediaQuery } from '@material-ui/core';
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

    const laptop = useMediaQuery('(min-width:1280px)');


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
                        <ListItemIcon className="menu-icon">
                        </ListItemIcon>
                        <ListItemText primary="Races" />
                    </ListItemLink>
                    <ListItemLink button href="/libraries/classes">
                        <ListItemIcon className="menu-icon">
                        </ListItemIcon>
                        <ListItemText primary="Classes" />
                    </ListItemLink>
                    <ListItemLink button href="/libraries/conditions">
                        <ListItemIcon className="menu-icon">
                        </ListItemIcon>
                        <ListItemText primary="Conditions" />
                    </ListItemLink>
                    <ListItemLink button href="/libraries/spells">
                        <ListItemIcon className="menu-icon">
                        </ListItemIcon>
                        <ListItemText primary="Spells" />
                    </ListItemLink>
                    {laptop && (
                        <>
                            <ListItem button onClick={() => handleClick("equipment")}>
                                <ListItemIcon className="menu-icon">
                                </ListItemIcon>
                                <ListItemText primary="Equipment" />
                                {equipmentOpen ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>

                            <Divider />
                        </>
                    )}
                    {!laptop && (
                        <>
                            <ListItemLink button href="/libraries/equipment">
                                <ListItemIcon className="menu-icon">
                                </ListItemIcon>
                                <ListItemText primary="Equipment" />
                            </ListItemLink>

                            <Divider />
                        </>
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
                        <ListItemIcon className="menu-icon">
                        </ListItemIcon>
                        <ListItemText primary="Adventuring Gear" />
                    </ListItemLink>
                    <ListItemLink button href="/libraries/equipment/armor">
                        <ListItemIcon className="menu-icon">
                        </ListItemIcon>
                        <ListItemText primary="Armor" />
                    </ListItemLink>
                    <ListItemLink button href="/libraries/equipment/mounts-and-vehicles">
                        <ListItemIcon className="menu-icon">
                        </ListItemIcon>
                        <ListItemText primary="Mounts and Vehicles" />
                    </ListItemLink>
                    <ListItemLink button href="/libraries/equipment/tools">
                        <ListItemIcon className="menu-icon">
                        </ListItemIcon>
                        <ListItemText primary="Tools" />
                    </ListItemLink>
                    <ListItemLink button href="/libraries/equipment/weapons">
                        <ListItemIcon className="menu-icon">
                        </ListItemIcon>
                        <ListItemText primary="Weapons" />
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
                <ListItemLink button href="/">
                    <div
                        style={{
                            fontFamily: "Bungee Inline",
                            fontSize: "1.5em",
                            color: "#fff",
                            margin: "0.5em",
                        }}
                    >
                        <div className="branding">
                            <span>
                                TECHR
                            </span>
                            <span className="d20">
                                <i className={`fas fa-dice-d20 fa ${laptop ? "fa-spin-hover" : "fa-spin"}`}></i>
                            </span>
                            <span>
                                LLMANCER
                            </span>
                        </div>
                    </div>
                </ListItemLink>         
            }
            >
                {!currentUser && (
                <>
                    <ListItemLink button href="/sign_in">
                        <ListItemIcon className="menu-icon">
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary="SIGN IN" />
                    </ListItemLink>
                    <ListItemLink button href="/sign_up">
                        <ListItemIcon className="menu-icon">
                            <PersonAddIcon />
                        </ListItemIcon>
                        <ListItemText primary="SIGN UP" />
                    </ListItemLink>
                </>
            )}
            {currentUser && (
                <>
                    <ListItemLink button href="/characters">
                        <ListItemIcon className="menu-icon">
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText primary={currentUser.username.toUpperCase()} />
                    </ListItemLink>
                    <ListItemLink button href="/" onClick={handleSignOutClick}>
                        <ListItemIcon className="menu-icon">
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="SIGN OUT" />
                    </ListItemLink>
                </>
            )}
            <ListItemLink button href="/characters">
                    <ListItemIcon className="menu-icon">
                        <CreateIcon />
                    </ListItemIcon>
                    <ListItemText primary="CHARACTERS" />
                </ListItemLink>
            <ListItemLink button href="/generator">
                <ListItemIcon className="menu-icon">
                    <CasinoIcon />
                </ListItemIcon>
                <ListItemText primary="CHARACTER GENERATOR" />
            </ListItemLink>
            <ListItemLink button href="/scheduler">
                <ListItemIcon className="menu-icon">
                    <EventAvailableIcon />
                </ListItemIcon>
                <ListItemText primary="SCHEDULER" />
            </ListItemLink>

            {laptop && (
                <>
                    <ListItem button onClick={() => handleClick("libraries")}>
                        <ListItemIcon className="menu-icon">
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

            {!laptop && (
                <>
                    <ListItemLink button href="/libraries">
                        <ListItemIcon className="menu-icon">
                            <SearchIcon />
                        </ListItemIcon>
                        <ListItemText primary="LIBRARIES" />
                    </ListItemLink>

                    <Divider />
                    {nestedList()}
                    {doubleNestedList()}
                </>
            )}
            </List>
        </>
    );
};
