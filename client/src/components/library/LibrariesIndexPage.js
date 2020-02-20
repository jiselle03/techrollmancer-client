import React from 'react';
import { Link } from 'react-router-dom';

import { BackgroundImage } from '../styles/BackgroundImage';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export const LibrariesIndexPage = () => {
    return (
        <BackgroundImage 
            image={require('../../assets/d20.png')}
        >
            <main className="Main">
                <h1>Libraries</h1>
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
            </main>
        </BackgroundImage>
    );
};
