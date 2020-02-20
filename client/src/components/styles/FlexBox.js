import React from 'react';

export const FlexBox = props => {
    const { children, direction, justifyContent, alignItems, margin } = props;

    return(
        <div
            style={{
                display: "flex",
                flexDirection: direction,
                justifyContent: justifyContent,
                alignItems: alignItems,
                margin: margin,
            }}
        >
            {children}
        </div>
    );
};