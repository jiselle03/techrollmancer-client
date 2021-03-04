import React from 'react';

import { Heading, Text } from '../styles/Typography';
import Container from '../styles/Container';

export const TooltipRoll = props => {
    const { modifier, ability, name, header } = props;

    const handleOpen = (modifier, ability) => {
        return props.onHandleOpen(modifier, ability);
    };

    return(
        <Container className="tooltip-roll">
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
        </Container>
    );
    
};

export const TooltipEdit = props => {
    const { field } = props;

    return(
        <Container className="tooltip-edit">
            <Heading as="h2" className="main-stats">{field}</Heading>
            <span className="tooltiptext">
                <Text>Click to edit!</Text>
            </span>
        </Container>
    );
};
