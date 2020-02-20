import React from 'react';
import { useSpring, animated } from 'react-spring/web.cjs';

export const FadeStyle = props => {
    const { children } = props;

    return(
        <div 
            style={{
                backgroundColor: "#fff",
                border: "1px solid #000",
                boxShadow: "5px 0 5px -2px #888",
                borderRadius: "5px",
                padding: "2em 4em",
                textAlign: "center"
            }}
        >
            {children}
        </div>
    );
};

export const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
      from: { opacity: 0 },
      to: { opacity: open ? 1 : 0 },
      onStart: () => {
        if (open && onEnter) {
          onEnter();
        }
      },
      onRest: () => {
        if (!open && onExited) {
          onExited();
        }
      },
    });
  
    return (
      <animated.div ref={ref} style={style} {...other}>
        {children}
      </animated.div>
    );
});