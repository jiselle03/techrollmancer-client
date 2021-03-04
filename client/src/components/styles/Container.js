import styled from 'styled-components';

const Container = styled.div`
    ${({ page }) => page ? `
        margin: 1em 2em 2em 15vw;
        width: 70vw;
        min-height: 100vh;
        overflow-x: visible;

        @media screen and (min-width: 1280px) {
            margin: 1em 2em 2em 27vw;
        }
        
    ` : `
        ${({ marginLeft }) => marginLeft && `margin-left: ${marginLeft};`}
        ${({ marginRight }) => marginRight && `margin-right: ${marginRight};`}
        ${({ padding }) => padding && `padding: ${padding};`}
        ${({ overflow }) => overflow && `overflow: ${overflow};`}
        ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
    `}
`;

export default Container;

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