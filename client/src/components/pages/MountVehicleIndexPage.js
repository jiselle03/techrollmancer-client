import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Library from '../../api/library';
import { BackgroundImage } from '../styles/Image';
import MainStyle from '../styles/MainStyle';

import { CircularProgress, List, ListItem, ListItemText } from '@material-ui/core';

const MountVehicleIndexPage = () => {
    const [equipments, setEquipments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const types = ["Mounts and Other Animals", "Tack, Harness, and Drawn Vehicles", "Waterborne Vehicles"];

    useEffect(() => {
        Library.allEquipments().then(equipments => { 
            setEquipments(equipments);
            setIsLoading(false);
          });
    }, []);

    if (isLoading) return (<CircularProgress variant="determinate" />);

    return (
        <BackgroundImage 
            image="https://i.ibb.co/cctCwgk/d20.png"
            light={true}
        >
            <MainStyle>
                <h1>
                    MOUNTS AND VEHICLES
                </h1>

                {types.map(type => (
                    <div key={type}>
                        <h2>{type}</h2>
                
                        <List component="nav" className="list">
                            {equipments.filter(equipment => {
                                return equipment.equipment_category === "Mounts and Vehicles" && equipment.vehicle_category === type
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
                ))}
            </MainStyle>
        </BackgroundImage>
    );
};

export default MountVehicleIndexPage;
