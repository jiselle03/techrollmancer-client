import React from 'react';

export const CardStyle = props => {
    const { children, image, imageSize, imagePosition } = props;

    return(
        <div 
            style={{
                minWidth: "220px",
                width: "10em",
                height: "20em",
                margin: "0.5em",
                borderRadius: "5px",
                boxShadow: "5px 0 5px -2px #888",
                position: "relative",
                backgroundColor: "rgba(45,99,127,1)",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${image})`,
                backgroundSize: imageSize || "100%",
                backgroundPosition: imagePosition
            }}
        >
            {children}
        </div>
    );
};

export const CardContentStyle = {
    content: {
        position: "absolute",
        bottom: "0",
        right: "0",
    },
    text: {
        color: "#fff",
    }
};
