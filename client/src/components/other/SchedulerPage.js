import React, { useState, useEffect } from 'react';

import '../css/Home.css';
import { BackgroundImage } from '../styles/BackgroundImage';
import { MainStyle } from '../styles/MainStyle';

import Divider from '@material-ui/core/Divider';

export const SchedulerPage = () => {

    return(
        <BackgroundImage 
            image={require('../../assets/d20.png')}
        >
            <MainStyle>
                <h1>Scheduler</h1>
                <Divider />

            </MainStyle>
        </BackgroundImage>
    );
};
