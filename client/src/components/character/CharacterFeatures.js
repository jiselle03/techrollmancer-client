import React from 'react';

import FloatingActionButton from '../other/FloatingActionButton';
import { Heading, Text } from '../styles/Typography';
import Container from '../styles/Container';

import { Card } from '@material-ui/core';

const CharacterFeatures = props => {
    const { id, name } = props.character;

    const handleOpenNew = () => {

    };

    return (
        <>
            <Heading>{name}</Heading>

            <Container className="character-sheet">
                <FloatingActionButton icon="add" handleAction={handleOpenNew} />
                
                {id === 1 && (
                <>
                    <Card className="features">
                        <Heading as="h2">Ki - Class</Heading>

                        <Text>
                            Starting at 2nd level, your Training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of the Monk table.
                        </Text>

                        <Text>
                            You can spend these points to fuel various ki features. You start knowing three such features: Flurry of Blow, Patient Defense, and Step of the Wind. You learn more ki features as you gain levels in this class.
                        </Text>

                        <Text>
                            When you spend a ki point, it is unavailable until you finish a short or Long Rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points.
                        </Text>
                            
                        <Text>
                            Some of your ki features require your target to make a saving throw to resist the feature's effects. The saving throw DC is calculated as follows:
                        </Text>
                            
                        <Text>
                            Ki save DC = 8 + your proficiency bonus + your Wisdom modifier
                        </Text>
                            
                        <Text>
                            <strong>Flurry of Blows:</strong> Immediately after you take the Attack action on Your Turn, you can spend 1 ki point to make two unarmed strikes as a Bonus Action.
                        </Text>

                        <Text>
                            <strong>Patient Defense:</strong> You can spend 1 ki point to take the Dodge action as a Bonus Action on Your Turn.
                        </Text>
                        
                        <Text>
                            <strong>Step of the Wind:</strong> You can spend 1 ki point to take the Disengage or Dash action as a Bonus Action on Your Turn, and your jump distance is doubled for the turn.
                        </Text>
                    </Card>

                    <Card className="features">
                        <Heading as="h2">Unarmored Movement - Class</Heading>

                        <Text>
                            Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a Shield. This bonus increases when you reach certain monk levels, as shown in the Monk table.
                        </Text>
                        <Text>
                            At 9th level, you gain the ability to move along vertical surfaces and across liquids on Your Turn without Falling during the move.
                        </Text>
                    </Card>

                    <Card className="features">
                        <Heading as="h2">Unarmored Defense - Class</Heading>

                        <Text>
                            Beginning at 1st level, while you are wearing no armor and not wielding a Shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier.
                        </Text>
                    </Card>

                    <Card className="features">
                        <Heading as="h2">Darkvision - Race</Heading>

                        <Text>
                            Thanks to your elf blood, you have superior vision in dark and dim Conditions. You can see in dim light within 60 feet of you as if it were bright light, and in Darkness as if it were dim light. You can’t discern color in Darkness, only shades of gray.    
                        </Text>
                    </Card>

                    <Card className="features">
                        <Heading as="h2">Fey Ancestry - Race</Heading>

                        <Text>
                            You have advantage on saving throws against being Charmed, and magic can’t put you to sleep.
                        </Text>
                    </Card>
                </>
                )}
                
                {id !== 1 && (
                    <Heading as="h5">You have not added any features for this character.</Heading>
                )}
                
            </Container>

        </>
    );
};

export default CharacterFeatures;
