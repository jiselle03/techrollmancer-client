import styled from 'styled-components';
import { string, object } from 'prop-types';

export const Heading = styled.h1`
  color: ${({ theme, alt }) => alt ? theme.secondary : null};
  ${({ top }) => top && `margin-top: ${top};`};
  ${({ bottom }) => bottom && `margin-bottom: ${bottom};`};
  ${({ left }) => left && `margin-left: ${left}`};
  ${({ right }) => right && `margin-right: ${right};`}
  ${({ align }) => align && `text-align: ${align};`}
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
  alt: string,
};

export const Text = styled.p`
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

Text.propTypes = {
  theme: object,
  alt: string,
};
