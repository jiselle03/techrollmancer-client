import React, { useState } from 'react';

import Utils from '../js/utils';
import { RandomCharacter } from '../js/generator.js';
import { PointBuyCalculator } from './PointBuyCalculator';
import BackgroundImage from '../styles/BackgroundImage';
import MainStyle from '../styles/MainStyle';
import FlexBox from '../styles/FlexBox';
import { FadeStyle, Fade } from '../styles/FadeStyle';
import { Center } from '../styles/Center';

import { Backdrop, Button, Card, Divider, Modal, useMediaQuery } from '@material-ui/core';
import PropTypes from 'prop-types';
  
Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
};

const GeneratorPage = () => {
    const [openQR, setOpenQR] = useState(false);
    const [character, setCharacter] = useState({});

    const laptop = useMediaQuery('(min-width:1280px)');

    const handleOpenQR = () => {
        setOpenQR(true);
    };
    const handleCloseQR = () => {
        setCharacter({});
        setOpenQR(false);
    };
    const generate = () => {
        setCharacter(new RandomCharacter());
    };
    const quickRoll = () => {
        handleOpenQR();
        generate();
    };

    const [openD6, setOpenD6] = useState(false);
    const [rolls, setRolls] = useState([]);

    const handleOpenD6 = () => {
        setOpenD6(true);
    };
    const handleCloseD6 = () => {
        setOpenD6(false);
    };
    
    let currentRoll = 0;
    const rollD6 = () => { 
        if (rolls.length < 4) {
            currentRoll = Utils.roll(6);
            setRolls([...rolls, currentRoll]);
        } else {
            return;
        };
    };
    const refreshD6 = () => {
        setRolls([]);
    };
    const d6Roll = () => {
        handleOpenD6();
        rollD6();
    };

    let minCount = 0;
    const checkMin = (rolls, roll) => {
        if (rolls[3] && Math.min(...rolls) === rolls[roll] && minCount < 2) {
            minCount++
            return true;
        } else {
            return false;
        };
    };

    return (
        <BackgroundImage 
            image={require('../../assets/d20.png')}
            light={true}
        >
            <MainStyle>
                <h1>
                    CHARACTER GENERATOR
                </h1>

                <p>
                    Much of what your character does in the game depends on their scores for the following six abilities: 
                    <strong> Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma.</strong>
                </p>
                
                <p>
                    You can create a character in 3 ways:
                </p>
                <Center>
                    <Card 
                        style={{
                            width: laptop ? "60vw" : "70vw",
                            padding: "2em",
                            margin: "1em 0",
                        }}
                    >
                        <h2>
                            Standard Array
                        </h2>
                        <p>
                            Assign each of the following numbers to the one of the six abilities: 
                            <strong> 15, 14, 13, 12, 10, 8</strong>.
                        </p>
                        <p>
                            Then make any changes to your ability scores as a result of your race choice.
                        </p>
                    </Card>

                    <Card 
                        style={{
                            width: laptop ? "60vw" : "70vw",
                            padding: "2em",
                            margin: "1em 0",
                        }}
                    >
                        <h2>
                            Point Buy
                        </h2>
                        <p>
                            You have 27 points to spend on your character's ability scores. 
                            Each score from 9 to 13 costs 1 extra point, and 14 and 15 both cost 2 extra points. 
                            15 is the highest ability score you can end up with before applying racial increases. 
                            You cannot have a score lower than 8.
                        </p>

                        <PointBuyCalculator />

                    </Card>

                    <Card 
                        style={{
                            width: laptop ? "60vw" : "70vw",
                            padding: "2em",
                            margin: "1em 0",
                        }}
                    >
                        <h2>
                            Rolling Stats
                        </h2>
                        <p>
                            Roll <strong>4d6</strong> and record the cumulative total of the highest three results six times.
                            Assign each score to one of the six ability scores, then make any changes to your ability scores as a result of your race choice.
                        </p>

                    <FlexBox
                        justifyContent="center"
                    >
                        <Button 
                            variant="contained"
                            color="secondary"
                            onClick={quickRoll}
                            className="button"
                        >
                            QUICK ROLL
                        </Button>

                        <Button 
                            variant="contained"
                            color="secondary"
                            onClick={d6Roll}
                            className="button"
                        >
                            ROLL D6
                        </Button>
                    </FlexBox>

                    
                    <Modal
                        open={openQR}
                        onClose={handleCloseQR}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <FlexBox
                            alignItems="center"
                            justifyContent="center"
                            margin="10vh 0"
                        >
                            <Fade in={openQR}>
                                <FadeStyle>
                                    <h3>CHARACTER STATS</h3>

                                    <div>
                                    <span className="roll">
                                        <h5>Race: </h5> 
                                    </span>
                                    <span className="roll">
                                        <h4>{character._charRace}</h4>
                                    </span>
                                    </div>
                                    <div>
                                    <span className="roll">
                                        <h5>Class: </h5>
                                    </span>
                                    <span className="roll">
                                        <h4>{character._charClass}</h4>
                                    </span>
                                    </div>
                                    
                                    <h3>
                                        ABILITY SCORES
                                    </h3>
                                    
                                    <h4>
                                        {character._roll1}, {character._roll2}, {character._roll3}, {character._roll4}, {character._roll5}, {character._roll6}
                                    </h4>

                                    <Button 
                                        variant="contained"
                                        color="secondary"
                                        onClick={handleCloseQR}
                                        className="button"
                                    >
                                        EXIT
                                    </Button>
                                </FadeStyle>
                            </Fade>
                        </FlexBox>
                    </Modal>

                        <Modal
                            open={openD6}
                            onClose={handleCloseD6}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500,
                            }}
                            
                        >
                            <FlexBox
                                justifyContent="center"
                                alignItems="center"
                                margin="8vh 0"
                            >
                                <Fade in={openD6}>
                                    <FadeStyle>
                                        <h3>
                                            ROLLS
                                        </h3>
                                        
                                        <div>
                                        <span className="roll">
                                            <h5 className={checkMin(rolls, 0) ? "min" : null}>1ST: </h5>
                                        </span>
                                        <span className="roll">
                                            <h4 className={checkMin(rolls, 0) ? "min" : null}>{rolls[0] ? rolls[0] : " "}</h4>
                                        </span>
                                        </div>

                                        <div>
                                        <span className="roll">
                                            <h5 className={checkMin(rolls, 1) ? "min" : null}>2ND: </h5>
                                        </span>
                                        <span className="roll">
                                            <h4 className={checkMin(rolls, 1) ? "min" : null}>{rolls[1] ? rolls[1] : " "}</h4>
                                        </span>
                                        </div>

                                        <div>
                                        <span className="roll">
                                            <h5 className={checkMin(rolls, 2) ? "min" : null}>3RD: </h5>
                                        </span>
                                        <span className="roll">
                                            <h4 className={checkMin(rolls, 2) ? "min" : null}>{rolls[2] ? rolls[2] : " "}</h4>
                                        </span>
                                        </div>

                                        <div>
                                        <span className="roll">
                                            <h5 className={checkMin(rolls, 3) ? "min" : null}>4TH: </h5>
                                        </span>
                                        <span className="roll">
                                            <h4 className={checkMin(rolls, 3) ? "min" : null}>{rolls[3]}</h4>
                                        </span>
                                        </div>

                                        <Divider />

                                        <div>
                                        <span className="roll">
                                            <h3>STAT: </h3> 
                                        </span>
                                        <span className="roll">
                                            <h3>{rolls[3] ? Utils.rollAbility(rolls) : " "}</h3>
                                        </span>
                                        </div>

                                        <FlexBox
                                            justifyContent="center"
                                        >
                                            <div className={!rolls[3] ? null : "hidden"}>
                                                    <Button 
                                                        variant="contained"
                                                        color="secondary"
                                                        onClick={rollD6}
                                                        className="button"
                                                    >
                                                        ROLL D6
                                                    </Button>
                                                    <Button
                                                        variant="contained"
                                                        color="secondary"
                                                        onClick={handleCloseD6}
                                                        className="button"
                                                    >
                                                        EXIT
                                                    </Button>
                                            </div>
                                            <div className={rolls[3] ? null : "hidden"}>
                                                <Button 
                                                    variant="contained"
                                                    color="secondary"
                                                    onClick={refreshD6}
                                                    className="button"
                                                >
                                                    START OVER
                                                </Button>
                                                <Button 
                                                    variant="contained"
                                                    color="secondary"                   
                                                    onClick={handleCloseD6}
                                                    className="button"
                                                >
                                                    EXIT
                                                </Button>
                                            </div>
                                        </FlexBox>
                                    </FadeStyle>
                                </Fade>
                            </FlexBox>    
                        </Modal>
                </Card>
                </Center>

                <p>
                    After assigning your ability scores, you can determine your ability modifiers by  
                    subtracting 10 from the ability score and then dividing the result by 2 (rounded down).
                </p>
            </MainStyle>
        </BackgroundImage>
    );
};

export default GeneratorPage;
