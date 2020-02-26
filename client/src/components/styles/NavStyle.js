import React from 'react';

export const NavContainer = props => {
    const { children } = props;

    return(
        <div
            style={{
                display: "flex",
                flexDirection: "row",
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
                boxShadow: "5px 0 5px -2px #888",
                minHeight: "100vh",
                backgroundColor: "rgba(45,99,127,1)",
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
                justifyContent: "space-between",
                alignItems: "center",
                minHeight: "100vh",
                width: "3.5em",
                background: "rgba(45,99,127,1)",
                position: "fixed",
                boxShadow: "5px 0 5px -2px #888",
            }}
        >
            {children}
        </div>
    );
};

export const sidebarText = {
    transform: "rotate(-90deg)",
    color: "#fff",
    fontSize: "1.5em",
    textDecoration: "none",
    size: "30%",
    marginTop: "2em",
    marginBottom: "3em",
};
