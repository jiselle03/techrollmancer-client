import React, { forwardRef } from 'react';
import { useSpring, animated } from 'react-spring/web.cjs';
import styled from 'styled-components';
import { string, element, bool, func } from 'prop-types';

export const FadeContent = styled.div`
  background-color: rgba(255,255,255,0.9);
  padding: 2em 4em;
  text-align: ${({ align }) => align || "center"};
  width: ${({ width }) => width};
`;

FadeContent.propTypes = {
  align: string,
  width: string,
};

export const Fade = forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
      from: { opacity: 0 },
      to: { opacity: open ? 1 : 0 },
      onStart: () => {
        if (open && onEnter) onEnter();
      },
      onRest: () => {
        if (!open && onExited) onExited();
      },
    });
  
    return (
      <animated.div ref={ref} style={style} {...other}>
        {children}
      </animated.div>
    );
});

Fade.propTypes = {
  children: element,
  in: bool.isRequired,
  onEnter: func,
  onExited: func,
};
