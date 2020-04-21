import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { store } from 'react-notifications-component';

import Utils from '../js/utils';
import Game from '../../api/game';
import CharacterNew from '../character/CharacterNew';
import BackgroundImage from '../styles/BackgroundImage';
import MainStyle from '../styles/MainStyle';
import { CardStyle } from '../styles/CardStyle';
import { FadeStyle } from '../styles/FadeStyle';
import FlexBox from '../styles/FlexBox';

import { Backdrop, Button, Fade, Grid, Modal } from '@material-ui/core';

const WelcomePage = () => {
    const [open, setOpen] = useState(false);
    const [rolls, setRolls] = useState([]);
    
    const { formatDate, roll } = Utils;

    let currentRoll = 0;
    const handleOpen = sides => {
        setOpen(true);
        currentRoll = roll(sides);
        setRolls([...rolls, currentRoll]);
    };

    const handleClose = () => {
        setRolls([]);
        setOpen(false);
    };

    const gamesToday = [];
    const currentDate = formatDate(new Date());
    const checkGames = games => {
        games.map(game => {
            if (game.date == currentDate) {
                gamesToday.push(game);
            };
        });
    };

    const handleNotifications = () => {
        return gamesToday.map(game => {
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
                },
            });
        });
    };

    useEffect(() => {
        Game.all().then(games => {
            if (Array.isArray(games)) checkGames(games);
        }).then(() => {
            handleNotifications();
        });
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
                                <Button 
                                    variant="contained"
                                    color="secondary"
                                    onClick={handleClose}
                                    className="button"
                                >
                                    EXIT
                                </Button>
                            </FadeStyle>
                        </Fade>
                    </FlexBox>
                </Modal>

                <h2>Get Started</h2>
                <h6>Build a Character</h6>
                <Link to="/generator">
                <Button 
                    variant="contained" 
                    color="secondary"
                    className="button"
                >
                    Guide Me
                </Button>
                </Link>
                
                <CharacterNew welcome />

            </MainStyle>
        </BackgroundImage>
    );
    
};

export default WelcomePage;
