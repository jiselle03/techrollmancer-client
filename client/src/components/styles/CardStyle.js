import styled from 'styled-components';

export const CardStyle = styled.div`
    width: 12em;
    height: 20em;
    margin: 1em;
    border: 1px solid #f3f3f3;
    border-radius: 5px;
    position: "relative";
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

export const CardContentStyle = {
    content: {
        position: "absolute",
        bottom: "0",
        right: "0",
    }
};
