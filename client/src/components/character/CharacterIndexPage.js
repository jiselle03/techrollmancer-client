import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Character } from '../../api/character';
import { CharacterNew } from './CharacterNew';
import { Fade } from '../Fade';
import { MainStyle } from '../styles/MainStyle';
import { BackgroundImage } from '../styles/BackgroundImage';
import { CardStyle, CardContentStyle, CardTextStyle } from '../styles/CardStyle';

import Typography from '@material-ui/core/Typography';
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
                <Typography variant="h2">
                    CHARACTERS
                </Typography>

                <Divider />

                {!characters && (
                    <>
                        <Typography variant="h4" style={{marginTop: "1em"}}>
                            You have not created any characters.
                        </Typography>
                        {addButton()}
                    </>
                )}

                {characters && (
                    <>
                        <div id="grid-container">
                        <br />
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
                                        <Card className={`${character.name} card`}>
                                            <CardContentStyle>
                                                <CardContent className="content">
                                                    <CardTextStyle>
                                                        <Typography variant="h5" align="right">
                                                            {character.name}
                                                        </Typography>
                                                        <Typography variant="subtitle1" align="right">
                                                            {character.gender} {character.race}
                                                        </Typography>
                                                    </CardTextStyle>
                                                </CardContent>
                                            </CardContentStyle>
                                        </Card>
                                    </CardStyle>
                                </Link>
                            </div>
                        ))}
                        </div>

                        {addButton()}
                    </>
                )}
            </MainStyle>
        </BackgroundImage>
    );
};
