import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { BackgroundImage } from '../styles/BackgroundImage';
import { MainStyle } from '../styles/MainStyle';

import { CircularProgress, Divider, List, ListItem, ListItemText } from '@material-ui/core';

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
                    <h1>
                        SPELLS
                    </h1>
                    
                    <List component="nav">
                    <h2>
                        Cantrips
                    </h2>
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

                    <h2>
                        1st Level
                    </h2>
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

                    <h2>
                        Second Level
                    </h2>
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

                    <h2>
                        Third Level
                    </h2>
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

                    <h2>
                        4th Level
                    </h2>
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

                    <h2>
                        5th Level
                    </h2>
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

                    <Divider />

                    <h2>
                        6th Level
                    </h2>
                    {spells.filter(spell => {
                        return spell.level === "6th-level"
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

                    <h2>
                        7th Level
                    </h2>
                    {spells.filter(spell => {
                        return spell.level === "7th-level"
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

                    <h2>
                        8th Level
                    </h2>
                    {spells.filter(spell => {
                        return spell.level === "8th-level"
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

                    <h2>
                        9th Level
                    </h2>
                    {spells.filter(spell => {
                        return spell.level === "9th-level"
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
