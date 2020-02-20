import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { MainStyle } from '../styles/MainStyle';
import { BackgroundImage } from '../styles/BackgroundImage';

import { CircularProgress, Divider, List, ListItem, ListItemText, Typography } from '@material-ui/core';

const getEquipments = () => {
    return axios.get("http://localhost:3000/api/v1/libraries/equipment");
};

export const ArmorIndexPage = () => {
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
                    ARMOR
                </Typography>
                
                <Divider />

                <div className="list-container">
                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        Light
                    </Typography>
                    <List component="nav">
                    {equipments.filter(equipment => {
                        return equipment.equipment_category === "Armor" && equipment.armor_category === "Light"
                    }).map(armor => (
                        <div key={armor.slug}>
                            <Link className="link" to={`/libraries/equipment/${armor.slug}`}>
                                <ListItem button>
                                    <ListItemText primary={armor.name} />
                                </ListItem>
                            </Link>
                        </div>
                    ))}
                    </List>

                    <Divider />

                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        Medium
                    </Typography>
                    <List component="nav">
                    {equipments.filter(equipment => {
                        return equipment.equipment_category === "Armor" && equipment.armor_category === "Medium"
                    }).map(armor => (
                        <div key={armor.slug}>
                            <Link className="link" to={`/libraries/equipment/${armor.slug}`}>
                                <ListItem button>
                                    <ListItemText primary={armor.name} />
                                </ListItem>
                            </Link>
                        </div>
                    ))}
                    </List>

                    <Divider />

                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        Heavy
                    </Typography>
                    <List component="nav">
                    {equipments.filter(equipment => {
                        return equipment.equipment_category === "Armor" && equipment.armor_category === "Heavy"
                    }).map(armor => (
                        <div key={armor.slug}>
                            <Link className="link" to={`/libraries/equipment/${armor.slug}`}>
                                <ListItem button>
                                    <ListItemText primary={armor.name} />
                                </ListItem>
                            </Link>
                        </div>
                    ))}
                    </List>

                    <Divider />

                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        Shield
                    </Typography>
                    <List component="nav">
                    {equipments.filter(equipment => {
                        return equipment.equipment_category === "Armor" && equipment.armor_category === "Shield"
                    }).map(armor => (
                        <div key={armor.slug}>
                            <Link className="link" to={`/libraries/equipment/${armor.slug}`}>
                                <ListItem button>
                                    <ListItemText primary={armor.name} />
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
