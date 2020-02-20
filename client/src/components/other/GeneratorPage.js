import React, { useState } from 'react';

import '../css/Home.css';
import { utils } from '../js/utils.js';
import { RandomCharacter } from '../js/generator.js';
import { BackgroundImage } from '../styles/BackgroundImage';
import { MainStyle } from '../styles/MainStyle';
import { Fade } from '../Fade';

import { Backdrop, Card, Divider, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
  
Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
};

export const GeneratorPage = () => {
    const [openQR, setOpenQR] = useState(false);
    const [character, setCharacter] = useState({});

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
            currentRoll = utils.rollD6();
            setRolls([...rolls, currentRoll]);
        } else {
            return;
        };
    };
    const refreshD6 = () => {
        setRolls([]);
        handleCloseD6();
    };
    const d6Roll = () => {
        handleOpenD6();
        rollD6();
    };

    return (
        <BackgroundImage 
            image={require('../../assets/d20.png')}
            
        >
            <MainStyle>
                <h1>CHARACTER GENERATOR</h1>
                <Divider />
                <br />
                <p className="instructions">
                    Much of what your character does in the game depends on their scores for the following six abilities: 
                    <strong> Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma.</strong>
                </p>
                
                <p className="instructions">You can create a character in 3 ways:</p>

                <Card className="standard-array generator">
                    <h3>Standard Array</h3>
                    <p>
                        Assign each of the following numbers to the one of the six abilities: 
                        <strong> 15, 14, 13, 12, 10, 8</strong>.
                    </p>
                    <p>
                        Then make any changes to your ability scores as a result of your race choice.
                    </p>
                </Card>

                <Card className="point-buy generator">
                    <h3>Point Buy</h3>
                    <p>
                        You have 27 points to spend on your character's ability scores. 
                        The cost of each score is shown on the table below. 15 is the highest 
                        ability score you can end up with before applying racial increases. 
                        You cannot have a score lower than 8.
                    </p>
                    <TableContainer component={Paper}>
                    <Table className="point-buy table" aria-label="point buy table">
                        <TableHead>
                            <TableRow>
                                <TableCell>SCORE</TableCell>
                                <TableCell>COST</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow key="8">
                                <TableCell>8</TableCell>
                                <TableCell>0</TableCell>
                            </TableRow>
                            <TableRow key="9">
                                <TableCell>9</TableCell>
                                <TableCell>1</TableCell>
                            </TableRow>
                            <TableRow key="10">
                                <TableCell>10</TableCell>
                                <TableCell>2</TableCell>
                            </TableRow>
                            <TableRow key="11">
                                <TableCell>11</TableCell>
                                <TableCell>3</TableCell>
                            </TableRow>
                            <TableRow key="12">
                                <TableCell>12</TableCell>
                                <TableCell>4</TableCell>
                            </TableRow>
                            <TableRow key="13">
                                <TableCell>13</TableCell>
                                <TableCell>5</TableCell>
                            </TableRow>
                            <TableRow key="14">
                                <TableCell>14</TableCell>
                                <TableCell>7</TableCell>
                            </TableRow>
                            <TableRow key="15">
                                <TableCell>15</TableCell>
                                <TableCell>9</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    </TableContainer>
                </Card>

                <Card className="roll-stats generator">
                    <h3>Rolling Stats</h3>
                    <p>
                        Roll <strong>4d6</strong> and record the cumulative total of the highest three results six times.
                        Assign each score to one of the six ability scores, then make any changes to your ability scores as a result of your race choice.
                    </p>
                    <Divider />
                    <div className="roll-buttons">
                        <button 
                            onClick={quickRoll}
                            className="roll-button"
                        >
                            QUICK ROLL
                        </button>

                        <button 
                            onClick={d6Roll}
                            className="roll-button"
                        >
                            ROLL D6
                        </button>
                    </div>

                        <Modal
                            className="quick-roll modal"
                            open={openQR}
                            onClose={handleCloseQR}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                            timeout: 500,
                            }}
                        >
                            <Fade in={openQR}>
                            <div className="quick-roll fade center">
                                <h3 id="modal-title">CHARACTER STATS</h3>

                                <p id="race"><strong>Race:</strong> {character._charRace}</p>
                                <p id="class"><strong>Class:</strong> {character._charClass}</p>
                                <Divider />
                                <p id="ability"><strong>Ability Scores</strong></p>
                                <p>{character._roll1}</p>
                                <p>{character._roll2}</p>
                                <p>{character._roll3}</p>
                                <p>{character._roll4}</p>
                                <p>{character._roll5}</p>
                                <p>{character._roll6}</p>

                                <button 
                                    onClick={handleCloseQR}
                                    className="roll-button modal"
                                >
                                    EXIT
                                </button>
                            </div>
                            </Fade>
                        </Modal>


                        <Modal
                            id="d6-modal"
                            className="d6 modal"
                            open={openD6}
                            onClose={handleCloseD6}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                            timeout: 500,
                        }}
                        >
                            <Fade in={openD6}>
                            <div className="d6 fade">
                                <h2 id="modal-title">ROLLS</h2>

                                <p id="roll-1">1ST: <strong>{rolls[0] ? rolls[0] : ""}</strong></p>
                                <p id="roll-2">2ND: <strong>{rolls[1] ? rolls[1] : ""}</strong></p>
                                <p id="roll-3">3RD: <strong>{rolls[2] ? rolls[2] : ""}</strong></p>
                                <p id="roll-4">4TH: <strong>{rolls[3] ? rolls[3] : ""}</strong></p>
                                <Divider />
                                <p id="roll-4">STAT: <strong>{rolls[3] ? utils.rollAbility(rolls) : ""}</strong></p>

                                <div className="center">
                                    <div className={!rolls[3] ? null : "hidden"}>
                                        <button 
                                            onClick={rollD6}
                                            className="roll-button modal"
                                        >
                                            ROLL D6
                                        </button>
                                    </div>
                                    <div className={rolls[3] ? null : "hidden"}>
                                        <button 
                                            onClick={refreshD6}
                                            className="roll-button modal"
                                        >
                                            START OVER
                                        </button>
                                    </div>
                                </div>
                            </div>
                            </Fade>
                        </Modal>
                </Card>

                <p className="instructions">
                    After assigning your ability scores, you can determine your ability modifiers by  
                    subtracting 10 from the ability score and then dividing the result by 2 (rounded down).
                </p>
            </MainStyle>
        </BackgroundImage>
    );
};
