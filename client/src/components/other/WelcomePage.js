import React, { useState, useEffect } from 'react';

import { store } from 'react-notifications-component';

import { utils } from '../js/utils.js';
import { Game } from '../../api/game';
import { BackgroundImage } from '../styles/BackgroundImage';
import { MainStyle } from '../styles/MainStyle';
import { CardStyle } from '../styles/CardStyle';
import { FadeStyle } from '../styles/FadeStyle';
import { ButtonStyle } from '../styles/ButtonStyle';
import { FlexBox } from '../styles/FlexBox';

import { Backdrop, Fade, Grid, Modal } from '@material-ui/core';

export const WelcomePage = () => {
    const [open, setOpen] = useState(false);
    const [rolls, setRolls] = useState([]);
    const [games, setGames] = useState([]);
    
    const { formatDate } = utils;

    let currentRoll = 0;
    const handleOpen = sides => {
        setOpen(true);
        currentRoll = utils.roll(sides);
        setRolls([...rolls, currentRoll]);
    };

    const handleClose = () => {
        setRolls([]);
        setOpen(false);
    };

    let gamesToday = [];
    const checkGames = games => {
        const currentDate = formatDate(new Date());
        gamesToday = games.filter(game => game.date == currentDate);
        return gamesToday;
    };

    useEffect(() => {
        Game.all().then(games => {
            checkGames(games);
        }).then(() => {
            gamesToday.map(game => {
                store.addNotification({
                    title: `You have a session today for ${game.name}`,
                    message: `${game.notes}`,
                    type: "danger",
                    insert: "top",
                    container: "top-right",
                    animationIn: ["animated", "fadeIn"],
                    animationOut: ["animated", "fadeOut"],
                    dismiss: {
                      duration: 5000,
                      onScreen: true,
                      pauseOnHover: true
                    }
                });
            })
        })
        
    }, []);

    return(
        <BackgroundImage
            image={require('../../assets/d20.png')}
            light={true}
        >
            <MainStyle>
                <h1> Welcome to Techrollmancer</h1>

                <h2>Quick Rolls</h2>
                <Grid container>
                    <div onClick={() => handleOpen(4)}>
                        <CardStyle
                            image={require(`../../assets/dice/d4.png`)}
                            imagePosition="50%"
                            height="7em"
                            width="7em"
                            color="#fff"
                            >
                        </CardStyle>
                    </div>

                    <div onClick={() => handleOpen(4)}>
                        <CardStyle
                            image={require(`../../assets/dice/d6.png`)}
                            imagePosition="50%"
                            height="7em"
                            width="7em"
                            color="#fff"
                            onClick={() => {
                                console.log(currentRoll);

                            }}
                        >
                        </CardStyle>
                    </div>

                    <div onClick={() => handleOpen(8)}>
                        <CardStyle
                            image={require(`../../assets/dice/d8.png`)}
                            imagePosition="50%"
                            height="7em"
                            width="7em"
                            color="#fff"
                        >
                        </CardStyle>
                    </div>

                    <div onClick={() => handleOpen(10)}>
                        <CardStyle
                            image={require(`../../assets/dice/d10.png`)}
                            imagePosition="50%"
                            height="7em"
                            width="7em"
                            color="#fff"
                        >
                        </CardStyle>
                    </div>

                    <div onClick={() => handleOpen(12)}>
                        <CardStyle
                            image={require(`../../assets/dice/d12.png`)}
                            imagePosition="50%"
                            height="7em"
                            width="7em"
                            color="#fff"
                        >
                        </CardStyle>
                    </div>

                    <div onClick={() => handleOpen(20)}>
                        <CardStyle
                            image={require(`../../assets/dice/d20.png`)}
                            imagePosition="50%"
                            height="7em"
                            width="7em"
                            color="#fff"
                        >
                        </CardStyle>
                    </div>
                </Grid>

                <Modal
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <FlexBox
                        alignItems="center"
                        justifyContent="center"
                        margin="20vh 0"
                    >
                        <Fade in={open}>
                            <FadeStyle>
                                <h3>You rolled:</h3>
                                <h2>{rolls}</h2>

                                <button 
                                    onClick={handleClose}
                                    style={ButtonStyle.modalButton}
                                >
                                    EXIT
                                </button>
                            </FadeStyle>
                        </Fade>
                    </FlexBox>
                </Modal>

            </MainStyle>
        </BackgroundImage>
    );
    
};
