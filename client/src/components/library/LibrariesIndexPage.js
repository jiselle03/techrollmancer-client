import React from 'react';
import { Link } from 'react-router-dom';

import { BackgroundImage } from '../styles/BackgroundImage';
import { MainStyle } from '../styles/MainStyle';

import { Divider, List, ListItem, ListItemText, Typography } from '@material-ui/core';

export const LibrariesIndexPage = () => {
    return (
        <BackgroundImage 
            image={require('../../assets/d20.png')}
        >
            <MainStyle>
                <Typography variant="h2">
                    Libraries
                </Typography>

                <Divider />
                <br />

                <List component="nav">
                    <Link className="link" exact to="/libraries/races">
                        <ListItem button>
                            <ListItemText primary="Races" />
                        </ListItem>
                    </Link>

                    <Link className="link" exact to="/libraries/classes">
                        <ListItem button>
                            <ListItemText primary="Classes" />
                        </ListItem>
                    </Link>
                    
                    <Link className="link" exact to="/libraries/spells">
                        <ListItem button>
                            <ListItemText primary="Spells" />
                        </ListItem>
                    </Link>
                    
                    <Link className="link" exact to="/libraries/equipment">
                        <ListItem button>
                            <ListItemText primary="Equipment" />
                        </ListItem>
                    </Link>
                    
                    <Link className="link" exact to="/libraries/conditions">
                        <ListItem button>
                            <ListItemText primary="Conditions" />
                        </ListItem>
                    </Link>
                </List>
            </MainStyle>
        </BackgroundImage>
    );
};
