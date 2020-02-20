import React, { useState, useEffect } from 'react';

import { MainStyle } from '../styles/MainStyle';
import { BackgroundImage } from '../styles/BackgroundImage';
import { TableStyle } from '../styles/TableStyle';

import { CircularProgress, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';

function createData(level, effect) {
    return { level, effect };
};

const rows = [
    createData(1, "Disadvantage on Ability Checks"),
    createData(2, "Speed halved"),
    createData(3, "Disadvantage on Attack rolls and Saving Throws"),
    createData(4, "Hit point maximum halved"),
    createData(5, "Speed reduced to 0"),
    createData(6, "Death")
];


export const ConditionIndexPage = () => {
    const [conditionIndex, setConditionIndex] = useState({
        isLoading: true
    });

    useEffect(() => {
        setConditionIndex({ isLoading: false });
    }, []);

    if(conditionIndex.isLoading) {
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
                    CONDITIONS
                </Typography>
                
                <Divider />
                
                <Typography variant="h5" style={{marginTop: "1em"}}>
                    Blinded
                </Typography>
                <Typography variant="p">
                    A blinded creature can't see and automatically fails any ability check that requires sight.
                </Typography>
                <Typography variant="p">
                    Attack rolls against the creature have advantage, and the creature's attack rolls have disadvantage.
                </Typography>

                <Typography variant="h5" style={{marginTop: "1em"}}>
                    Charmed
                </Typography>
                <p>A charmed creature can’t Attack the charmer or target the charmer with harmful Abilities or magical Effects.</p>
                <p>The charmer has advantage on any ability check to interact socially with the creature.</p>

                <Typography variant="h5" style={{marginTop: "1em"}}>
                    Deafened
                </Typography>
                <Typography variant="p">
                    A deafened creature can’t hear and automatically fails any ability check that requires hearing.
                </Typography>

                <Typography variant="h5" style={{marginTop: "1em"}}>
                    Fatigued (Exhaustion)
                </Typography>
                <Typography variant="p">
                    Some Special Abilities and environmental Hazards, such as starvation and the long-­term Effects of freezing or scorching temperatures, can lead to a Special condition called exhaustion. Exhaustion is measured in six levels. An effect can give a creature one or more levels of exhaustion, as specified in the effect’s description.
                </Typography>
                
                <TableStyle>
                    <TableContainer component={Paper}>
                        <Table className="table" aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>Level</TableCell>
                                <TableCell>Effect</TableCell>
                            </TableRow>
                            </TableHead>
                            <TableBody>
                            {rows.map(row => (
                                <TableRow key={row.name}>
                                <TableCell component="th" scope="row">
                                    {row.level}
                                </TableCell>
                                <TableCell>{row.effect}</TableCell>
                                </TableRow>
                            ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </TableStyle>

                <Typography variant="h5" style={{marginTop: "1em"}}>
                    Frightened
                </Typography>
                <Typography variant="p">
                    A frightened creature has disadvantage on Ability Checks and Attack rolls while the source of its fear is within line of sight.
                </Typography>
                <Typography variant="p">
                    The creature can’t willingly move closer to the source of its fear.
                </Typography>

                <Typography variant="h5" style={{marginTop: "1em"}}>
                    Grappled
                </Typography>
                <Typography variant="p">                
                    A grappled creature’s speed becomes 0, and it can’t benefit from any bonus to its speed.
                </Typography>
                <Typography variant="p">
                    The condition ends if the Grappler is incapacitated (see the condition).
                </Typography>
                <Typography variant="p">
                    The condition also ends if an effect removes the grappled creature from the reach of the Grappler or Grappling effect, such as when a creature is hurled away by the Thunderwave spell.
                </Typography>
            
                <Typography variant="h5" style={{marginTop: "1em"}}>
                    Incapacitated
                </Typography>
                <Typography variant="p">
                    An incapacitated creature can’t take Actions or reactions.
                </Typography>

                <Typography variant="h5" style={{marginTop: "1em"}}>
                    Invisible
                </Typography>
                <Typography variant="p">
                An invisible creature is impossible to see without the aid of magic or a Special sense. For the purpose of Hiding, the creature is heavily obscured. The creature’s location can be detected by any noise it makes or any tracks it leaves.
                </Typography>
                <Typography variant="p">
                Attack rolls against the creature have disadvantage, and the creature’s Attack rolls have advantage.
                </Typography>
        
                <Typography variant="h5" style={{marginTop: "1em"}}>
                    Paralyzed
                </Typography>
                <Typography variant="p">
                    A paralyzed creature is incapacitated (see the condition) and can’t move or speak.
                </Typography>
                <Typography variant="p">
                    The creature automatically fails Strength and Dexterity Saving Throws.
                </Typography>
                <Typography variant="p">
                    Attack rolls against the creature have advantage.
                </Typography>
                <Typography variant="p">
                    Any Attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.
                </Typography>

                <Typography variant="h5" style={{marginTop: "1em"}}>
                    Petrified
                </Typography>
                <Typography variant="p">
                    A petrified creature is transformed, along with any nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone). Its weight increases by a factor of ten, and it ceases aging.
                </Typography>
                <Typography variant="p">
                    The creature is incapacitated (see the condition), can’t move or speak, and is unaware of its surroundings.
                </Typography>
                <Typography variant="p">
                    Attack rolls against the creature have advantage.
                </Typography>
                <Typography variant="p">
                    The creature automatically fails Strength and Dexterity Saving Throws.
                </Typography>
                <Typography variant="p">
                    The creature has Resistance to all damage.
                </Typography>
                <Typography variant="p">
                    The creature is immune to poison and disease, although a poison or disease already in its system is suspended, not neutralized.
                </Typography>

                <Typography variant="h5" style={{marginTop: "1em"}}>
                    Poisoned
                </Typography>
                <Typography variant="p">
                    A poisoned creature has disadvantage on Attack rolls and Ability Checks.
                </Typography>

                <Typography variant="h5" style={{marginTop: "1em"}}>
                    Prone
                </Typography>
                <Typography variant="p">
                    A prone creature’s only Movement option is to crawl, unless it stands up and thereby ends the condition.
                </Typography>
                <Typography variant="p">
                    The creature has disadvantage on Attack rolls.
                </Typography>
                <Typography variant="p">
                    An Attack roll against the creature has advantage if the attacker is within 5 feet of the creature. Otherwise, the Attack roll has disadvantage.
                </Typography>

                <Typography variant="h5" style={{marginTop: "1em"}}>
                    Restrained
                </Typography>
                <Typography variant="p">
                    A restrained creature’s speed becomes 0, and it can’t benefit from any bonus to its speed.
                </Typography>
                <Typography variant="p">
                    Attack rolls against the creature have advantage, and the creature’s Attack rolls have disadvantage.
                </Typography>
                <Typography variant="p">
                    The creature has disadvantage on Dexterity Saving Throws.
                </Typography>
                
                <Typography variant="h5" style={{marginTop: "1em"}}>
                    Stunned
                </Typography>
                <Typography variant="p">
                    A stunned creature is incapacitated (see the condition), can’t move, and can speak only falteringly.
                </Typography>
                <Typography variant="p">
                    The creature automatically fails Strength and Dexterity Saving Throws.
                </Typography>
                <Typography variant="p">
                    Attack rolls against the creature have advantage.
                </Typography>
                
                <Typography variant="h5" style={{marginTop: "1em"}}>
                    Unconscious
                </Typography>
                <Typography variant="p">
                    An unconscious creature is incapacitated (see the condition), can’t move or speak, and is unaware of its surroundings
                </Typography>
                <Typography variant="p">
                    The creature drops whatever it’s holding and falls prone.
                </Typography>
                <Typography variant="p">
                    The creature automatically fails Strength and Dexterity Saving Throws.
                </Typography>
                <Typography variant="p">
                    Attack rolls against the creature have advantage.
                </Typography>
                <Typography variant="p">
                    Any Attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.
                </Typography>

            </MainStyle>
        </BackgroundImage>
    );
};
