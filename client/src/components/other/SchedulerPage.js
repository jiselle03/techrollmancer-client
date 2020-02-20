import React, { useState, useEffect } from 'react';

import '../css/Home.css';
import { BackgroundImage } from '../styles/BackgroundImage';
import Divider from '@material-ui/core/Divider';

export const SchedulerPage = () => {

    return(
        <BackgroundImage 
            image={require('../../assets/d20.png')}
        >
            <main className="Main">
                <h1>Scheduler</h1>
                <Divider />

            </main>
        </BackgroundImage>
    );
};
