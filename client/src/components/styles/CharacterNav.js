
import React from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';

export const CharacterNav = props => {
    const { children } = props;

    const laptop = useMediaQuery('(min-width:1280px)');
    
    return(
        <div 
            style={{
                marginLeft: laptop ? "25vw" : "3.5vw",
                width: "75vw",
                height: "100%",
                overflowX: "hidden",
            }}
        >
            {children}
        </div>
    );
};

export const NavWidth = () => {

    const ipad = useMediaQuery('(min-width: 768px)');
    const ipadPro = useMediaQuery('(min-width:960px)');
    const laptop = useMediaQuery('(min-width:1280px)');
    const desktop = useMediaQuery('(min-width:1920px)');

    switch(true) {
        case desktop:
            return "20%";
        case laptop:
            return "20%";
        case ipadPro:
            return "20%";
        case ipad:
            return "20%";
        default: 
            return "20%";
    };
};
