import React, { useState, useEffect } from 'react';
import { Layout } from '../../styles/Container';
import { BackgroundImage } from '../../styles/Image';
import { Heading, Text } from '../../styles/Typography';
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
      light
    >
      <Layout>
        <Heading>Conditions</Heading>
                
        <Heading as="h2">Blinded</Heading>
        <Text>
          A blinded creature can't see and automatically fails any ability check that requires sight.
        </Text>
        <Text>
          Attack rolls against the creature have advantage, and the creature's attack rolls have disadvantage.
        </Text>

        <Heading as="h2">Charmed</Heading>
        <Text>
          A charmed creature can’t Attack the charmer or target the charmer with harmful Abilities or magical Effects.
        </Text>
        <Text>
          The charmer has advantage on any ability check to interact socially with the creature.
        </Text>

        <Heading as="h2">Deafened</Heading>
        <Text>
          A deafened creature can’t hear and automatically fails any ability check that requires hearing.
        </Text>

        <Heading as="h2">Fatigued (Exhaustion)</Heading>
        <Text>
          Some Special Abilities and environmental Hazards, such as starvation and the long-­term Effects of freezing or scorching temperatures, can lead to a Special condition called exhaustion. Exhaustion is measured in six levels. An effect can give a creature one or more levels of exhaustion, as specified in the effect’s description.
        </Text>
                
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

        <Heading as="h2">Frightened</Heading>
        <Text>
          A frightened creature has disadvantage on Ability Checks and Attack rolls while the source of its fear is within line of sight.
        </Text>
        <Text>
          The creature can’t willingly move closer to the source of its fear.
        </Text>

        <Heading as="h2">Grappled</Heading>
        <Text>           
          A grappled creature’s speed becomes 0, and it can’t benefit from any bonus to its speed.
        </Text>
        <Text>
          The condition ends if the Grappler is incapacitated (see the condition).
        </Text>
        <Text>
          The condition also ends if an effect removes the grappled creature from the reach of the Grappler or Grappling effect, such as when a creature is hurled away by the Thunderwave spell.
        </Text>
            
        <Heading as="h2">Incapacitated</Heading>
        <Text>
          An incapacitated creature can’t take Actions or reactions.
        </Text>

        <Heading as="h2">Invisible</Heading>
        <Text>
          An invisible creature is impossible to see without the aid of magic or a Special sense. For the purpose of Hiding, the creature is heavily obscured. The creature’s location can be detected by any noise it makes or any tracks it leaves.
        </Text>
        <Text>
          Attack rolls against the creature have disadvantage, and the creature’s Attack rolls have advantage.
        </Text>
        
        <Heading as="h2">Paralyzed</Heading>
        <Text>
          A paralyzed creature is incapacitated (see the condition) and can’t move or speak.
        </Text>
        <Text>
          The creature automatically fails Strength and Dexterity Saving Throws.
        </Text>
        <Text>
          Attack rolls against the creature have advantage.
        </Text>
        <Text>
          Any Attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.
        </Text>

        <Heading as="h2">Petrified</Heading>
        <Text>
          A petrified creature is transformed, along with any nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone). Its weight increases by a factor of ten, and it ceases aging.
        </Text>
        <Text>
          The creature is incapacitated (see the condition), can’t move or speak, and is unaware of its surroundings.
        </Text>
        <Text>
          Attack rolls against the creature have advantage.
        </Text>
        <Text>
          The creature automatically fails Strength and Dexterity Saving Throws.
        </Text>
        <Text>
          The creature has Resistance to all damage.
        </Text>
        <Text>
          The creature is immune to poison and disease, although a poison or disease already in its system is suspended, not neutralized.
        </Text>

        <Heading as="h2">
            Poisoned
        </Heading>
        <Text>
            A poisoned creature has disadvantage on Attack rolls and Ability Checks.
        </Text>

        <Heading as="h2">Prone</Heading>
        <Text>
          A prone creature’s only Movement option is to crawl, unless it stands up and thereby ends the condition.
        </Text>
        <Text>
          The creature has disadvantage on Attack rolls.
        </Text>
        <Text>
          An Attack roll against the creature has advantage if the attacker is within 5 feet of the creature. Otherwise, the Attack roll has disadvantage.
        </Text>

        <Heading as="h2">Restrained</Heading>
        <Text>
          A restrained creature’s speed becomes 0, and it can’t benefit from any bonus to its speed.
        </Text>
        <Text>
          Attack rolls against the creature have advantage, and the creature’s Attack rolls have disadvantage.
        </Text>
        <Text>
          The creature has disadvantage on Dexterity Saving Throws.
        </Text>
                
        <Heading as="h2">Stunned</Heading>
        <Text>
          A stunned creature is incapacitated (see the condition), can’t move, and can speak only falteringly.
        </Text>
        <Text>
          The creature automatically fails Strength and Dexterity Saving Throws.
        </Text>
        <Text>
          Attack rolls against the creature have advantage.
        </Text>
        
        <Heading as="h2">Unconscious</Heading>
        <Text>
          An unconscious creature is incapacitated (see the condition), can’t move or speak, and is unaware of its surroundings
        </Text>
        <Text>
          The creature drops whatever it’s holding and falls prone.
        </Text>
        <Text>
          The creature automatically fails Strength and Dexterity Saving Throws.
        </Text>
        <Text>
          Attack rolls against the creature have advantage.
        </Text>
        <Text>
          Any Attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.
        </Text>
      </Layout>
    </BackgroundImage>
  );
};

export default ConditionIndexPage;
