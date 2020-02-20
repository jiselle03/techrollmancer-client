import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../css/Index.css';
import { Character } from '../../api/character';
import { CharacterNew } from './CharacterNew';
import { Fade } from '../Fade';
import { BackgroundImage } from '../styles/BackgroundImage';
import { CardStyle, CardContentStyle, CardTextStyle } from '../styles/CardStyle';
import Typography from '@material-ui/core/Typography';
import { CircularProgress } from '@material-ui/core';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import PropTypes from 'prop-types';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';

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
                    aria-label="add"
                    className="add-button"
                    onClick={handleOpenNew}
                >
                    <AddIcon />
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
            {!characters && (
                <main className="Main">
                    <h1>Characters</h1>
                    <Divider /><br />

                    <h4>You have not created any characters.</h4>
                    {addButton()}
                </main>
            )}

            {characters && (
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
                </main>
            )}
        </BackgroundImage>
    );
};
