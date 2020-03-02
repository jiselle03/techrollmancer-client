import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { BackgroundImage } from '../styles/BackgroundImage';
import { MainStyle } from '../styles/MainStyle';

import { CircularProgress, List, ListItem, ListItemText } from '@material-ui/core';

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
            light={true}
        >
            <MainStyle>
                <h1>
                    MOUNTS AND VEHICLES
                </h1>

                <h2>
                    Mounts and Other Animals
                </h2>
                <List component="nav" className="list">
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

                <h2>
                    Tack, Harness, and Drawn Vehicles
                </h2>
                <List component="nav" className="list">
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

                <h2>
                    Waterborne Vehicles
                </h2>
                <List component="nav" className="list">
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
            </MainStyle>
        </BackgroundImage>
    );
};
