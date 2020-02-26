import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Character } from '../../api/character';
import { CharacterNew } from './CharacterNew';
import { BackgroundImage } from '../styles/BackgroundImage';
import { MainStyle } from '../styles/MainStyle';
import { CardStyle, CardContentStyle } from '../styles/CardStyle';

import { Card, CardContent, CircularProgress, Grid } from '@material-ui/core';

export const CharacterIndexPage = () => {
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
            image={require('../../assets/d20.png')}  
        >
            <MainStyle>
                <h1 style={{marginLeft: "0.2em"}}>
                    CHARACTERS
                </h1>

                {!characters && (
                    <>
                        <p>
                            You have not created any characters.
                        </p>
                        <CharacterNew />
                    </>
                )}

                {characters && (
                    <>
                        <br />
                        <Grid container>
                        {characters.map(character => (
                            <div key={character.id}>
                                <Link 
                                    to={`/characters/${character.id}`} 
                                    className="link" 
                                >
                                    <CardStyle
                                        image={character.photo_url}
                                        imageSize="100%"
                                    >
                                        <Card>
                                            <CardContent style={CardContentStyle.content}>
                                                <h6 className="card-text">
                                                    {character.name}
                                                </h6>
                                                <p className="card-text">
                                                    {character.gender} {character.race}
                                                </p>
                                            </CardContent>
                                        </Card>
                                    </CardStyle>
                                </Link>
                            </div>
                        ))}
                        </Grid>

                        <CharacterNew />
                    </>
                )}
            </MainStyle>
        </BackgroundImage>
    );
};
