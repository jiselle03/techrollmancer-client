import styled from 'styled-components';

const Container = styled.div`
    ${({ marginLeft }) => marginLeft && `margin-left: ${marginLeft};`}
    ${({ marginRight }) => marginRight && `margin-right: ${marginRight};`}
    ${({ padding }) => padding && `padding: ${padding};`}
    ${({ overflow }) => overflow && `overflow: ${overflow};`}
    ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
    ${({ font }) => font && `font-family: ${font};`}
`;

export default Container;

export const Layout = styled.main`
    margin: 1em 2em 2em 15vw;
    width: 70vw;
    min-height: 100vh;
    overflow-x: visible;

    @media screen and (min-width: 1280px) {
        margin: 1em 2em 2em 27vw;
    }
`;

export const CharacterSheet = styled.div`
    padding: 1em;

    @media screen and (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    @media print {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }
`;