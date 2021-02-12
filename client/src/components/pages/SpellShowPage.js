import React, { useState, useEffect } from 'react';

import Library from '../../api/library';
import { BackgroundImage } from '../styles/Image';
import Container from '../styles/Container';
import { Heading, Text } from '../styles/Typography';

import { CircularProgress } from '@material-ui/core';

const SpellShowPage = props => {
    const [spell, setSpell] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        Library.oneSpell(props.match.params.slug).then(spell => { 
            setSpell(spell);
            setIsLoading(false);
          });
    }, [props.match.params.slug]);
    
    if (isLoading) return (<CircularProgress variant="determinate" />);

    const { range, components, material, ritual, duration, concentration, casting_time, level, school, dnd_class } = spell;
    
    const info = [
        {
            name: "Range",
            content: range
        },
        {
            name: "Components",
            content: spell.components ? components : "none"
        },
        {
            name: "Material",
            content: spell.material ? material : "none"
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
            name: "Level", 
            content: level
        },
        {
            name: "School",
            content: school
        },
        {
            name: "Class",
            content: dnd_class
        }
    ];

    return (
        <BackgroundImage
            image="https://i.ibb.co/cctCwgk/d20.png"
            light
        >
            <Container as="main" page>
                <Heading>{spell.name}</Heading>

                <Heading as="h5">Description</Heading>
                <Text>{(spell.desc)}</Text>
                <Heading as="h5">Higher Level</Heading>
                <Text>{spell.higher_level}</Text>
                {info.map(line => (
                    <Text key={line.name}><strong>{line.name}:</strong> {line.content}{console.log(line.content)}</Text>
                ))}
            </Container>
        </BackgroundImage>
    );
};

export default SpellShowPage;
