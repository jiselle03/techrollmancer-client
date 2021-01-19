import styled from 'styled-components';

export const Heading = styled.h1`
    color: ${({ theme, alt }) => alt ? theme.secondary : null};
    text-shadow: ${({ alt }) => alt ? `-1px -1px 0px #000,
                                        0px -1px 0px #000,
                                        1px -1px 0px #000,
                                        -1px  0px 0px #000,
                                        1px  0px 0px #000,
                                        -1px  1px 0px #000,
                                        0px  1px 0px #000,
                                        1px  1px 0px #000}` : "none"};
`;

export const Text = styled.p`
    color: ${({ theme, alt }) => alt ? theme.secondary : theme.primary};
    text-shadow: ${({ alt }) => alt ? `-1px -1px 0px #000,
                                        0px -1px 0px #000,
                                        1px -1px 0px #000,
                                        -1px  0px 0px #000,
                                        1px  0px 0px #000,
                                        -1px  1px 0px #000,
                                        0px  1px 0px #000,
                                        1px  1px 0px #000}` : "none"};
`;
