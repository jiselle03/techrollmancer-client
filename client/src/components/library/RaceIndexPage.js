import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../css/Index.css';
import { CircularProgress } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';

const getRaces = () => {
    return axios.get("http://localhost:3000/api/v1/libraries/races");
};

export const RaceIndexPage = () => {
    const [races, setRaces] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getRaces().then(races => { 
            setRaces(races.data);
            setIsLoading(false);
          });
    }, []);

    if (isLoading) {
        return(
        <CircularProgress variant="determinate" />
        );
    };

    return (
        <div className="race index-background">
            <main className="Main">
                <h1>RACES</h1>
                <Divider />

                <div id="grid-container">
                {races.map(race => (
                    <div key={race.slug}>
                        <Link 
                            to={`/libraries/races/${race.slug}`} 
                            className="link" 
                        >
                            <Card className={`${race.name} card`}>
                                <CardContent className="content">
                                    <h5 className="race name">{race.name}</h5>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                ))}
                </div>
            </main>
        </div>
    );
};
