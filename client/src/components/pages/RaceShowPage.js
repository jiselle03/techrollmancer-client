import React, { useState, useEffect } from 'react';

import Utils from '../../js/utils';
import Library from '../../api/library';
import { BackgroundImage } from '../styles/Image';
import Container, { Layout } from '../styles/Container';
import { Heading, Text } from '../styles/Typography';

import { CircularProgress } from '@material-ui/core';

const RaceShowPage = props => {
    const [race, setRace] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const { getRaceSize, getRaceImage, getBlurb } = Utils;

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
            image={getRaceImage(slug)}
            size={getRaceSize(slug)}
        >
            <Layout>
                <Heading>{name}</Heading>

                {categories.map(category => (
                    <Container key={category.name} className={category.content ? null : "hidden"}>
                        <Heading as="h2">{category.name}</Heading>
                        <Text>{category.content}</Text>
                    </Container>
                ))}

                {categories2.map(category => (
                    <Container key={category.name} className={category.content ? null : "hidden"}>
                        <Text dangerouslySetInnerHTML={{
                            __html: getBlurb(category.content)
                        }}></Text>
                    </Container>
                ))}

                <Container className={subraces.length > 0 ? null : "hidden"}>
                    <Heading>Subraces</Heading>

                    {subraces.map(subrace => (
                        <>
                            <Heading as="h4">
                                {subrace.name}
                            </Heading>

                            <Heading as="h5">
                                Description
                            </Heading>
                            <Text>
                                {subrace.desc}
                            </Text>

                            <Heading as="h5">
                                Ability Score Improvement
                            </Heading>
                            <Text>
                                {subrace.asi_desc}
                            </Text>

                            <span dangerouslySetInnerHTML={{
                                __html: getBlurb(subrace.traits)
                            }}></span>
                        </>
                    ))}
                </Container>
            </Layout>
        </BackgroundImage>
    );
};

export default RaceShowPage;
