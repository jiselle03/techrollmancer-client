import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../css/Index.css';
import { BackgroundImage } from '../styles/BackgroundImage';
import { CircularProgress } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const getSpells = () => {
    return axios.get("http://localhost:3000/api/v1/libraries/spells");
};


export const SpellIndexPage = () => {
    const [spells, setSpells] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getSpells().then(spells => { 
            setSpells(spells.data);
            setIsLoading(false);
          });
    }, []);

    if (isLoading) {
        return(
            <CircularProgress variant="determinate" />
        );
    };

    return (
        <BackgroundImage 
            image={require('../../assets/d20.png')}
        >
            <main className="Main">
                <div className="list-container">
                    <h1>SPELLS</h1>
                    <Divider />
                    
                    <List component="nav">
                    <h3>Cantrips</h3>
                    {spells.filter(spell => {
                        return spell.level === "Cantrip"
                    }).map(spell => (
                        <div key={spell.slug}>
                        <Link 
                            to={`/libraries/spells/${spell.slug}`} 
                            className="link"
                        >
                            <ListItem button>
                                    <ListItemText primary={spell.name} />
                                </ListItem>
                        </Link>
                        </div>
                    ))}

                    <Divider />

                    <h3>1st Level</h3>
                    {spells.filter(spell => {
                        return spell.level === "1st-level"
                    }).map(spell => (
                        <div key={spell.slug}>
                        <Link 
                            to={`/libraries/spells/${spell.slug}`} 
                            className="link"
                        >
                            <ListItem button>
                                    <ListItemText primary={spell.name} />
                                </ListItem>
                        </Link>
                        </div>
                    ))}

                    <Divider />

                    <h3>2nd Level</h3>
                    {spells.filter(spell => {
                        return spell.level === "2nd-level"
                    }).map(spell => (
                        <div key={spell.slug}>
                        <Link 
                            to={`/libraries/spells/${spell.slug}`} 
                            className="link"
                        >
                            <ListItem button>
                                    <ListItemText primary={spell.name} />
                                </ListItem>
                        </Link>
                        </div>
                    ))}

                    <Divider />

                    <h3>3rd Level</h3>
                    {spells.filter(spell => {
                        return spell.level === "3rd-level"
                    }).map(spell => (
                        <div key={spell.slug}>
                        <Link 
                            to={`/libraries/spells/${spell.slug}`} 
                            className="link"
                        >
                            <ListItem button>
                                    <ListItemText primary={spell.name} />
                                </ListItem>
                        </Link>
                        </div>
                    ))}

                    <Divider />

                    <h3>4th Level</h3>
                    {spells.filter(spell => {
                        return spell.level === "4th-level"
                    }).map(spell => (
                        <div key={spell.slug}>
                        <Link 
                            to={`/libraries/spells/${spell.slug}`} 
                            className="link"
                        >
                            <ListItem button>
                                    <ListItemText primary={spell.name} />
                                </ListItem>
                        </Link>
                        </div>
                    ))}

                    <Divider />

                    <h3>5st Level</h3>
                    {spells.filter(spell => {
                        return spell.level === "5th-level"
                    }).map(spell => (
                        <div key={spell.slug}>
                        <Link 
                            to={`/libraries/spells/${spell.slug}`} 
                            className="link"
                        >
                            <ListItem button>
                                    <ListItemText primary={spell.name} />
                                </ListItem>
                        </Link>
                        </div>
                    ))}
                    </List>
                </div>
            </main>
        </BackgroundImage>
    );
};
