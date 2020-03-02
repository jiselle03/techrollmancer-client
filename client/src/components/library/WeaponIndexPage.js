import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { BackgroundImage } from '../styles/BackgroundImage';

import { CircularProgress, List, ListItem, ListItemText } from '@material-ui/core';
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
            light={true}
        >
            <MainStyle>
                <h1>
                    WEAPONS
                </h1>

                <h2>
                    Simple Melee
                </h2>
                <List component="nav" className="list">
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

                <h2>
                    Simple Ranged
                </h2>
                <List component="nav" className="list">
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

                <h2>
                    Martial Melee
                </h2>
                <List component="nav" className="list">
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

                <h2>
                    Martial Ranged
                </h2>
                <List component="nav" className="list">
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
            </MainStyle>
        </BackgroundImage>
    );
};
