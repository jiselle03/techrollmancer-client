import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { utils } from '../js/utils';
import { BackgroundImage } from '../styles/BackgroundImage';
import { MainStyle } from '../styles/MainStyle';

import { CircularProgress } from '@material-ui/core';

const getRace = slug => {
    return axios.get(`http://localhost:3000/api/v1/libraries/races/${slug}`);
};

export const RaceShowPage = props => {
    const [race, setRace] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getSize = race => {
        switch(race) {
            case "gnome":
                return "85vh";
            case "half-elf":
                return "60vh";
            case "half-orc":
                return "90vh";
            case "halfling":
                return "80vh";
            case "human":
                return "60vh";
            case "tiefling":
                return "80vh";
            default:
                return "70vh";
        };
    };

    useEffect(() => {
        getRace(props.match.params.slug).then(race => {
            setRace(race.data);
            setIsLoading(false);
        })
    }, [props.match.params.slug]);

    if (isLoading) {
        return (
            <CircularProgress variant="determinate" />
        );
    };

    const { slug, name, desc, asi_desc, age, alignment, 
            size, speed_desc, languages, vision, traits,
            subraces } = race;

    return (
        <BackgroundImage
            image={require(`../../assets/races/${slug}.png`)}
            size={getSize(slug)}
            light={false}
        >
            <MainStyle>
                <h1>
                    {name.toUpperCase()}
                </h1>

                <div className={desc ? null : "hidden"}>
                    <h2>
                        {name} Traits
                    </h2>
                    <p>
                        {desc}
                    </p>
                </div>

                <div className={asi_desc ? null : "hidden"}>
                    <h2>
                        Ability Score Increase
                    </h2>
                    <p>
                        {asi_desc}
                    </p>
                </div>
                
                <div className={age ? null : "hidden"}>
                    <h2>
                        Age
                    </h2>
                    <p>
                        {age}
                    </p>
                </div>

                <div className={alignment ? null : "hidden"}>
                    <h2>
                        Alignment
                    </h2>
                    <p>
                        {alignment}
                    </p>
                </div>

                <div className={size ? null : "hidden"}>
                    <h2>
                        Size
                    </h2>
                    <p>
                        {size}
                    </p>
                </div>

                <div className={speed_desc ? null : "hidden"}>
                    <h2>
                        Speed
                    </h2>
                    <p>
                        {speed_desc}
                    </p>
                </div>

                <div className={languages ? null : "hidden"}>
                    <h2>
                        Languages
                    </h2>
                    <p>
                        {languages}
                    </p>
                </div>

                <div className={vision ? null : "hidden"}>
                    <p dangerouslySetInnerHTML={{
                        __html: utils.getBlurb(vision)
                    }}></p>
                </div>

                <div className={traits ? null : "hidden"}>
                    <p dangerouslySetInnerHTML={{
                        __html: utils.getBlurb(traits)
                    }}></p>
                </div>
                
                <div className={subraces ? null : "hidden"}>
                    <h3>
                        Subraces
                    </h3>

                    {subraces.map(subrace => (
                        <>
                            <h4>
                                {subrace.name}
                            </h4>

                            <h5>
                                Description
                            </h5>
                            <p>
                                {subrace.desc}
                            </p>

                            <h5>
                                Ability Score Improvement
                            </h5>
                            <p>
                                {subrace.asi_desc}
                            </p>

                            <span dangerouslySetInnerHTML={{
                                __html: utils.getBlurb(subrace.traits)
                            }}></span>
                        </>
                    ))}
                </div>
            </MainStyle>
        </BackgroundImage>
    );
};
