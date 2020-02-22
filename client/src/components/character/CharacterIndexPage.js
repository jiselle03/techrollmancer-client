import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Character } from '../../api/character';
import { CharacterNew } from './CharacterNew';
import { FadeStyle, Fade } from '../styles/FadeStyle';
import { BackgroundImage } from '../styles/BackgroundImage';
import { MainStyle } from '../styles/MainStyle';
import { Grid } from '../styles/Grid';
import { CardStyle, CardContentStyle } from '../styles/CardStyle';

import { Backdrop, Card, CardContent, CircularProgress, Divider, Fab, Modal } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';

Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
};

export const CharacterIndexPage = () => {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [openNew, setOpenNew] = useState(false);
    
    const handleOpenNew = () => {
        setOpenNew(true);
    };
    const handleCloseNew = () => {
        setOpenNew(false);
    };

    const addButton = () => {
        return(
            <>
                <Fab 
                    color="secondary" 
                    size="large"
                    aria-label="add"
                    className="add-button"
                    onClick={handleOpenNew}
                    style={{
                        position: "fixed",
                        bottom: "40px",
                        right: "40px",
                        width: "5em",
                        height: "5em"
                    }}
                >
                    <AddIcon 
                        style={{
                            color: "#fff"
                        }}
                    />
                </Fab>
    
                <Modal
                    className="new-character modal"
                    open={openNew}
                    onClose={handleCloseNew}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={openNew}>
                    <div className="new-character fade">
                        <CharacterNew />
    
                        <button 
                            onClick={handleCloseNew}
                            className="cancel"
                        >
                            CANCEL
                        </button>
                    </div>
                    </Fade>
                </Modal>
            </>
        );
    };    

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

                <Divider />

                {!characters && (
                    <>
                        <p>
                            You have not created any characters.
                        </p>
                        {addButton()}
                    </>
                )}

                {characters && (
                    <>
                        <br />
                        <Grid>
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

                        {addButton()}
                    </>
                )}
            </MainStyle>
        </BackgroundImage>
    );
};
