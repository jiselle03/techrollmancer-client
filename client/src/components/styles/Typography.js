import styled from 'styled-components';
import { bool, object } from 'prop-types';

export const Heading = styled.h1`
    color: ${({ theme, alt }) => alt ? theme.secondary : null};
    margin-top: ${({ top }) => top};
    margin-bottom: ${({ bottom }) => bottom};
    text-shadow: ${({ alt }) => alt ? `-1px -1px 0px #000,
                                        0px -1px 0px #000,
                                        1px -1px 0px #000,
                                        -1px  0px 0px #000,
                                        1px  0px 0px #000,
                                        -1px  1px 0px #000,
                                        0px  1px 0px #000,
                                        1px  1px 0px #000}` : "none"};
`;

Heading.propTypes = {
    theme: object,
    alt: bool,
};

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

Text.propTypes = {
    theme: object,
    alt: bool,
};
