import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { MainStyle } from '../styles/MainStyle';
import { BackgroundImage } from '../styles/BackgroundImage';

import { CircularProgress, Divider, List, ListItem, ListItemText, Typography } from '@material-ui/core';

const getEquipments = () => {
    return axios.get("http://localhost:3000/api/v1/libraries/equipment");
};

export const AdventuringGearIndexPage = () => {
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
                    ADVENTURING GEAR
                </Typography>

                <Divider />

                <div className="list-container">
                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        Equipment Packs
                    </Typography>
                    <List component="nav">
                    {equipments.filter(equipment => {
                        return equipment.equipment_category === "Adventuring Gear" && equipment.gear_category === "Equipment Pack"
                    }).map(gear => (
                        <div key={gear.slug}>
                            <Link className="link" to={`/libraries/equipment/${gear.slug}`}>
                                <ListItem button>
                                    <ListItemText primary={gear.name} />
                                </ListItem>
                            </Link>
                        </div>
                    ))}
                    </List>

                    <Divider />

                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        Standard Gear
                    </Typography>
                    <List component="nav">
                    {equipments.filter(equipment => {
                        return equipment.equipment_category === "Adventuring Gear" && equipment.gear_category === "Standard Gear"
                    }).map(gear => (
                        <div key={gear.slug}>
                            <Link className="link" to={`/libraries/equipment/${gear.slug}`}>
                                <ListItem button>
                                    <ListItemText primary={gear.name} />
                                </ListItem>
                            </Link>
                        </div>
                    ))}
                    </List>

                    <Divider />

                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        Ammunition
                    </Typography>
                    <List component="nav" aria-label="main mailbox folders">
                    {equipments.filter(equipment => {
                        return equipment.equipment_category === "Adventuring Gear" && equipment.gear_category === "Ammunition"
                    }).map(gear => (
                        <div key={gear.slug}>
                        <Link className="link" to={`/libraries/equipment/${gear.slug}`}>
                            <ListItem button>
                                <ListItemText primary={gear.name} />
                            </ListItem>
                        </Link>
                        </div>
                    ))}
                    </List>

                    <Divider />

                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        Arcane Focus
                    </Typography>
                    <List component="nav" aria-label="main mailbox folders">
                    {equipments.filter(equipment => {
                        return equipment.equipment_category === "Adventuring Gear" && equipment.gear_category === "Arcane focus"
                    }).map(gear => (
                        <div key={gear.slug}>
                        <Link className="link" to={`/libraries/equipment/${gear.slug}`}>
                            <ListItem button>
                                <ListItemText primary={gear.name} />
                            </ListItem>
                        </Link>
                        </div>
                    ))}
                    </List>

                    <Divider />

                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        Druidic Focus
                    </Typography>
                    <List component="nav" aria-label="main mailbox folders">
                    {equipments.filter(equipment => {
                        return equipment.equipment_category === "Adventuring Gear" && equipment.gear_category === "Druidic focus"
                    }).map(gear => (
                        <div key={gear.slug}>
                        <Link className="link" to={`/libraries/equipment/${gear.slug}`}>
                            <ListItem button>
                                <ListItemText primary={gear.name} />
                            </ListItem>
                        </Link>
                        </div>
                    ))}
                    </List>

                    <Divider />
                    
                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        Holy Symbols
                    </Typography>
                    <List component="nav">
                    {equipments.filter(equipment => {
                        return equipment.equipment_category === "Adventuring Gear" && equipment.gear_category === "Holy Symbol"
                    }).map(gear => (
                        <div key={gear.slug}>
                        <Link className="link" to={`/libraries/equipment/${gear.slug}`}>
                            <ListItem button>
                                <ListItemText primary={gear.name} />
                            </ListItem>
                        </Link>
                        </div>
                    ))}
                    </List>

                    <Divider />
                    
                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        Kits
                    </Typography>
                    <List component="nav" aria-label="main mailbox folders">
                    {equipments.filter(equipment => {
                        return equipment.equipment_category === "Adventuring Gear" && equipment.gear_category === "Kit"
                    }).map(gear => (
                        <div key={gear.slug}>
                        <Link className="link" to={`/libraries/equipment/${gear.slug}`}>
                            <ListItem button>
                                <ListItemText primary={gear.name} />
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
