import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Character from '../../api/character';
import CharacterNew from '../character/CharacterNew';
import { BackgroundImage } from '../styles/Image';
import { Layout } from '../styles/Container';
import { Card, CardContent } from '../styles/Card';
import { Heading, Text } from '../styles/Typography';

import { CircularProgress, Grid } from '@material-ui/core';

const CharacterIndexPage = props => {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        Character.all().then(characters => { 
            setCharacters(characters);
            setIsLoading(false);
          });
    }, []);

    if (isLoading) {
        return(
            <CircularProgress variant="determinate" />
        );
    };

    return (
        <BackgroundImage 
            image="https://i.ibb.co/cctCwgk/d20.png" 
        >
            <Layout>
                <Heading>Characters</Heading>

                {characters.length === 0 && (
                    <Heading as="h5">
                        You have not created any characters.
                    </Heading>
                )}

                {characters && (
                    <>
                        <Grid container>
                        {characters.map(character => (
                            <Link 
                                key={character.id}
                                to={`/characters/${character.id}`} 
                                className="link" 
                            >
                                <Card
                                    image={character.photo_url}
                                    imageSize="cover"
                                >
                                    <CardContent>
                                        <Heading as="h6" alt>{character.name}</Heading>
                                        <Text alt>
                                            {character.gender} {character.race}
                                        </Text>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                        </Grid>
                    </>
                )}

                <CharacterNew currentUser={props.currentUser} type="character" {...props} />

            </Layout>
        </BackgroundImage>
    );
};

export default CharacterIndexPage;
