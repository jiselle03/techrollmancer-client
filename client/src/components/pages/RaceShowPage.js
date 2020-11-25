import React, { useState, useEffect } from 'react';

import Utils from '../../js/utils';
import Library from '../../api/library';
import BackgroundImage from '../styles/BackgroundImage';
import MainStyle from '../styles/MainStyle';

import { CircularProgress } from '@material-ui/core';

const RaceShowPage = props => {
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
        Library.oneRace(props.match.params.slug).then(race => {
            setRace(race);
            setIsLoading(false);
        });
    }, [props.match.params.slug]);

    if (isLoading) return (<CircularProgress variant="determinate" />);

    const { slug, name, desc, asi_desc, age, alignment, 
            size, speed_desc, languages, vision, traits,
            subraces } = race;

    const categories = [
        {
            name: `${name} Traits`,
            content: desc
        },
        {
            name: "Ability Score Increase",
            content: asi_desc
        },
        {
            name: "Age",
            content: age
        },
        {
            name: "Alignment",
            content: alignment
        },
        {
            name: "Size",
            content: size
        },
        {
            name: "Speed",
            content: speed_desc
        },
        {
            name: "Languages",
            content: languages
        }
    ];

    const categories2 = [
        {
            name: "Vision",
            content: vision
        },
        {
            name: "Traits",
            content: traits
        }
    ];

    return (
        <BackgroundImage
            image={Utils.getRaceImage(slug)}
            size={getSize(slug)}
            light={false}
        >
            <MainStyle>
                <h1>
                    {name.toUpperCase()}
                </h1>

                {categories.map(category => (
                    <div key={category.name} className={category.content ? null : "hidden"}>
                        <h2>{category.name}</h2>
                        <p>{category.content}</p>
                    </div>
                ))}

                {categories2.map(category => (
                    <div key={category.name} className={category.content ? null : "hidden"}>
                        <p dangerouslySetInnerHTML={{
                            __html: Utils.getBlurb(category.content)
                        }}></p>
                    </div>
                ))}

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
                                __html: Utils.getBlurb(subrace.traits)
                            }}></span>
                        </>
                    ))}
                </div>
            </MainStyle>
        </BackgroundImage>
    );
};

export default RaceShowPage;
