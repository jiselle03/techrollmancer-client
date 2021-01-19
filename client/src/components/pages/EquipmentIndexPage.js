import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Library from '../../api/library';
import { BackgroundImage } from '../styles/Image';
import Container from '../styles/Container';

import { CircularProgress, List, ListItem, ListItemText } from '@material-ui/core';

const EquipmentIndexPage = () => {
    const [equipments, setEquipments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
            <Container>
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
            </Container>
        </BackgroundImage>
    );
};

export default EquipmentIndexPage;
