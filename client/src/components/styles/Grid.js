import React from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';

export const Grid = props => {
    const { children, margin } = props;
    
    const ipad = useMediaQuery('(min-width: 768px)');
    const desktop = useMediaQuery('(min-width:1280px)');

    const getScreenSize = () => {
        switch(true) {
            case desktop:
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
