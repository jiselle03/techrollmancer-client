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

    return (
        <BackgroundImage
            image="https://i.ibb.co/cctCwgk/d20.png"
            light
        >
            <Container>
                <Heading>{spell.name.toUpperCase()}</Heading>

                <Heading as="h5">Description</Heading>
                <Text>{(spell.desc)}</Text>
                <Heading as="h5">Higher Level</Heading>
                <Text>{spell.higher_level}</Text>
                <Text><strong>Range:</strong> {spell.range}</Text>
                <Text><strong>Components:</strong> {spell.components}</Text>
                <Text><strong>Material:</strong> {spell.material}</Text>
                <Text><strong>Ritual:</strong> {spell.ritual}</Text>
                <Text><strong>Duration:</strong> {spell.duration}</Text>
                <Text><strong>Concentration:</strong> {spell.concentration}</Text>
                <Text><strong>Casting Time:</strong> {spell.casting_time}</Text>
                <Text><strong>Level:</strong> {spell.level}</Text>
                <Text><strong>School:</strong> {spell.school}</Text>
                <Text><strong>Class:</strong> {spell.dnd_class}</Text>
            </Container>
        </BackgroundImage>
    );
};

export default SpellShowPage;
