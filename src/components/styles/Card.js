import styled from 'styled-components';
import { bool, string } from 'prop-types';

export const Card = styled.div`
    ${({ secondary, image, imageSize, margin, padding }) => !secondary ? `
        width: 12em;
        height: 20em;
        margin: 1em;
        border-radius: 5px;
        position: relative;
        background-color: rgba(45,99,127,1);
        background-repeat: no-repeat;
        background-image: url(${image});
        background-size: ${imageSize || "100%"};
        background-position-x: center;
        cursor: pointer;

        &:hover {
            box-shadow: 3px 3px 2px rgba(0, 0, 0, .4);
        }
        ` : `
        margin: ${margin};
        padding: ${padding};
        border-radius: 5px;
        position: relative;
        background-color: #fff;
        width: 70vw;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, .4);
        border: 1px solid #f3f3f3;

        @media screen and (min-width: 1280px) {
            width: 60vw;
        }
    `}
`;

Card.propTypes = {
    secondary: bool,
    image: string,
    imageSize: string,
    margin: string,
    padding: string,
  };

export const CardContent = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 4%;
`;
