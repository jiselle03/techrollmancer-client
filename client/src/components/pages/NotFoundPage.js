import React from 'react';

import { BackgroundImage } from '../styles/Image';
import { Layout } from '../styles/Container';
import { Heading } from '../styles/Typography';

const NotFoundPage = () => {
    return (
        <BackgroundImage
            image="https://i.ibb.co/cctCwgk/d20.png"
            light
        >
            <Layout>
                <Heading>404 Not Found</Heading>
            </Layout>
        </BackgroundImage>
    );
};

export default NotFoundPage;
