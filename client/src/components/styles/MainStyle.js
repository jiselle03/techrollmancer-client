import React from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';

export const MainStyle = props => {
    const { children } = props;

    const laptop = useMediaQuery('(min-width:1280px)');

    return(
        <div 
            style={{
                margin: laptop ? "1em 2em 2em 27vw" : "1em 2em 2em 15vw",
                width: "70vw",
                minHeight: "100vh",
                overflowX: "visible",
            }}
        >
            {children}
        </div>
    );
};
