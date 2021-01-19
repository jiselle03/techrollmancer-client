import React from 'react';

import { BackgroundImage } from '../styles/Image';
import Container from '../styles/Container';

const NotFoundPage = () => {
    return (
        <BackgroundImage
            image="https://i.ibb.co/cctCwgk/d20.png"
            light
        >
            <Container>
                <h1 style={{color: "maroon"}}>
                    404 Not Found
                </h1>
            </Container>
        </BackgroundImage>
    );
};

export default NotFoundPage;
