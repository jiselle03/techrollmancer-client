import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import BackgroundImage from '../styles/BackgroundImage';
import MainStyle from '../styles/MainStyle';

import { CircularProgress, List, ListItem, ListItemText } from '@material-ui/core';

const getSpells = () => axios.get("http://localhost:3000/api/v1/libraries/spells");

const SpellIndexPage = () => {
    const [spells, setSpells] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getSpells().then(spells => { 
            setSpells(spells.data);
            setIsLoading(false);
          });
    }, []);

    if (isLoading) return (<CircularProgress variant="determinate" />);

    return (
        <BackgroundImage 
            image={require('../../assets/d20.png')}
            light={true}
        >
            <MainStyle>
                <h1>
                    SPELLS
                </h1>

                <h2>
                    Cantrips
                </h2>
                <List component="nav" className="list"> 
                    {spells.filter(spell => {
                        return spell.level_int === 0
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

                <h2>
                    1st Level
                </h2>
                <List component="nav" className="list"> 
                    {spells.filter(spell => {
                        return spell.level_int === 1
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

                <h2>
                    Second Level
                </h2>
                <List component="nav" className="list"> 
                    {spells.filter(spell => {
                        return spell.level_int === 2
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

                <h2>
                    Third Level
                </h2>
                <List component="nav" className="list"> 
                    {spells.filter(spell => {
                        return spell.level_int === 3
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

                <h2>
                    4th Level
                </h2>
                <List component="nav" className="list"> 
                    {spells.filter(spell => {
                        return spell.level_int === 4
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

                <h2>
                    5th Level
                </h2>
                <List component="nav" className="list"> 
                    {spells.filter(spell => {
                        return spell.level_int === 5
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

                <h2>
                    6th Level
                </h2>
                <List component="nav" className="list"> 
                    {spells.filter(spell => {
                        return spell.level_int === 6
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

                <h2>
                    7th Level
                </h2>
                <List component="nav" className="list"> 
                    {spells.filter(spell => {
                        return spell.level_int === 7
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

                <h2>
                    8th Level
                </h2>
                <List component="nav" className="list"> 
                    {spells.filter(spell => {
                        return spell.level_int === 8
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

                <h2>
                    9th Level
                </h2>
                <List component="nav" className="list"> 
                    {spells.filter(spell => {
                        return spell.level_int === 9
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
            </MainStyle>
        </BackgroundImage>
    );
};

export default SpellIndexPage;
