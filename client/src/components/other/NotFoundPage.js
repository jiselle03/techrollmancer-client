import React from 'react';

import { BackgroundImage } from '../styles/BackgroundImage';
import { MainStyle } from '../styles/MainStyle';

import { Typography } from '@material-ui/core';

export const NotFoundPage = () => {
    return (
        <BackgroundImage
            image={require('../../assets/d20.png')}
        >
            <MainStyle>
                <Typography variant="h1" style={{color: "maroon"}}>
                    404 Not Found
                </Typography>
            </MainStyle>
        </BackgroundImage>
    );
};
