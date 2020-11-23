import React from 'react';
import { Link } from 'react-router-dom';

import BackgroundImage from '../styles/BackgroundImage';
import MainStyle from '../styles/MainStyle';

import { List, ListItem, ListItemText } from '@material-ui/core';

const LibrariesIndexPage = () => {
    return (
        <BackgroundImage 
            image="https://i.ibb.co/cctCwgk/d20.png"
            light={true}
        >
            <MainStyle>
                <h1>
                    Libraries
                </h1>

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

export default LibrariesIndexPage;
