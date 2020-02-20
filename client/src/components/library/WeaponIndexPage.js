import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../css/Index.css';
import { BackgroundImage } from '../styles/BackgroundImage';

import { CircularProgress, Divider, List, ListItem, ListItemText, Typography } from '@material-ui/core';
import { MainStyle } from '../styles/MainStyle';

const getEquipments = () => {
    return axios.get("http://localhost:3000/api/v1/libraries/equipment");
};

export const WeaponIndexPage = () => {
    const [equipments, setEquipments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getEquipments().then(equipments => { 
            setEquipments(equipments.data);
            setIsLoading(false);
          });
    }, []);

    if(isLoading) {
        return(
            <CircularProgress variant="determinate" />
        );
    };

    return (
        <BackgroundImage 
            image={require('../../assets/d20.png')}
        >
            <MainStyle>
                <Typography variant="h2">
                    WEAPONS
                </Typography>
                
                <Divider />

                <div className="list-container">
                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        Simple Melee
                    </Typography>
                    <List component="nav">
                    {equipments.filter(equipment => {
                        return equipment.equipment_category === "Weapon" && equipment.category_range === "Simple Melee"
                    }).map(weapon => (
                        <div key={weapon.slug}>
                            <Link className="link" to={`/libraries/equipment/${weapon.slug}`}>
                                <ListItem button>
                                    <ListItemText primary={weapon.name} />
                                </ListItem>
                            </Link>
                        </div>
                    ))}
                    </List>

                    <Divider />

                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        Simple Ranged
                    </Typography>
                    <List component="nav">
                    {equipments.filter(equipment => {
                        return equipment.equipment_category === "Weapon" && equipment.category_range === "Simple Ranged"
                    }).map(weapon => (
                        <div key={weapon.slug}>
                            <Link className="link" to={`/libraries/equipment/${weapon.slug}`}>
                                <ListItem button>
                                    <ListItemText primary={weapon.name} />
                                </ListItem>
                            </Link>
                        </div>
                    ))}
                    </List>

                    <Divider />

                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        Martial Melee
                    </Typography>
                    <List component="nav">
                    {equipments.filter(equipment => {
                        return equipment.equipment_category === "Weapon" && equipment.category_range === "Martial Melee"
                    }).map(weapon => (
                        <div key={weapon.slug}>
                            <Link className="link" to={`/libraries/equipment/${weapon.slug}`}>
                                <ListItem button>
                                    <ListItemText primary={weapon.name} />
                                </ListItem>
                            </Link>
                        </div>
                    ))}
                    </List>

                    <Divider />

                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        Martial Ranged
                    </Typography>
                    <List component="nav">
                    {equipments.filter(equipment => {
                        return equipment.equipment_category === "Weapon" && equipment.category_range === "Martial Ranged"
                    }).map(weapon => (
                        <div key={weapon.slug}>
                            <Link className="link" to={`/libraries/equipment/${weapon.slug}`}>
                                <ListItem button>
                                    <ListItemText primary={weapon.name} />
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
