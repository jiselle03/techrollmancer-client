import React from 'react';

import { Heading, Text } from '../styles/Typography';
import Container from '../styles/Container';

import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

const SpellDetails = props => {
    const { name, desc, higher_level, range, components, material,
            ritual, duration, concentration, casting_time, school } = props.spell;

    const details = [
        {
            name: "Description",
            content: desc
        },
        {
            name: "Higher Level",
            content: higher_level
        },
        {
            name: "Range",
            content: range
        },
        {
            name: "Components",
            content: components
        },
        {
            name: "Material",
            content: material
        },
        {
            name: "Ritual",
            content: ritual
        }, 
        {
            name: "Duration",
            content: duration
        }, 
        {
            name: "Concentration",
            content: concentration
        }, 
        {
            name: "Casting Time",
            content: casting_time
        }, 
        {
            name: "School",
            content: school
        }
    ];

    return(
        <ExpansionPanel>
            <ExpansionPanelSummary
                expandIcon={<ExpandMore />}
                aria-controls="spell-content"
                id="spell-header"
            >
                <Heading as="h5">{name}</Heading>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails style={{display: "block"}}>
                {details.map(category => (
                    <Container key={category.name} className={category.content ? null : "hidden"}>
                        <Heading as="h6">{category.name}</Heading>
                        <Text>{category.content}</Text>
                    </Container>
                ))}
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};

export default SpellDetails;
