import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { utils } from '../js/utils';
import { MainStyle } from '../styles/MainStyle';

import { CircularProgress, Divider, Typography } from '@material-ui/core';

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
        <div className={`${race.slug}-background`}>
            <MainStyle>
                <Typography variant="h2">
                    {race.name.toUpperCase()}
                </Typography>

                <Divider />

                <div className={race.desc ? null : "hidden"}>
                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        {race.name} Traits
                    </Typography>
                    <p>{race.desc}</p>
                </div>

                <div className={race.asi_desc ? null : "hidden"}>
                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        Ability Score Increase
                    </Typography>
                    <p>{race.asi_desc}</p>
                </div>
                
                <div className={race.age ? null : "hidden"}>
                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        Age
                    </Typography>
                    <p>{race.age}</p>
                </div>

                <div className={race.alignment ? null : "hidden"}>
                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        Alignment
                    </Typography>
                    <p>{race.alignment}</p>
                </div>

                <div className={race.size ? null : "hidden"}>
                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        Size
                    </Typography>
                    <p>{race.size}</p>
                </div>

                <div className={race.speed_desc ? null : "hidden"}>
                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        Speed
                    </Typography>
                    <p>{race.speed_desc}</p>
                </div>

                <div className={race.languages ? null : "hidden"}>
                    <Typography variant="h5" style={{marginTop: "1em"}}>
                        Languages
                    </Typography>
                    <p>{race.languages}</p>
                </div>

                <div className={race.vision ? null : "hidden"}>
                    <p dangerouslySetInnerHTML={{
                        __html: utils.getBlurb(race.vision)
                    }}></p>
                </div>

                <div className={race.traits ? null : "hidden"}>
                    <p dangerouslySetInnerHTML={{
                        __html: utils.getBlurb(race.traits)
                    }}></p>
                </div>
                
                <div className={race.subraces ? null : "hidden"}>
                    <Typography variant="h4" style={{marginTop: "1em"}}>
                        Subraces
                    </Typography>

                    {race.subraces.map(subrace => (
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
        </div>
    );
};
