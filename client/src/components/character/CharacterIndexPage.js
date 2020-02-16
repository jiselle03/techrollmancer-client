import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../css/Index.css';
import { Character } from '../../api/character';
import { CircularProgress } from "@material-ui/core";
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

export const CharacterIndexPage = () => {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        Character.all().then(characters => { 
            if (characters.data.length > 0) {
                setCharacters(characters.data);
                setIsLoading(false);
            } else {
                setCharacters([]);
                setIsLoading(false);
            }
            
          });
    }, []);

    if (isLoading) {
        return(
            <CircularProgress variant="determinate" />
        );
    };

    return (
        <div className="character-index-background">
            <main className="Main">
                <h1>Characters</h1>
                    <div className={characters.length > 0 ? null : "hidden"}>
                        <Link 
                            to={"/characters/new"} 
                            className="link" 
                        >
                            <h1>Create your first character!</h1>
                        </Link>
                    </div>

                    <div id="grid-container">
                    {characters.map(character => (
                        <div key={character.id}>
                            <Link 
                                to={`/characters/${character.id}`} 
                                className="link" 
                            >
                                <Card className={character.name}>
                                    <CardMedia
                                        image={character.photo_url}
                                        title={character.name}
                                    />
                                    <CardContent className="content">
                                        <h5 className="race-name">{character.name}</h5>
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
