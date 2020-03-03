import React from 'react';

export const CardStyle = props => {
    const { children, image, imageSize, imagePosition, height, width, color } = props;

    return(
        <div 
            style={{
                width: width || "12em",
                height: height || "20em",
                margin: "1em",
                borderRadius: "5px",
                boxShadow: "5px 0 5px -2px #888",
                position: "relative",
                backgroundColor: color || "rgba(45,99,127,1)",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${image})`,
                backgroundSize: imageSize || "100%",
                backgroundPositionX: imagePosition
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
    }
};
