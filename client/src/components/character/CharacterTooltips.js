import React from 'react';

export const TooltipRoll = props => {
    const { modifier, ability, name, header } = props;

    const handleOpen = (modifier, ability) => {
        return props.onHandleOpen(modifier, ability);
    };

    return(
        <div className="tooltip-roll">
            {header && (
                <h6 className="header" onClick={() => handleOpen(modifier, ability)}>
                    {name}
                </h6>
            )}
            {!header && (
                <p className="ability" onClick={() => handleOpen(modifier, ability)}>
                    {name}
                </p>
            )}
            <span className="tooltiptext">
                <p>Click to roll!</p>
            </span>
        </div>
    );
    
};

export const TooltipEdit = props => {
    const { field } = props;

    return(
        <div className="tooltip-edit">
            <h2 className="main-stats">{field}</h2>
            <span className="tooltiptext">
                <p>Click to edit!</p>
            </span>
        </div>
    );
};
