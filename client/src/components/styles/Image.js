import React from 'react';
import styled from 'styled-components';

export const BackgroundImage = props => {
    const { children, image, size, position, light } = props;

    return(
        <div 
            style={{
                backgroundImage: `linear-gradient(to bottom, 
                    rgba(255,255,255,${light ? "0.95" : "0.8"}) 0%,rgba(255,255,255,${light ? "0.98" : "0.9"})
                    100%),
                url('${image}')`,
                backgroundSize: size || "cover",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                backgroundPosition: position || "right",
                overflow: "auto",
                minHeight: "100vh",
            }}
        >
            {children}
        </div>
    );
};

export const Image = styled.img`
    height: 7em;
    width: 7em;
    margin: 1em;
    
    &:hover {
        filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .4));
    }
`;