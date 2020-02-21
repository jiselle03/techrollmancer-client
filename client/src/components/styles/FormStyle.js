import React from 'react';

export const FormStyle = props => {
    const { children, height, margin } = props;

    return(
        <div 
            style={{
                borderRadius: "5px",
                padding: "1em",
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
        color: "#000"
    },
    link: {
        textDecoration: "none",
        color: "rgba(45,99,127,1)",
        fontWeight: "bold"
    },
    field: {
        padding: "0.5em",
        margin: "1em 2em",
        width: "85%"
    }
};
