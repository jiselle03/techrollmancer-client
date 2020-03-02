import React from 'react';

export const FormStyle = props => {
    const { children, height, padding, margin } = props;

    return(
        <div 
            style={{
                borderRadius: "5px",
                padding: padding,
                width: "25em",
                height: height,
                margin: margin
            }}
        >
            {children}
        </div>
    );
};

export const FormContent = {
    icon: {
        color: "#000",
    },
    link: {
        textDecoration: "none",
        color: "rgba(45,99,127,1)",
        fontWeight: "bold",
    },
    field: {
        padding: "0.5em",
        margin: "1em 2em",
        width: "85%",
    },
    character: {
        margin: "0.5em",
        width: "85%",
    },
    stat: {
        margin: "0.5em 1em",
        width: "35%",
    },
    scheduler: {
        padding: "0.5em",
        margin: "0.5em 3.25em",
        width: "85%"
    },
    datetime: {
        margin: "auto 0.25em",
        width: "95%"
    }
};
