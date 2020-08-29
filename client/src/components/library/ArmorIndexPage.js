import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Library from '../../api/library';
import MainStyle from '../styles/MainStyle';
import BackgroundImage from '../styles/BackgroundImage';

import { CircularProgress, List, ListItem, ListItemText } from '@material-ui/core';

const ArmorIndexPage = () => {
    const [equipments, setEquipments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        Library.getEquipments().then(equipments => { 
            setEquipments(equipments);
            setIsLoading(false);
          });
    }, []);

    if (isLoading) return(<CircularProgress variant="determinate" />);

    return (
        <BackgroundImage 
            image="https://i.ibb.co/cctCwgk/d20.png"
            light={true}
        >
            <MainStyle>
                <h1>
                    ARMOR
                </h1>

                <h2>
                    Light
                </h2>
                <List component="nav" className="list">
                {equipments.filter(equipment => {
                    return equipment.equipment_category === "Armor" && equipment.armor_category === "Light"
                }).map(armor => (
                    <div key={armor.slug}>
                        <Link className="link" to={`/libraries/equipment/${armor.slug}`}>
                            <ListItem button>
                                <ListItemText primary={armor.name} />
                            </ListItem>
                        </Link>
                    </div>
                ))}
                </List>

                <h2>
                    Medium
                </h2>
                <List component="nav" className="list">
                {equipments.filter(equipment => {
                    return equipment.equipment_category === "Armor" && equipment.armor_category === "Medium"
                }).map(armor => (
                    <div key={armor.slug}>
                        <Link className="link" to={`/libraries/equipment/${armor.slug}`}>
                            <ListItem button>
                                <ListItemText primary={armor.name} />
                            </ListItem>
                        </Link>
                    </div>
                ))}
                </List>

                <h2>
                    Heavy
                </h2>
                <List component="nav" className="list">
                {equipments.filter(equipment => {
                    return equipment.equipment_category === "Armor" && equipment.armor_category === "Heavy"
                }).map(armor => (
                    <div key={armor.slug}>
                        <Link className="link" to={`/libraries/equipment/${armor.slug}`}>
                            <ListItem button>
                                <ListItemText primary={armor.name} />
                            </ListItem>
                        </Link>
                    </div>
                ))}
                </List>

                <h2>
                    Shield
                </h2>
                <List component="nav" className="list">
                {equipments.filter(equipment => {
                    return equipment.equipment_category === "Armor" && equipment.armor_category === "Shield"
                }).map(armor => (
                    <div key={armor.slug}>
                        <Link className="link" to={`/libraries/equipment/${armor.slug}`}>
                            <ListItem button>
                                <ListItemText primary={armor.name} />
                            </ListItem>
                        </Link>
                    </div>
                ))}
                </List>
            </MainStyle>
        </BackgroundImage>
    );
};

export default ArmorIndexPage;
