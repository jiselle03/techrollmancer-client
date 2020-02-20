import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../css/Index.css';
import { BackgroundImage } from '../styles/BackgroundImage';
import { MainStyle } from '../styles/MainStyle';

import { CircularProgress, Divider, List, ListItem, ListItemText, Typography } from '@material-ui/core';

const getEquipments = () => {
    return axios.get("http://localhost:3000/api/v1/libraries/equipment");
};

export const ToolIndexPage = () => {
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
                    TOOLS
                </Typography>
                
                <Divider />

                <div className="list-container">
                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        Artisan's Tools
                    </Typography>
                    <List component="nav">
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

                    <Divider />

                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        Gaming Sets
                    </Typography>
                    <List component="nav">
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

                    <Divider />

                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        Musical Instruments
                    </Typography>
                    <List component="nav">
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

                    <Divider />

                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        Other Tools
                    </Typography>
                    <List component="nav">
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
                </div>
            </MainStyle>
        </BackgroundImage>
    );
};
