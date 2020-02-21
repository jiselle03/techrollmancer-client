import React from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';

export const Grid = props => {
    const { children, margin } = props;
    
    const ipad = useMediaQuery('(min-width: 768px)');
    const ipadPro = useMediaQuery('(min-width:960px)');
    const desktop = useMediaQuery('(min-width:1920px)');

    const getScreenSize = () => {
        switch(true) {
            case desktop:
                return "repeat(4, 1fr)";
            case ipadPro:
                return "repeat(3, 1fr)";
            case ipad:
                return "repeat(2, 1fr)";
            default: 
                return "fr";
        };
    };

    return(
        <div
            style={{
                display: "grid",
                gridTemplateColumns: getScreenSize(),
                margin: margin,
            }}
        >
            {children}
        </div>
    );
};
