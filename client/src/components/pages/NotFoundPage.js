import React from 'react';

import { BackgroundImage } from '../styles/Image';
import Container from '../styles/Container';
import { Heading } from '../styles/Typography';

const NotFoundPage = () => {
    return (
        <BackgroundImage
            image="https://i.ibb.co/cctCwgk/d20.png"
            light
        >
            <Container>
                <Heading>404 Not Found</Heading>
            </Container>
        </BackgroundImage>
    );
};

export default NotFoundPage;
