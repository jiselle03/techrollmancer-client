import React from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';

export const MainStyle = props => {
    const { children } = props;

    const laptop = useMediaQuery('(min-width:1280px)');

    return(
        <div 
            style={{
                margin: "2em",
                marginLeft: laptop ? "25em" : "7em",
                width: laptop ? "65%" : "auto",
                height: "100%",
            }}
        >
            {children}
        </div>
    );
};
