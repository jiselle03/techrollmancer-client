import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { store } from 'react-notifications-component';

import Utils from '../js/utils';
import Game from '../../api/game';
import BackgroundImage from '../styles/BackgroundImage';
import MainStyle from '../styles/MainStyle';
import { CardStyle } from '../styles/CardStyle';
import { FadeStyle } from '../styles/FadeStyle';
import FlexBox from '../styles/FlexBox';

import { Backdrop, Button, Fade, Grid, Modal } from '@material-ui/core';

const WelcomePage = () => {
    const [rollOpen, setRollOpen] = useState(false);
    const [currentRoll, setCurrentRoll] = useState(null);
    
    const dSides = [
        {
            num: 4, 
            img: "sKz0qKn/d4.png"
        }, 
        {
            num: 6, 
            img: "L6tzd3y/d6.png"
        }, 
        {
            num: 8,
            img: "hsWLqpV/d8.png"
        }, {
            num: 10,
            img: "dMJgGTX/d10.png"
        }, 
        {
            num: 12,
            img: "vB5P3Tt/d12.png"
        }, 
        {
            num: 20,
            img: "qJs7Mcf/d20.png"
        }
    ];
    
    const { formatDate, roll } = Utils;

    const handleRollOpen = sides => {
        setRollOpen(true);
        setCurrentRoll(roll(sides));
    };
    const handleRollClose = () => {
        setCurrentRoll(null);
        setRollOpen(false);
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
                    {dSides.map(side => (
                        <div key={side} onClick={() => handleRollOpen(side.num)}>
                            <CardStyle
                                image={`https://i.ibb.co/${side.img}`}
                                dice
                                >
                            </CardStyle>
                        </div>
                    ))}
                    
                </Grid>

                <Modal
                    open={rollOpen}
                    onClose={handleRollClose}
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
                        <Fade in={rollOpen}>
                            <FadeStyle>
                                <h3>You rolled:</h3>
                                <h2>{currentRoll}</h2>
                                <Button 
                                    variant="contained"
                                    color="secondary"
                                    onClick={handleRollClose}
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

            </MainStyle>
        </BackgroundImage>
    );
    
};

export default WelcomePage;
