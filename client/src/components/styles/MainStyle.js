import React from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';

export const MainStyle = props => {
    const { children } = props;

    const ipadPro = useMediaQuery('(min-width:1024px)');

    return(
        <div 
            style={{
                margin: "2em",
                marginLeft: ipadPro ? "25em" : "7em",
                width: ipadPro ? "65%" : "auto",
                height: "100%",
            }}
        >
            {children}
        </div>
    );
};
