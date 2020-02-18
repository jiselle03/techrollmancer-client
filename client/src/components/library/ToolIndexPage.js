import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../css/Index.css';
import { CircularProgress } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

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
        <div className="tools index-background">
            <main className="Main">
                <h1>TOOLS</h1>
                <Divider />

                <div className="list-container">
                    <h3>Artisan's Tools</h3>
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

                    <h3>Gaming Sets</h3>
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

                    <h3>Musical Instruments</h3>
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

                    <h3>Other Tools</h3>
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
            </main>
        </div>
    );
};
