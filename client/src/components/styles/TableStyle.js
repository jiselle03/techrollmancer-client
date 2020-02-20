import React from 'react';

export const TableStyle = props => {
    const { children } = props;

    return(
        <div 
            style={{
                margin: "2em",
                width: "90%"
            }}
        >
            {children}
        </div>
    );
};
