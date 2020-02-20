import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { MainStyle } from '../styles/MainStyle';
import { BackgroundImage } from '../styles/BackgroundImage';
import { CardStyle, CardContentStyle, CardTextStyle } from '../styles/CardStyle';

import { Card, CardContent, CircularProgress, Divider, Typography } from '@material-ui/core';

const getClasses = () => {
    return axios.get("http://localhost:3000/api/v1/libraries/classes");
};

export const ClassIndexPage = () => {
    const [classes, setClasses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImageSize = charClass => {
        switch(charClass) {
            case "barbarian":
                return "75%";
            case "bard":
                return "75%";
            case "cleric":
                return "110%";
            case "druid":
                return "90%";
            case "monk":
                return "90%";
            default:
                return "cover";
        };
    };

    useEffect(() => {
        getClasses().then(classes => { 
            setClasses(classes.data);
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
                    CLASSES
                </Typography>
                
                <Divider />

                <div id="grid-container">
                    <br />
                {classes.map(charClass => (
                    <div key={charClass.slug}>
                        <Link 
                            to={`/libraries/classes/${charClass.slug}`} 
                            href=""
                        >
                            <CardStyle
                                image={require(`../../assets/${charClass.slug}.png`)}
                                imageSize={getImageSize(charClass.slug)}
                                imagePosition="50%"
                            >
                                <Card>
                                    <CardContentStyle>
                                        <CardContent>
                                            <CardTextStyle>
                                                <Typography variant="h3" align="right">
                                                    {charClass.name}
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
