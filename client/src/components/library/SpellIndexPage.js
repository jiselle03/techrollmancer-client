import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { BackgroundImage } from '../styles/BackgroundImage';
import { MainStyle } from '../styles/MainStyle';

import { CircularProgress, Divider, List, ListItem, ListItemText, Typography } from '@material-ui/core';

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
            <MainStyle>
                <div className="list-container">
                    <Typography variant="h2">
                        SPELLS
                    </Typography>

                    <Divider />
                    
                    <List component="nav">
                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        Cantrips
                    </Typography>
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

                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        1st Level
                    </Typography>
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

                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        Second Level
                    </Typography>
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

                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        Third Level
                    </Typography>
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

                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        4th Level
                    </Typography>
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

                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        5th Level
                    </Typography>
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
            </MainStyle>
        </BackgroundImage>
    );
};
