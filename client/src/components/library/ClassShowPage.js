import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../css/Show.css';
import { CircularProgress } from '@material-ui/core';
import { utils } from '../js/utils';

const getClass = slug => {
    return axios.get(`http://localhost:3000/api/v1/libraries/classes/${slug}`);
};

export const ClassShowPage = props => {
    const [oneClass, setOneClass] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

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
        <div className={`${slug}-background Show-Container`}>
            <main className="Main">
                <h1>{name}</h1>
                <p>As a {name}, you gain the following class features:</p>
                
                <h3>Hit Points</h3>
                <strong>Hit Dice:</strong> {hit_dice} per {name} level<br />
                <strong>HP at 1st Level:</strong> {hp_at_1st_level}<br />
                <strong>HP at Higher Levels:</strong> {hp_at_higher_levels}<br />
                
                <h3>Proficiencies</h3>
                <p><strong>Armor:</strong> {prof_armor}<br />
                <strong>Weapons:</strong> {prof_weapons}<br />
                <strong>Tools:</strong> {prof_tools}<br />
                <strong>Skills:</strong> {prof_skills}</p>

                <div className={spellcasting_ability ? null : "hidden"}>
                    <strong>Spellcasting Ability:</strong> {spellcasting_ability}<br />
                </div>
                
                <div dangerouslySetInnerHTML={{
                    __html: utils.getBlurb(desc)
                }}></div>
                
                <h3>Equipment</h3>
                <div dangerouslySetInnerHTML={{
                    __html: utils.getBlurb(equipment)
                }}></div>

            </main>
        </div>
    );
};
