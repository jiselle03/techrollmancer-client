import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { BackgroundImage } from '../styles/BackgroundImage';
import { MainStyle } from '../styles/MainStyle';

import { CircularProgress, Divider, List, ListItem, ListItemText, Typography } from '@material-ui/core';

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
            <MainStyle>
                <Typography variant="h2">
                    MOUNTS AND VEHICLES
                </Typography>

                <Divider />

                <div className="list-container">
                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        Mounts and Other Animals
                    </Typography>
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

                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        Tack, Harness, and Drawn Vehicles
                    </Typography>
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

                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        Waterborne Vehicles
                    </Typography>
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
            </MainStyle>
        </BackgroundImage>
    );
};
