import React from 'react';

import { Heading, Text } from '../styles/Typography';

export const TooltipRoll = props => {
    const { modifier, ability, name, header } = props;

    const handleOpen = (modifier, ability) => {
        return props.onHandleOpen(modifier, ability);
    };

    return(
        <div className="tooltip-roll">
            {header && (
                <Heading as="h6" className="header" onClick={() => handleOpen(modifier, ability)}>
                    {name}
                </Heading>
            )}
            {!header && (
                <Text className="ability" onClick={() => handleOpen(modifier, ability)}>
                    {name}
                </Text>
            )}
            <span className="tooltiptext">
                <Text>Click to roll!</Text>
            </span>
        </div>
    );
    
};

export const TooltipEdit = props => {
    const { field } = props;

    return(
        <div className="tooltip-edit">
            <Heading as="h2" className="main-stats">{field}</Heading>
            <span className="tooltiptext">
                <Text>Click to edit!</Text>
            </span>
        </div>
    );
};
