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
