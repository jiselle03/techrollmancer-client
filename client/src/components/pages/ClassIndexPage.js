import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Utils from '../../js/utils';
import Library from '../../api/library';
import { BackgroundImage } from '../styles/Image';
import Container from '../styles/Container';
import { Card, CardContent } from '../styles/Card';
import { Heading } from '../styles/Typography';

import { CircularProgress, Grid } from '@material-ui/core';

const ClassIndexPage = () => {
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
        Library.allClasses().then(classes => { 
            setClasses(classes);
            setIsLoading(false);
          });
    }, []);

    if (isLoading) return (<CircularProgress variant="determinate" />);

    return (
        <BackgroundImage 
            image="https://i.ibb.co/cctCwgk/d20.png"
            light
        >
            <Container as="main" page>
                <Heading left="0.2em">CLASSES</Heading>
                
                <Grid container>
                {classes.map(charClass => (
                    <div key={charClass.slug}>
                        <Link 
                            to={`/libraries/classes/${charClass.slug}`} 
                            href=""
                        >
                            <Card
                                image={Utils.getClassImage(charClass.slug)}
                                imageSize={getImageSize(charClass.slug)}
                            >
                                <CardContent>
                                    <Heading as="h5" alt>{charClass.name}</Heading>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                ))}
                </Grid>
            </Container>
        </BackgroundImage>
    );
};

export default ClassIndexPage;
