import styled from 'styled-components';

export const Card = styled.div`
    width: 12em;
    height: 20em;
    margin: 1em;
    border-radius: 5px;
    position: relative;
    background-color: rgba(45,99,127,1);
    background-repeat: no-repeat;
    background-image: url(${({image}) => image});
    background-size: ${({imageSize}) => imageSize || "100%"};
    background-position-x: center;
    cursor: pointer;

    &:hover {
        filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .4));
    }
`;

export const CardContent = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 4%;
`;
