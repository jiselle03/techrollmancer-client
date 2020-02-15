import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../css/Show.css';
import { CircularProgress } from '@material-ui/core';
import { utils } from '../js/utils';

const getRace = slug => {
    return axios.get(`http://localhost:3000/api/v1/libraries/races/${slug}`);
};

export const RaceShowPage = props => {
    const [race, setRace] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

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

    return (
        <main className="Main">
            <h2>{race.name}</h2>

            <div className={race.desc ? null : "hidden"}>
                <h3>{race.name} Traits</h3>
                <p>{race.desc}</p>
            </div>

            <div className={race.asi_desc ? null : "hidden"}>
                <h3>Ability Score Increase</h3>
                <p>{race.asi_desc}</p>
            </div>
            
            <div className={race.age ? null : "hidden"}>
                <h3>Age</h3>
                <p>{race.age}</p>
            </div>

            <div className={race.alignment ? null : "hidden"}>
                <h3>Alignment</h3>
                <p>{race.alignment}</p>
            </div>

            <div className={race.size ? null : "hidden"}>
                <h3>Size</h3>
                <p>{race.size}</p>
            </div>

            <div className={race.speed_desc ? null : "hidden"}>
                <h3>Speed</h3>
                <p>{race.speed_desc}</p>
            </div>

            <div className={race.languages ? null : "hidden"}>
                <h3>Languages</h3>
                <p>{race.languages}</p>
            </div>

            <div className={race.vision ? "" : "hidden"}>
                <p dangerouslySetInnerHTML={{
                    __html: utils.getBlurb(race.vision)
                }}></p>
            </div>

            <div className={race.traits ? "" : "hidden"}>
                <p dangerouslySetInnerHTML={{
                    __html: utils.getBlurb(race.traits)
                }}></p>
            </div>
            
            <div className={race.subraces ? "" : "hidden"}>
                <h2>Subraces</h2>

                {race.subraces.map(subrace => (
                    <div className="subrace">
                        <h3>{subrace.name}</h3>

                        <h3>Description</h3>
                        <p>{subrace.desc}</p>

                        <h3>Ability Score Improvement</h3>
                        <p>{subrace.asi_desc}</p>

                        <p dangerouslySetInnerHTML={{
                            __html: utils.getBlurb(subrace.traits)
                        }}></p>
                    </div>
                ))}
            </div>
        </main>
    );
};
