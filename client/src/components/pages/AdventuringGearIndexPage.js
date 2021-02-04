import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Library from '../../api/library';
import Container from '../styles/Container';
import { BackgroundImage } from '../styles/Image';
import { Heading } from '../styles/Typography';

import { CircularProgress, List, ListItem, ListItemText } from '@material-ui/core';

const AdventuringGearIndexPage = () => {
    const [equipments, setEquipments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        Library.allEquipments().then(equipments => { 
            setEquipments(equipments);
            setIsLoading(false);
          });
    }, []);

    if(isLoading) return (<CircularProgress variant="determinate" />);

    return (
        <BackgroundImage 
            image="https://i.ibb.co/cctCwgk/d20.png"
            light
        >
            <Container>
                <Heading>Adventuring Gear</Heading>

                <Heading as="h2">Equipment Packs</Heading>
                <List component="nav" className="list">
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

                <Heading as="h2">Standard Gear</Heading>
                <List component="nav" className="list">
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

                <Heading as="h2">Ammunition</Heading>
                <List component="nav" className="list">
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

                <Heading as="h2">Arcane Focus</Heading>
                <List component="nav" className="list">
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

                <Heading as="h2">Druidic Focus</Heading>
                <List component="nav" className="list">
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
                
                <Heading as="h2">Holy Symbols</Heading>
                <List component="nav" className="list">
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
                
                <Heading as="h2">Kits</Heading>
                <List component="nav" className="list">
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
                
            </Container>
        </BackgroundImage>
    );
};

export default AdventuringGearIndexPage;
