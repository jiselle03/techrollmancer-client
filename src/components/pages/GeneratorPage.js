import React, { useContext, useState } from 'react';

import dice from '../../js/dice';
import Utils from '../../js/utils';
import { UserState } from '../../providers/UserProvider';
import { RandomCharacter } from '../../js/generator.js';
import PointBuyCalculator from '../other/PointBuyCalculator';
import CharacterNew from '../character/CharacterNew';
import { BackgroundImage } from '../styles/Image';
import Container, { Layout } from '../styles/Container';
import FlexBox from '../styles/FlexBox';
import { Card } from '../styles/Card';
import { FadeContent, Fade } from '../styles/Fade';
import { Center } from '../styles/Center';
import { Heading, Text } from '../styles/Typography';

import { Backdrop, Button, Divider, Modal } from '@material-ui/core';

const GeneratorPage = props => {
    const [openQR, setOpenQR] = useState(false);
    const [character, setCharacter] = useState({});
    const [save, setSave] = useState(false);

    const { currentUser } = useContext(UserState);

    const quickRoll = () => {
        handleOpenQR();
        setCharacter(new RandomCharacter());
    };
    const handleOpenQR = () => setOpenQR(true);
    const handleCloseQR = () => {
        setCharacter({});
        setOpenQR(false);
    };
    const handleSaveQR = () => {
        setOpenQR(false);
        setSave(true);
    };

    const [openD6, setOpenD6] = useState(false);
    const [rolls, setRolls] = useState([]);

    const handleOpenD6 = () => setOpenD6(true);
    const handleCloseD6 = () => setOpenD6(false);
    
    let currentRoll = 0;
    const rollD6 = () => { 
        if (rolls.length < 4) {
            currentRoll = dice.roll(6);
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
            image="https://i.ibb.co/cctCwgk/d20.png"
            light
        >
            <Layout>
                <Heading>CHARACTER GENERATOR</Heading>

                <Text>
                    Much of what your character does in the game depends on their scores for the following six abilities: 
                    <strong> Strength, Dexterity, Constitution, Intelligence, Wisdom, and Charisma.</strong>
                </Text>
                
                <Text>
                    You can create a character in 3 ways:
                </Text>
                <Center>
                    <Card 
                        secondary
                        margin="1em 0"
                        padding="2em"
                    >
                        <Heading as="h2">
                            Standard Array
                        </Heading>
                        <Text>
                            Assign each of the following numbers to the one of the six abilities: 
                            <strong> 15, 14, 13, 12, 10, 8</strong>.
                        </Text>
                        <Text>
                            Then make any changes to your ability scores as a result of your race choice.
                        </Text>
                    </Card>

                    <Card 
                        secondary
                        margin="1em 0"
                        padding="2em"
                    >
                        <Heading as="h2">
                            Point Buy
                        </Heading>
                        <Text>
                            You have 27 points to spend on your character's ability scores. 
                            Each score from 9 to 13 costs 1 extra point, and 14 and 15 both cost 2 extra points. 
                            15 is the highest ability score you can end up with before applying racial increases. 
                            You cannot have a score lower than 8.
                        </Text>

                        <PointBuyCalculator />

                    </Card>

                    <Card 
                        secondary
                        margin="1em 0"
                        padding="2em"
                    >
                        <Heading as="h2">
                            Rolling Stats
                        </Heading>
                        <Text>
                            Roll <strong>4d6</strong> and record the cumulative total of the highest three results six times.
                            Assign each score to one of the six ability scores, then make any changes to your ability scores as a result of your race choice.
                        </Text>

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

                    {!save && (
                    <Modal
                        open={openQR}
                        onClose={handleCloseQR}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={openQR} margin="10vh 0">
                            <FadeContent>
                                <Heading as="h3">CHARACTER STATS</Heading>

                                <Container>
                                    <span className="roll">
                                        <Heading as="h5">Race: </Heading> 
                                    </span>
                                    <span className="roll">
                                        <Heading as="h4">{character._charRace}</Heading>
                                    </span>
                                </Container>
                                <Container>
                                    <span className="roll">
                                        <Heading as="h5">Class: </Heading>
                                    </span>
                                    <span className="roll">
                                        <Heading as="h4">{character._charClass}</Heading>
                                    </span>
                                </Container>
                                
                                <Heading as="h3">ABILITY SCORES</Heading>
                                
                                    <Heading as="h4">
                                        {character._roll1}, {character._roll2}, {character._roll3}, {character._roll4}, {character._roll5}, {character._roll6}
                                    </Heading>

                                    {currentUser && (
                                        <Button 
                                            variant="contained"
                                            color="secondary"
                                            onClick={handleSaveQR}
                                            className="button"
                                        >
                                            SAVE
                                        </Button>
                                    )}

                                    <Button 
                                        variant="contained"
                                        color="secondary"
                                        onClick={handleCloseQR}
                                        className="button"
                                    >
                                        EXIT
                                    </Button>
                                </FadeContent>
                            </Fade>
                        </Modal>
                    )}

                    {save && (
                        <CharacterNew open stats={character} currentUser={currentUser} {...props} />
                    )}

                        <Modal
                            open={openD6}
                            onClose={handleCloseD6}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500,
                            }}
                            
                        >
                            <Fade  in={openD6} margin="10vh 0">
                                <FadeContent>
                                    <Heading as="h3">ROLLS</Heading>
                                    
                                    <Container>
                                        <span className="roll">
                                            <Heading as="h5" className={checkMin(rolls, 0) ? "min" : null}>1ST: </Heading>
                                        </span>
                                        <span className="roll">
                                            <Heading as="h4" className={checkMin(rolls, 0) ? "min" : null}>{rolls[0] ? rolls[0] : " "}</Heading>
                                        </span>
                                    </Container>

                                    <Container>
                                        <span className="roll">
                                            <Heading as="h5" className={checkMin(rolls, 1) ? "min" : null}>2ND: </Heading>
                                        </span>
                                        <span className="roll">
                                            <Heading as="h4" className={checkMin(rolls, 1) ? "min" : null}>{rolls[1] ? rolls[1] : " "}</Heading>
                                        </span>
                                    </Container>

                                    <Container>
                                        <span className="roll">
                                            <Heading as="h5" className={checkMin(rolls, 2) ? "min" : null}>3RD: </Heading>
                                        </span>
                                        <span className="roll">
                                            <Heading as="h4" className={checkMin(rolls, 2) ? "min" : null}>{rolls[2] ? rolls[2] : " "}</Heading>
                                        </span>
                                    </Container>

                                    <Container>
                                        <span className="roll">
                                            <Heading as="h5" className={checkMin(rolls, 3) ? "min" : null}>4TH: </Heading>
                                        </span>
                                        <span className="roll">
                                            <Heading as="h4" className={checkMin(rolls, 3) ? "min" : null}>{rolls[3]}</Heading>
                                        </span>
                                    </Container>

                                    <Divider />

                                    <Container>
                                        <span className="roll">
                                            <Heading as="h3">STAT: </Heading> 
                                        </span>
                                        <span className="roll">
                                            <Heading as="h3">{rolls[3] ? dice.rollAbility(rolls) : " "}</Heading>
                                        </span>
                                    </Container>

                                    <FlexBox justifyContent="center">
                                        <Container className={!rolls[3] ? null : "hidden"}>
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
                                        </Container>
                                        <Container className={rolls[3] ? null : "hidden"}>
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
                                        </Container>
                                    </FlexBox>
                                </FadeContent>
                            </Fade>  
                        </Modal>
                    </Card>
                </Center>

                <Text>
                    After assigning your ability scores, you can determine your ability modifiers by  
                    subtracting 10 from the ability score and then dividing the result by 2 (rounded down).
                </Text>
            </Layout>
        </BackgroundImage>
    );
};

export default GeneratorPage;
