import React from 'react';

export const TooltipRoll = props => {
    const { bonus, ability, name, header } = props;

    const handleOpen = (bonus, ability) => {
        return props.onHandleOpen(bonus, ability);
    };

    return(
        <div className="tooltip-roll">
            {header && (
                <h6 className="header" onClick={() => handleOpen(bonus, ability)}>
                    {name}
                </h6>
            )}
            {!header && (
                <p onClick={() => handleOpen(bonus, ability)}>
                    {name}
                </p>
            )}
            <span className="tooltiptext">
                <p>Click to roll!</p>
            </span>
        </div>
    );
    
};
