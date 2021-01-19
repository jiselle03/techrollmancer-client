import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Library from '../../api/library';
import { BackgroundImage } from '../styles/Image';
import Container from '../styles/Container';

import { CircularProgress, List, ListItem, ListItemText } from '@material-ui/core';

const WeaponIndexPage = () => {
    const [equipments, setEquipments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const types = ["Simple Melee", "Simple Ranged", "Martial Melee", "Martial Ranged"];

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
                    WEAPONS
                </h1>

                {types.map(type => (
                    <div key={type}>
                        <h2>{type}</h2>

                        <List component="nav" className="list">
                            {equipments.filter(equipment => {
                                return equipment.equipment_category === "Weapon" && equipment.category_range === type
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
                ))}
            </Container>
        </BackgroundImage>
    );
};

export default WeaponIndexPage;
