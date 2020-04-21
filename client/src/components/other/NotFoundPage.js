import React from 'react';

import BackgroundImage from '../styles/BackgroundImage';
import MainStyle from '../styles/MainStyle';

const NotFoundPage = () => {
    return (
        <BackgroundImage
            image={require('../../assets/d20.png')}
            light={true}
        >
            <MainStyle>
                <h1 style={{color: "maroon"}}>
                    404 Not Found
                </h1>
            </MainStyle>
        </BackgroundImage>
    );
};

export default NotFoundPage;
