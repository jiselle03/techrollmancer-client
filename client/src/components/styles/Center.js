import React from 'react';

export const Center = props => {
    const { children } = props;

    return(
        <div
            style={{
                margin: "0 auto"
            }}
        >
            {children}
        </div>
    );
};
