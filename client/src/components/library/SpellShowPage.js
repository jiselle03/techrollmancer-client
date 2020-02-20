import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../css/Show.css';
import { BackgroundImage } from '../styles/BackgroundImage';
import { MainStyle } from '../styles/MainStyle';

import { CircularProgress, Divider, Typography } from '@material-ui/core';

const getSpell = slug => {
    return axios.get(`http://localhost:3000/api/v1/libraries/spells/${slug}`);
};

export const SpellShowPage = props => {
    const [spell, setSpell] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getSpell(props.match.params.slug).then(spell => { 
            console.log(spell.data)
            setSpell(spell.data);
            setIsLoading(false);
          });
    }, [props.match.params.slug]);

    if (isLoading) {
        return (
            <CircularProgress variant="determinate" />
        );
    };

    return (
        <BackgroundImage
            image={require('../../assets/d20.png')}
        >
            <MainStyle>
                <h1>{spell.name.toUpperCase()}</h1>
                <Divider /><br />

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
            </MainStyle>
        </BackgroundImage>
    );
};
