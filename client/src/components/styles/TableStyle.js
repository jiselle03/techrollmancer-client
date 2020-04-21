import React from 'react';

const TableStyle = props => {
    const { children, margin, width } = props;

    return(
        <div 
            style={{
                margin: margin || "2em auto",
                width: width || "50vw",
            }}
        >
            {children}
        </div>
    );
};

export default TableStyle;
