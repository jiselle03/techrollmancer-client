import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Library from '../../api/library';
import { BackgroundImage } from '../styles/Image';
import { Layout } from '../styles/Container';
import { Heading } from '../styles/Typography';

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
            light
        >
            <Layout>
                <Heading>Equipment</Heading>

                <List component="nav" className="list">
                {equipments.map(equipment => (
                    <Link key={equipment.slug} className="link" to={`/libraries/equipment/${equipment.slug}`}>
                        <ListItem button>
                            <ListItemText primary={equipment.name} />
                        </ListItem>
                    </Link>
                ))}
                </List>
            </Layout>
        </BackgroundImage>
    );
};

export default EquipmentIndexPage;
