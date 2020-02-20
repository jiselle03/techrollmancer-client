import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { MainStyle } from '../styles/MainStyle';
import { BackgroundImage } from '../styles/BackgroundImage';
import { CardStyle, CardContentStyle, CardTextStyle } from '../styles/CardStyle';

import { Card, CardContent, CircularProgress, Divider, Typography } from '@material-ui/core';

const getRaces = () => {
    return axios.get("http://localhost:3000/api/v1/libraries/races");
};

export const RaceIndexPage = () => {
    const [races, setRaces] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImageSize = race => {
        switch(race) {
            case "gnome":
                return "125%";
            case "half-elf":
                return "80%";
            case "half-orc":
                return "115%";
            case "halfling":
                return "120%";
            case "human":
                return "80%";  
            case "tiefling":
                return "110%";
            default:
                return "100%";
        };
    };

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
        <BackgroundImage 
            image={require('../../assets/d20.png')}
        >
            <MainStyle>
                <Typography variant="h2">
                    RACES
                </Typography>

                <Divider />
                
                <div id="grid-container">
                    <br />
                {races.map(race => (
                    <div key={race.slug}>
                        <Link 
                            to={`/libraries/races/${race.slug}`} 
                        >
                            <CardStyle 
                                image={require(`../../assets/${race.slug}.png`)}
                                imageSize={getImageSize(race.slug)}
                                imagePosition="50%"
                            >
                                <Card>
                                    <CardContentStyle>
                                        <CardContent>
                                            <CardTextStyle>
                                                <Typography 
                                                    variant={race.slug === "dragonborn" ? "h4" : "h3"} 
                                                    gutterBottom={false}
                                                >
                                                    {race.name}
                                                </Typography>
                                            </CardTextStyle>
                                        </CardContent>
                                    </CardContentStyle>
                                </Card>
                            </CardStyle>
                        </Link>
                    </div>
                ))}
                </div>
            </MainStyle>
        </BackgroundImage>
    );
};
