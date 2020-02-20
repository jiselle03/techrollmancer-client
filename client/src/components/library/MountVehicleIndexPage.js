import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../css/Index.css';
import { BackgroundImage } from '../styles/BackgroundImage';
import { CircularProgress } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const getEquipments = () => {
    return axios.get("http://localhost:3000/api/v1/libraries/equipment");
};

export const MountVehicleIndexPage = () => {
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
            <main className="Main">
                <h1>MOUNTS AND VEHICLES</h1>
                <Divider />

                <div className="list-container">
                    <h3>Mounts and Other Animals</h3>
                    <List component="nav">
                    {equipments.filter(equipment => {
                        return equipment.equipment_category === "Mounts and Vehicles" && equipment.vehicle_category === "Mounts and Other Animals"
                    }).map(vehicle => (
                        <div key={vehicle.slug}>
                            <Link className="link" to={`/libraries/equipment/${vehicle.slug}`}>
                                <ListItem button>
                                    <ListItemText primary={vehicle.name} />
                                </ListItem>
                            </Link>
                        </div>
                    ))}
                    </List>

                    <Divider />

                    <h3>Tack, Harness, and Drawn Vehicles</h3>
                    <List component="nav">
                    {equipments.filter(equipment => {
                        return equipment.equipment_category === "Mounts and Vehicles" && equipment.vehicle_category === "Tack, Harness, and Drawn Vehicles"
                    }).map(vehicle => (
                        <div key={vehicle.slug}>
                            <Link className="link" to={`/libraries/equipment/${vehicle.slug}`}>
                                <ListItem button>
                                    <ListItemText primary={vehicle.name} />
                                </ListItem>
                            </Link>
                        </div>
                    ))}
                    </List>

                    <Divider />

                    <h3>Waterborne Vehicles</h3>
                    <List component="nav">
                    {equipments.filter(equipment => {
                        return equipment.equipment_category === "Mounts and Vehicles" && equipment.vehicle_category === "Waterborne Vehicles"
                    }).map(vehicle => (
                        <div key={vehicle.slug}>
                            <Link className="link" to={`/libraries/equipment/${vehicle.slug}`}>
                                <ListItem button>
                                    <ListItemText primary={vehicle.name} />
                                </ListItem>
                            </Link>
                        </div>
                    ))}
                    </List>
                </div>
            </main>
        </BackgroundImage>
    );
};
