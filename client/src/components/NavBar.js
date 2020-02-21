import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './css/NavBar.css';
import { NavBarDetails } from './NavBarDetails';
import { NavBarStyle, NavContainer, Sidebar } from './styles/NavStyle.js';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
};

export const NavBar = ({ currentUser, onSignOut }) => {
    const [state, setState] = useState({
        left: false
      });

    const laptop = useMediaQuery('(min-width:1280px)');

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };

    return (
        <NavContainer>
            {!laptop && (
                <NavBarStyle>
                    <Sidebar>
                        <Button onClick={toggleDrawer('left', true)} className="MENU">MENU</Button>
                        <ListItemLink button 
                                href="/"
                                className="logo-collapsible"
                            >
                                TECHR
                                <i className="fas fa-dice-d20 fa fa-spin-hover"></i>
                                LLMANCER
                        </ListItemLink>
                        {currentUser && (
                            <Link className="USERNAME" to="/characters">{currentUser.username.toUpperCase()}</Link>
                        )}
                    </Sidebar>
                    <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                        <div
                            role="presentation"
                            onClick={toggleDrawer('left', false)}
                            onKeyDown={toggleDrawer('left', false)}
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
