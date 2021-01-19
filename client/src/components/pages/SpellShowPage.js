import React, { useState, useEffect } from 'react';

import Library from '../../api/library';
import { BackgroundImage } from '../styles/Image';
import Container from '../styles/Container';

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
            light={true}
        >
            <Container>
                <h1>
                    {spell.name.toUpperCase()}
                </h1>

                <h5>Description</h5>
                <p>{(spell.desc)}</p>
                <h5>Higher Level</h5>
                <p>{spell.higher_level}</p>
                <p><strong>Range:</strong> {spell.range}</p>
                <p><strong>Components:</strong> {spell.components}</p>
                <p><strong>Material:</strong> {spell.material}</p>
                <p><strong>Ritual:</strong> {spell.ritual}</p>
                <p><strong>Duration:</strong> {spell.duration}</p>
                <p><strong>Concentration:</strong> {spell.concentration}</p>
                <p><strong>Casting Time:</strong> {spell.casting_time}</p>
                <p><strong>Level:</strong> {spell.level}</p>
                <p><strong>School:</strong> {spell.school}</p>
                <p><strong>Class:</strong> {spell.dnd_class}</p>
            </Container>
        </BackgroundImage>
    );
};

export default SpellShowPage;
