import React from 'react';

export const TableStyle = props => {
    const { children, margin, width } = props;

    return(
        <div 
            style={{
                margin: "2em auto",
                width: width || "50vw",
            }}
        >
            {children}
        </div>
    );
};
