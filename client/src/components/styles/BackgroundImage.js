import React from 'react';

export const BackgroundImage = props => {
    const { children, image, size, position, light } = props;

    return(
        <div 
            style={{
                backgroundImage: `linear-gradient(to bottom, 
                    rgba(255,255,255,${light ? "0.95" : "0.8"}) 0%,rgba(255,255,255,${light ? "0.98" : "0.9"})
                    100%),
                url('${image}')`,
                backgroundSize: size || "cover",
                backgroundAttachment: "fixed",
                backgroundRepeat: "no-repeat",
                backgroundPosition: position || "right",
                overflow: "auto",
                minHeight: "100vh",
            }}
        >
            {children}
        </div>
    );
};
