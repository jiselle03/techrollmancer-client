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
        
    `}
`;

export default Container;
