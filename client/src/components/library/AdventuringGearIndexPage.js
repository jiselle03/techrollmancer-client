import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { MainStyle } from '../styles/MainStyle';
import { BackgroundImage } from '../styles/BackgroundImage';

import { CircularProgress, List, ListItem, ListItemText } from '@material-ui/core';

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
            light={true}
        >
            <MainStyle>
                <h1>
                    ADVENTURING GEAR
                </h1>

                <h2>
                    Equipment Packs
                </h2>
                <List component="nav" className="list">
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

                <h2>
                    Standard Gear
                </h2>
                <List component="nav" className="list">
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

                <h2>
                    Ammunition
                </h2>
                <List component="nav" className="list">
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

                <h2>
                    Arcane Focus
                </h2>
                <List component="nav" className="list">
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

                <h2>
                    Druidic Focus
                </h2>
                <List component="nav" className="list">
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
                
                <h2>
                    Holy Symbols
                </h2>
                <List component="nav" className="list">
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
                
                <h2>
                    Kits
                </h2>
                <List component="nav" className="list">
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
                
            </MainStyle>
        </BackgroundImage>
    );
};
