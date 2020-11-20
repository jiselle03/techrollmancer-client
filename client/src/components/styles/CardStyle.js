import React from 'react';

export const CardStyle = props => {
    const { children, image, imageSize, dice } = props;
    
    return(
        <div 
            style={{
                width: dice ? "7em" : "12em",
                height: dice ? "7em" : "20em",
                margin: "1em",
                borderRadius: "5px",
                boxShadow: "5px 0 5px -2px #888",
                position: "relative",
                backgroundColor: dice ? "#fff" : "rgba(45,99,127,1)",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${image})`,
                backgroundSize: imageSize || "100%",
                backgroundPositionX: "center",
                cursor: "pointer"
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
