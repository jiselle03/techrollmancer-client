import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Library from '../../api/library';
import Container, { Layout } from '../styles/Container';
import { BackgroundImage } from '../styles/Image';
import { Heading } from '../styles/Typography';

import { CircularProgress, List, ListItem, ListItemText } from '@material-ui/core';

const ArmorIndexPage = () => {
    const [equipments, setEquipments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        Library.allEquipments().then(equipments => { 
            setEquipments(equipments);
            setIsLoading(false);
          });
    }, []);

    if (isLoading) return(<CircularProgress variant="determinate" />);

    return (
        <BackgroundImage 
            image="https://i.ibb.co/cctCwgk/d20.png"
            light
        >
            <Layout>
                <Heading>Armor</Heading>

                <Heading as="h2">Light</Heading>
                <List component="nav" className="list">
                {equipments.filter(equipment => {
                    return equipment.equipment_category === "Armor" && equipment.armor_category === "Light"
                }).map(armor => (
                    <Link key={armor.slug} className="link" to={`/libraries/equipment/${armor.slug}`}>
                        <ListItem button>
                            <ListItemText primary={armor.name} />
                        </ListItem>
                    </Link>
                ))}
                </List>

                <Heading as="h2">Medium</Heading>
                <List component="nav" className="list">
                {equipments.filter(equipment => {
                    return equipment.equipment_category === "Armor" && equipment.armor_category === "Medium"
                }).map(armor => (
                    <Link key={armor.slug} className="link" to={`/libraries/equipment/${armor.slug}`}>
                        <ListItem button>
                            <ListItemText primary={armor.name} />
                        </ListItem>
                    </Link>
                ))}
                </List>

                <Heading as="h2">Heavy</Heading>
                <List component="nav" className="list">
                {equipments.filter(equipment => {
                    return equipment.equipment_category === "Armor" && equipment.armor_category === "Heavy"
                }).map(armor => (
                    <Link key={armor.slug} className="link" to={`/libraries/equipment/${armor.slug}`}>
                        <ListItem button>
                            <ListItemText primary={armor.name} />
                        </ListItem>
                    </Link>
                ))}
                </List>

                <Heading as="h2">Shield</Heading>
                <List component="nav" className="list">
                {equipments.filter(equipment => {
                    return equipment.equipment_category === "Armor" && equipment.armor_category === "Shield"
                }).map(armor => (
                    <Link key={armor.slug} className="link" to={`/libraries/equipment/${armor.slug}`}>
                        <ListItem button>
                            <ListItemText primary={armor.name} />
                        </ListItem>
                    </Link>
                ))}
                </List>
            </Layout>
        </BackgroundImage>
    );
};

export default ArmorIndexPage;
