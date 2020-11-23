import React, { useState, useEffect } from 'react';

import MainStyle from '../styles/MainStyle';
import BackgroundImage from '../styles/BackgroundImage';
import TableStyle from '../styles/TableStyle';

import { CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

const rows = [
    { level: 1, effect: "Disadvantage on Ability Checks" },
    { level: 2, effect: "Speed halved"},
    { level: 3, effect: "Disadvantage on Attack rolls and Saving Throws" },
    { level: 4, effect: "Hit point maximum halved" },
    { level: 5, effect: "Speed reduced to 0" },
    { level: 6, effect: "Death" }
];

const ConditionIndexPage = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => setIsLoading(false), []);

    if (isLoading) return (<CircularProgress variant="determinate" />);

    return (
        <BackgroundImage 
            image="https://i.ibb.co/cctCwgk/d20.png"
            light={true}
        >
            <MainStyle>
                <h1>
                    CONDITIONS
                </h1>
                
                <h2>
                    Blinded
                </h2>
                <p>
                    A blinded creature can't see and automatically fails any ability check that requires sight.
                </p>
                <p>
                    Attack rolls against the creature have advantage, and the creature's attack rolls have disadvantage.
                </p>

                <h2>
                    Charmed
                </h2>
                <p>
                    A charmed creature can’t Attack the charmer or target the charmer with harmful Abilities or magical Effects.
                </p>
                <p>
                The charmer has advantage on any ability check to interact socially with the creature.
                </p>

                <h2>
                    Deafened
                </h2>
                <p>
                    A deafened creature can’t hear and automatically fails any ability check that requires hearing.
                </p>

                <h2>
                    Fatigued (Exhaustion)
                </h2>
                <p>
                    Some Special Abilities and environmental Hazards, such as starvation and the long-­term Effects of freezing or scorching temperatures, can lead to a Special condition called exhaustion. Exhaustion is measured in six levels. An effect can give a creature one or more levels of exhaustion, as specified in the effect’s description.
                </p>
                
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

                <h2>
                    Frightened
                </h2>
                <p>
                    A frightened creature has disadvantage on Ability Checks and Attack rolls while the source of its fear is within line of sight.
                </p>
                <p>
                    The creature can’t willingly move closer to the source of its fear.
                </p>

                <h2>
                    Grappled
                </h2>
                <p>           
                    A grappled creature’s speed becomes 0, and it can’t benefit from any bonus to its speed.
                </p>
                <p>
                    The condition ends if the Grappler is incapacitated (see the condition).
                </p>
                <p>
                    The condition also ends if an effect removes the grappled creature from the reach of the Grappler or Grappling effect, such as when a creature is hurled away by the Thunderwave spell.
                </p>
            
                <h2>
                    Incapacitated
                </h2>
                <p>
                    An incapacitated creature can’t take Actions or reactions.
                </p>

                <h2>
                    Invisible
                </h2>
                <p>
                    An invisible creature is impossible to see without the aid of magic or a Special sense. For the purpose of Hiding, the creature is heavily obscured. The creature’s location can be detected by any noise it makes or any tracks it leaves.
                </p>
                <p>
                    Attack rolls against the creature have disadvantage, and the creature’s Attack rolls have advantage.
                </p>
        
                <h2>
                    Paralyzed
                </h2>
                <p>
                    A paralyzed creature is incapacitated (see the condition) and can’t move or speak.
                </p>
                <p>
                    The creature automatically fails Strength and Dexterity Saving Throws.
                </p>
                <p>
                    Attack rolls against the creature have advantage.
                </p>
                <p>
                    Any Attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.
                </p>

                <h2>
                    Petrified
                </h2>
                <p>
                    A petrified creature is transformed, along with any nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone). Its weight increases by a factor of ten, and it ceases aging.
                </p>
                <p>
                    The creature is incapacitated (see the condition), can’t move or speak, and is unaware of its surroundings.
                </p>
                <p>
                    Attack rolls against the creature have advantage.
                </p>
                <p>
                    The creature automatically fails Strength and Dexterity Saving Throws.
                </p>
                <p>
                    The creature has Resistance to all damage.
                </p>
                <p>
                    The creature is immune to poison and disease, although a poison or disease already in its system is suspended, not neutralized.
                </p>

                <h2>
                    Poisoned
                </h2>
                <p>
                    A poisoned creature has disadvantage on Attack rolls and Ability Checks.
                </p>

                <h2>
                    Prone
                </h2>
                <p>
                    A prone creature’s only Movement option is to crawl, unless it stands up and thereby ends the condition.
                </p>
                <p>
                    The creature has disadvantage on Attack rolls.
                </p>
                <p>
                    An Attack roll against the creature has advantage if the attacker is within 5 feet of the creature. Otherwise, the Attack roll has disadvantage.
                </p>

                <h2>
                    Restrained
                </h2>
                <p>
                    A restrained creature’s speed becomes 0, and it can’t benefit from any bonus to its speed.
                </p>
                <p>
                    Attack rolls against the creature have advantage, and the creature’s Attack rolls have disadvantage.
                </p>
                <p>
                    The creature has disadvantage on Dexterity Saving Throws.
                </p>
                
                <h2>
                    Stunned
                </h2>
                <p>
                    A stunned creature is incapacitated (see the condition), can’t move, and can speak only falteringly.
                </p>
                <p>
                    The creature automatically fails Strength and Dexterity Saving Throws.
                </p>
                <p>
                    Attack rolls against the creature have advantage.
                </p>
                
                <h2>
                    Unconscious
                </h2>
                <p>
                    An unconscious creature is incapacitated (see the condition), can’t move or speak, and is unaware of its surroundings
                </p>
                <p>
                    The creature drops whatever it’s holding and falls prone.
                </p>
                <p>
                    The creature automatically fails Strength and Dexterity Saving Throws.
                </p>
                <p>
                    Attack rolls against the creature have advantage.
                </p>
                <p>
                    Any Attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.
                </p>

            </MainStyle>
        </BackgroundImage>
    );
};

export default ConditionIndexPage;
