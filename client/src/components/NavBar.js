import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import NavBarDetails from './NavBarDetails';
import { NavBarStyle, NavContainer, Sidebar, sidebarText } from './styles/NavStyle.js';

import { Drawer, ListItem, useMediaQuery } from '@material-ui/core';

const ListItemLink = props => <ListItem button component="a" {...props} />;

const NavBar = props => {
    const { currentUser, onSignOut } = props;
    const [open, setOpen] = useState(false);
    const history = useHistory();

    const laptop = useMediaQuery('(min-width:1280px)');

    const toggleDrawer = state => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
        setOpen(state);
    };

    const handleClick = () => history.push("/");

    return (
        <NavContainer>
            {!laptop && (
                <NavBarStyle>
                    <Sidebar className="sidebar" currentUser={currentUser} >
                        <ListItemLink button
                                onClick={handleClick}
                                style={{
                                    fontFamily: "Bungee Inline",
                                    fontSize: "1.5em",
                                    transform: "rotate(-90deg)",
                                    color: "#fff",
                                    width: "12em",
                                    position: "absolute",
                                    top: "40vh",
                                    marginLeft: "0",
                                }}
                            >   
                                <div className="branding">
                                    <span>
                                        TECHR
                                    </span>
                                    <span className="d20">
                                        <i className="fas fa-dice-d20 fa fa-spin-hover"></i>
                                    </span>
                                    <span>
                                        LLMANCER
                                    </span>    
                                </div>
                        </ListItemLink>
                        <Link to="#" onClick={toggleDrawer(true)} style={sidebarText}>MENU</Link>
                        {currentUser && (
                            <Link style={sidebarText} to="/characters">{currentUser.username.toUpperCase()}</Link>
                            )}
                    </Sidebar>
                    <Drawer open={open} onClose={toggleDrawer(false)}>
                        <div
                            role="presentation"
                            onClick={toggleDrawer(false)}
                            onKeyDown={toggleDrawer(false)}
                        >
                            <NavBarStyle>
                                <NavBarDetails currentUser={currentUser} onSignOut={onSignOut} />
                            </NavBarStyle>
                        </div>
                    </Drawer>
                </NavBarStyle>
            )}

            {laptop && (
                <NavBarStyle>
                    <NavBarDetails currentUser={currentUser} onSignOut={onSignOut} />
                </NavBarStyle>
            )}
        </NavContainer>
    );
};

export default NavBar;
