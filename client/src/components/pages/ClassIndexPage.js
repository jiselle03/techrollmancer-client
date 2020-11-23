import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Utils from '../../js/utils';
import Library from '../../api/library';
import BackgroundImage from '../styles/BackgroundImage';
import MainStyle from '../styles/MainStyle';
import { CardStyle, CardContentStyle } from '../styles/CardStyle';

import { Card, CardContent, CircularProgress, Grid } from '@material-ui/core';

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
            light={true}
        >
            <MainStyle>
                <h1 style={{marginLeft: "0.2em"}}>
                    CLASSES
                </h1>
                
                <Grid container>
                {classes.map(charClass => (
                    <div key={charClass.slug}>
                        <Link 
                            to={`/libraries/classes/${charClass.slug}`} 
                            href=""
                        >
                            <CardStyle
                                image={Utils.getClassImage(charClass.slug)}
                                imageSize={getImageSize(charClass.slug)}
                            >
                                <Card>
                                    <CardContent style={CardContentStyle.content}>
                                        <h5 className="card-text">
                                            {charClass.name}
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

export default ClassIndexPage;
