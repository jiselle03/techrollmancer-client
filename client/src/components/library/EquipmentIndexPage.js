import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import BackgroundImage from '../styles/BackgroundImage';
import MainStyle from '../styles/MainStyle';

import { CircularProgress, List, ListItem, ListItemText } from '@material-ui/core';

const getEquipments = () => axios.get("http://techrollmancer-server.herokuapp.com/api/v1/libraries/equipment");

const EquipmentIndexPage = () => {
    const [equipments, setEquipments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getEquipments().then(equipments => { 
            setEquipments(equipments.data);
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
                    EQUIPMENT
                </h1>

                <List component="nav" className="list">
                {equipments.map(equipment => (
                    <div key={equipment.slug}>
                        <Link className="link" to={`/libraries/equipment/${equipment.slug}`}>
                            <ListItem button>
                                <ListItemText primary={equipment.name} />
                            </ListItem>
                        </Link>
                    </div>
                ))}
                </List>
            </MainStyle>
        </BackgroundImage>
    );
};

export default EquipmentIndexPage;
