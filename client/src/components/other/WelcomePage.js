import React from "react";

import '../css/Home.css';
import { MainStyle } from '../styles/MainStyle';

export const WelcomePage = (props) => (
    <div className="welcome-background Home-Container">
        <MainStyle>
            <div>Techrollmancer</div>
            <div> Welcome to Techrollmancer</div>
        </MainStyle>
    </div>
);
