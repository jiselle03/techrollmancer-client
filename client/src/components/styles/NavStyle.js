import React from 'react';

import useMediaQuery from '@material-ui/core/useMediaQuery';

export const NavContainer = props => {
    const { children } = props;

    return(
        <div
            style={{
                display: "flex",
                flexDirection: "row"
            }}
        >
            {children}
        </div>
    );
};

export const NavBarStyle = props => {
    const { children } = props;

    return(
        <div 
            style={{
                color: "#fff",
                position: "fixed",
                maxWidth: "360px",
                boxShadow: "5px 0 5px -2px #888",
                borderRight: "1px solid rgba(189, 195, 199, 0.5)",
                minHeight: "100vh",
                backgroundColor: "rgba(45,99,127,1)"
            }}
        >
            {children}
        </div>
    );
};

export const Sidebar = props => {
    const { children } = props;

    return(
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
                minHeight: "100vh",
                width: "3.5em",
                margin: "auto",
                flexBasis: "auto"
            }}
        >
            {children}
        </div>
    );
};
