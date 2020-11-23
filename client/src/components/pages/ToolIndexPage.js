import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Library from '../../api/library';
import BackgroundImage from '../styles/BackgroundImage';
import MainStyle from '../styles/MainStyle';

import { CircularProgress, List, ListItem, ListItemText } from '@material-ui/core';

const ToolIndexPage = () => {
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
            <MainStyle>
                <h1>
                    TOOLS
                </h1>
                
                <h2>
                    Artisan's Tools
                </h2>
                <List component="nav" className="list">
                {equipments.filter(equipment => {
                    return equipment.equipment_category === "Tools" && equipment.tool_category === "Artisan's Tools"
                }).map(tool => (
                    <div key={tool.slug}>
                        <Link className="link" to={`/libraries/equipment/${tool.slug}`}>
                            <ListItem button>
                                <ListItemText primary={tool.name} />
                            </ListItem>
                        </Link>
                    </div>
                ))}
                </List>

                <h2>
                    Gaming Sets
                </h2>
                <List component="nav" className="list">
                {equipments.filter(equipment => {
                    return equipment.equipment_category === "Tools" && equipment.tool_category === "Gaming Sets"
                }).map(tool => (
                    <div key={tool.slug}>
                        <Link className="link" to={`/libraries/equipment/${tool.slug}`}>
                            <ListItem button>
                                <ListItemText primary={tool.name} />
                            </ListItem>
                        </Link>
                    </div>
                ))}
                </List>

                <h2>
                    Musical Instruments
                </h2>
                <List component="nav" className="list">
                {equipments.filter(equipment => {
                    return equipment.equipment_category === "Tools" && equipment.tool_category === "Musical Instrument"
                }).map(tool => (
                    <div key={tool.slug}>
                        <Link className="link" to={`/libraries/equipment/${tool.slug}`}>
                            <ListItem button>
                                <ListItemText primary={tool.name} />
                            </ListItem>
                        </Link>
                    </div>
                ))}
                </List>

                <h2>
                    Other Tools
                </h2>
                <List component="nav" className="list">
                {equipments.filter(equipment => {
                    return equipment.equipment_category === "Tools" && equipment.tool_category === "Other Tools"
                }).map(tool => (
                    <div key={tool.slug}>
                        <Link className="link" to={`/libraries/equipment/${tool.slug}`}>
                            <ListItem button>
                                <ListItemText primary={tool.name} />
                            </ListItem>
                        </Link>
                    </div>
                ))}
                </List>
            </MainStyle>
        </BackgroundImage>
    );
};

export default ToolIndexPage;