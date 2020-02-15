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

export const WeaponIndexPage = () => {
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
            <h1>Weapons</h1>

            <div className={classes.root}>

                <h3>Simple Melee</h3>
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

                <h3>Simple Ranged</h3>
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

                <h3>Martial Melee</h3>
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

                <h3>Martial Ranged</h3>
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
        </main>
    );
};
