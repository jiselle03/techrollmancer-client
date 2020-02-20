import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { utils } from '../js/utils';
import { BackgroundImage } from '../styles/BackgroundImage';
import { MainStyle } from '../styles/MainStyle';

import { CircularProgress, Divider, Typography } from '@material-ui/core';

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
            image={require(`../../assets/${slug}.png`)}
            size={getSize(slug)}
        >
            <MainStyle>
                <Typography variant="h2">
                    {name.toUpperCase()}
                </Typography>

                <Divider />

                <div className={desc ? null : "hidden"}>
                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        {name} Traits
                    </Typography>
                    <p>{desc}</p>
                </div>

                <div className={asi_desc ? null : "hidden"}>
                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        Ability Score Increase
                    </Typography>
                    <p>{asi_desc}</p>
                </div>
                
                <div className={age ? null : "hidden"}>
                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        Age
                    </Typography>
                    <p>{age}</p>
                </div>

                <div className={alignment ? null : "hidden"}>
                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        Alignment
                    </Typography>
                    <p>{alignment}</p>
                </div>

                <div className={size ? null : "hidden"}>
                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        Size
                    </Typography>
                    <p>{size}</p>
                </div>

                <div className={speed_desc ? null : "hidden"}>
                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        Speed
                    </Typography>
                    <p>{speed_desc}</p>
                </div>

                <div className={languages ? null : "hidden"}>
                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        Languages
                    </Typography>
                    <p>{languages}</p>
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
                    <Typography variant="h4" style={{marginTop: "1em"}}>
                        Subraces
                    </Typography>

                    {subraces.map(subrace => (
                        <div className="subrace">
                            <Typography variant="h5" style={{marginTop: "1em"}}>
                                {subrace.name}
                            </Typography>

                            <Typography variant="h6" style={{marginTop: "1em"}}>
                                Description
                            </Typography>
                            <p>{subrace.desc}</p>

                            <Typography variant="h6" style={{marginTop: "1em"}}>
                                Ability Score Improvement
                            </Typography>
                            <p>{subrace.asi_desc}</p>

                            <p dangerouslySetInnerHTML={{
                                __html: utils.getBlurb(subrace.traits)
                            }}></p>
                        </div>
                    ))}
                </div>
            </MainStyle>
        </BackgroundImage>
    );
};
