import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../css/Index.css';
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }));

const getEquipments = () => {
    return axios.get("http://localhost:3000/api/v1/libraries/equipment");
};

export const AdventuringGearIndexPage = () => {
    const classes = useStyles();
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
        <main className="Index-Container Main">
            <h1>Adventuring Gear</h1><br />

            <div className={classes.root}>
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
    );
};
