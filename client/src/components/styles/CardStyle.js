import React from 'react';
import styled from 'styled-components';

export const CardStyle = styled.div`
    width: ${({ dice }) => dice ? "7em" : "12em"};
    height: ${({ dice }) => dice ? "7em" : "20em"};
    margin: 1em;
    border-radius: 5px;
    box-shadow: 5px 0 5px -2px #888;
    position: "relative";
    background-color: ${({ dice }) => dice ? "#fff" : "rgba(45,99,127,1)"};
    background-repeat: no-repeat;
    background-image: url(${({image}) => image});
    background-size: ${({imageSize}) => imageSize || "100%"};
    background-position-x: center;
    cursor: pointer;
`;

export const CardContentStyle = {
    content: {
        position: "absolute",
        bottom: "0",
        right: "0",
    }
};
