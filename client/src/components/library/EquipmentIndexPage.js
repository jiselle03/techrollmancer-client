import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../css/Index.css';
import { BackgroundImage } from '../styles/BackgroundImage';
import { CircularProgress } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';

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
        <BackgroundImage 
            image={require('../../assets/d20.png')}
        >
            <main className="Main">
                <h1>EQUIPMENT</h1>
                <Divider />

                {equipments.map(equipment => (
                    <div key={equipment.slug}>
                    <Link className="link" to={`/libraries/equipment/${equipment.slug}`}>
                        {equipment.name}
                    </Link>
                    </div>
                ))}
            </main>
        </BackgroundImage>
    );
};
