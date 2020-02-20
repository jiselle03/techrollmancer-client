import React from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';

export const Grid = props => {
    const { children, margin } = props;
    const mediumScreen = useMediaQuery('(min-width:660px)');
    const largeScreen = useMediaQuery('(min-width:1100px)');

    const getScreenSize = () => {
        if (largeScreen) {
            return "repeat(3, 1fr)";
        } else if (mediumScreen) {
            return "repeat(2, 1fr)";
        } else {
            return "repeat(1, fr)";
        };;
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
