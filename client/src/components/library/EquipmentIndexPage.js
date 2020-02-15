import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../css/Index.css';
import { CircularProgress } from '@material-ui/core';

const getEquipments = () => {
    return axios.get("http://localhost:3000/api/v1/libraries/equipment");
};

export const EquipmentIndexPage = () => {
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
        <main className="Main">
            <h2>Equipment</h2>
            {equipments.map(equipment => (
                <div key={equipment.slug}>
                <Link className="link" to={`/libraries/equipment/${equipment.slug}`}>
                    {equipment.name}
                </Link>
                </div>
            ))}
        </main>
    );
};
