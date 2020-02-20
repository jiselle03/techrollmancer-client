import React from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';

export const MainStyle = props => {
    const { children } = props;

    const matches = useMediaQuery('(min-width:960px)');

    return(
        <div 
            style={{
                margin: "2em",
                marginLeft: matches ? "25em" : "7em",
                width: matches ? "65%" : "auto",
                height: "100%",
            }}
        >
            {children}
        </div>
    );
};
