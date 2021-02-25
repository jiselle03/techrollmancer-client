import React, { Fragment } from 'react';

import CharacterSpellsNew from './CharacterSpellsNew';
import SpellDetails from '../other/SpellDetails';
import { Heading } from '../styles/Typography';
import Container from '../styles/Container';

import { Card } from '@material-ui/core';

const CharacterSpells = props => {
    const { character, handleRefresh } = props;
    const { spells, name } = character;
    const levels = ["Cantrips", "1st Level", "2nd Level", "3rd Level", "4th Level", "5th Level", "6th Level", "7th Level", "8th Level", "9th Level"];

    return (
        <>
            <Heading>{name}</Heading>

            {levels.map((level, index) => (
                <Card className="spells" key={index}>
                    <Heading as="h3">{level}</Heading>
                    {spells && spells.map(spell => (
                        spell.level_int === index && (
                            <Fragment key={spell.slug}>
                                <SpellDetails spell={spell} />
                            </Fragment>
                        )
                    ))}
                </Card>
            ))}

            <CharacterSpellsNew 
                character={character} 
                handleRefresh={handleRefresh}
                levels={levels}
            />
        </>
    );
};

export default CharacterSpells;
