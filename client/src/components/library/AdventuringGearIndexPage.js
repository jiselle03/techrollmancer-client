import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../css/Index.css';
import { CircularProgress } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

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
        <div className="adventuring-gear index-background">
            <main className="Main">
                <h1>ADVENTURING GEAR</h1>
                <Divider />

                <div className="list-container">
                    <h3>Equipment Packs</h3>
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

                    <h3>Standard Gear</h3>
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

                    <h3>Ammunition</h3>
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

                    <h3>Arcane Focus</h3>
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

                    <h3>Druidic Focus</h3>
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
                    
                    <h3>Holy Symbols</h3>
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
                    
                    <h3>Kits</h3>
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
                
            </main>
        </div>
    );
};
