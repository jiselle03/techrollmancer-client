import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { store } from 'react-notifications-component';

import Utils from '../../js/utils';
import Game from '../../api/game';
import { BackgroundImage } from '../styles/Image';
import Container, { Layout } from '../styles/Container';
import { Image } from '../styles/Image';
import { Fade, FadeContent } from '../styles/Fade';
import FlexBox from '../styles/FlexBox';
import { Heading } from '../styles/Typography';

import { Backdrop, Button, Modal } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab'

const WelcomePage = () => {
    const [rollOpen, setRollOpen] = useState(false);
    const [rolls, setRolls] = useState([]);
    const [rollState, setRollState] = useState("regular");
    
    const states = ["disadvantage", "regular", "advantage"];
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

    let chosenRoll;
    const handleRollOpen = sides => {
        setRollOpen(true);
        
        if (sides !== 20) return setRolls([roll(sides)]);
        
        return rollState === "regular" ? setRolls([roll(20)]) : setRolls([roll(20), roll(20)]);
    };
    const handleRollClose = () => {
        setRolls([]);
        setRollOpen(false);
        chosenRoll = null;
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

    const handleRollState = (event, newState) => setRollState(newState);

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
            light
        >
            <Layout>
                <Heading> Welcome to Techrollmancer</Heading>

                <FlexBox justifyContent="space-between">
                    <Heading as="h2">Quick Rolls</Heading>
                    <ToggleButtonGroup
                        value={rollState}
                        exclusive
                        onChange={handleRollState}
                        aria-label="roll state"
                        style={{backgroundColor: "transparent"}}
                    >
                        {states.map(state => (
                            <ToggleButton key={state} value={state} aria-label={state}>
                                {state}
                            </ToggleButton>
                        ))}
                    </ToggleButtonGroup>
                </FlexBox>

                <FlexBox>
                    {dSides.map(side => (
                        <Image 
                            key={side.num} 
                            src={`https://i.ibb.co/${side.img}`} 
                            onClick={() => handleRollOpen(side.num)}
                        />
                    ))}
                </FlexBox>
                <Modal
                    open={rollOpen}
                    onClose={handleRollClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={rollOpen} margin="25vh 0">
                        <FadeContent>
                            <Heading as="h3">You rolled:</Heading>
                            {rolls.length === 1 && (<Heading as="h2">{rolls[0]}</Heading>)}
                            {rolls.length === 2 && rollState == "regular" && (<Heading as="h2">{rolls[0]}</Heading>)}
                            {rolls.length === 2 && rollState === "disadvantage" &&(
                                <Heading as="h2"><span style={{color: "lightgrey"}}>{Math.max(...rolls)}</span> {Math.min(...rolls)}</Heading>
                            )}
                            {rolls.length === 2 && rollState === "advantage" &&(
                                <Heading as="h2"><span style={{color: "lightgrey"}}>{Math.min(...rolls)}</span> {Math.max(...rolls)}</Heading>
                            )}
                            <Button 
                                variant="contained"
                                color="secondary"
                                onClick={handleRollClose}
                                className="button"
                            >
                                EXIT
                            </Button>
                        </FadeContent>
                    </Fade>
                </Modal>

                <Heading as="h2">Get Started</Heading>
                <Heading as="h6">Build a Character</Heading>
                <Link to="/generator">
                    <Button 
                        variant="contained" 
                        color="secondary"
                        className="button"
                    >
                        Guide Me
                    </Button>
                </Link>
            </Layout>
        </BackgroundImage>
    );
};

export default WelcomePage;
