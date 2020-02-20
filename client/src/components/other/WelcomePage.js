import React from "react";

import { BackgroundImage } from '../styles/BackgroundImage';
import { MainStyle } from '../styles/MainStyle';

export const WelcomePage = (props) => (
    <BackgroundImage
        image={require('../../assets/d20.png')}
    >
        <MainStyle>
            <div>Techrollmancer</div>
            <div> Welcome to Techrollmancer</div>
        </MainStyle>
    </BackgroundImage>
);
