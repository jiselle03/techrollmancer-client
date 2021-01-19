import styled from 'styled-components';

export const Heading = styled.h1`
    color: ${({ alt }) => alt ? "#fff" : "#000"};
    text-shadow: -1px -1px 0px #000,
                0px -1px 0px #000,
                1px -1px 0px #000,
                -1px  0px 0px #000,
                1px  0px 0px #000,
                -1px  1px 0px #000,
                0px  1px 0px #000,
                1px  1px 0px #000;
`;

export const Text = styled.p`

`;
