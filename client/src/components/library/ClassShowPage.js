import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { utils } from '../js/utils';
import { MainStyle } from '../styles/MainStyle';

import { CircularProgress, Divider } from '@material-ui/core';
import { BackgroundImage } from '../styles/BackgroundImage';

const getClass = slug => {
    return axios.get(`http://localhost:3000/api/v1/libraries/classes/${slug}`);
};

export const ClassShowPage = props => {
    const [oneClass, setOneClass] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getSize = charClass => {
        switch(charClass) {
            case "barbarian":
                return "50vh";
            case "bard":
                return "50vh";
            case "druid":
                return "60vh";
            case "fighter":
                return "80vh";
            case "monk":
                return "60vh";
            case "paladin":
                return "75vh";
            case "ranger":
                return "90vh";
            default:
                return "70vh";
        };
    };

    useEffect(() => {
        getClass(props.match.params.slug).then(oneClass => {
            setOneClass(oneClass.data);
            setIsLoading(false);
        })
    }, [props.match.params.slug]);

    if (isLoading) {
        return (
            <CircularProgress variant="determinate" />
        );
    };

    const { slug, name, hit_dice, hp_at_1st_level, hp_at_higher_levels, 
        prof_armor, prof_weapons, prof_tools, prof_skills, 
        desc, equipment, spellcasting_ability } = oneClass;

    return (
        <BackgroundImage
            image={require(`../../assets/${slug}.png`)}
            size={getSize(slug)}
        >
            <MainStyle>
                <h1>
                    {name.toUpperCase()}
                </h1>

                <p>
                    As a {name}, you gain the following class features:
                </p>
                
                <h2>
                    Hit Points
                </h2>
                <strong>Hit Dice:</strong> {hit_dice} per {name} level<br />
                <strong>HP at 1st Level:</strong> {hp_at_1st_level}<br />
                <strong>HP at Higher Levels:</strong> {hp_at_higher_levels}<br />
                
                <h2>
                    Proficiencies
                </h2>
                <p>
                    <strong>Armor:</strong> {prof_armor}<br />
                    <strong>Weapons:</strong> {prof_weapons}<br />
                    <strong>Tools:</strong> {prof_tools}<br />
                    <strong>Skills:</strong> {prof_skills}
                </p>

                <div className={spellcasting_ability ? null : "hidden"}>
                    <p>
                        <strong>Spellcasting Ability:</strong> {spellcasting_ability}<br />
                    </p>
                </div>
                
                <div dangerouslySetInnerHTML={{
                    __html: utils.getBlurb(desc)
                }}></div>
                
                <h2>
                    Equipment
                </h2>
                <div dangerouslySetInnerHTML={{
                    __html: utils.getBlurb(equipment)
                }}></div>

            </MainStyle>
        </BackgroundImage>
    );
};
