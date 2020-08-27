import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Utils from '../js/utils';
import BackgroundImage from '../styles/BackgroundImage';
import MainStyle from '../styles/MainStyle';
import { CardStyle, CardContentStyle } from '../styles/CardStyle';

import { Card, CardContent, CircularProgress, Grid } from '@material-ui/core';

const getRaces = () => axios.get("http://techrollmancer-server.herokuapp.com/api/v1/libraries/races");

const RaceIndexPage = () => {
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

    if (isLoading) return (<CircularProgress variant="determinate" />);

    return (
        <BackgroundImage 
            image="https://i.ibb.co/cctCwgk/d20.png"
            light={true}
        >
            <MainStyle>
                <h1 style={{marginLeft: "0.2em"}}>
                    RACES
                </h1>

                <Grid container>
                {races.map(race => (
                    <div key={race.slug}>
                        <Link 
                            to={`/libraries/races/${race.slug}`} 
                        >
                            <CardStyle 
                                image={Utils.getRaceImage(race.slug)}
                                imageSize={getImageSize(race.slug)}
                                imagePosition="50%"
                            >
                                <Card>
                                    <CardContent style={CardContentStyle.content}>
                                        <h5 className="card-text">
                                            {race.name}
                                        </h5>
                                    </CardContent>
                                </Card>
                            </CardStyle>
                        </Link>
                    </div>
                ))}
                </Grid>
            </MainStyle>
        </BackgroundImage>
    );
};

export default RaceIndexPage;
