import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../css/Index.css';
import { Character } from '../../api/character';
import { CircularProgress } from '@material-ui/core';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Divider from '@material-ui/core/Divider';

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

    if (!characters) {
        return(
            <div className="character-index-background">
                <main className="Main">
                    <h1>Characters</h1>
                    <Divider /><br />

                    <Link 
                        to={"/characters/new"} 
                        className="link" 
                    >
                        <h4>You have not created any characters.</h4>
                        <h4>Create your first character!</h4>
                    </Link>
                    <Link 
                    exact to={`/characters/new`} 
                    className="add-link"
                >
                    <Fab 
                        color="secondary" 
                        aria-label="add"
                        className="add-button"
                    >
                        <AddIcon />
                    </Fab>
                </Link>
                </main>
            </div>
        );
    };

    return (
        <div className="character index-background">
            <main className="Main">
                <h1>CHARACTERS</h1>
                <Divider /><br />

                <div id="grid-container">
                {characters.map(character => (
                    <div key={character.id}>
                        <Link 
                            to={`/characters/${character.id}`} 
                            className="link" 
                        >
                            <Card className={`${character.name} card`}>
                                <CardMedia
                                    title={character.name}
                                >
                                    <img src={character.photo_url} alternate={character.name} />
                                </CardMedia>
                                <CardContent className="content">
                                    <h5 className="character name">{character.name}</h5>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                ))}
                </div>

                <Link 
                    exact to={`/characters/new`} 
                    className="add-link"
                >
                    <Fab 
                        color="secondary" 
                        aria-label="add"
                        className="add-button"
                    >
                        <AddIcon />
                    </Fab>
                </Link>
            </main>
        </div>
    );
};
