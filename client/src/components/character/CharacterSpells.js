import React from 'react';

import CharacterSpellsNew from './CharacterSpellsNew';
import SpellDetails from './SpellDetails';

import { Card } from '@material-ui/core';

const CharacterSpells = props => {
    const { character, handleRefresh } = props;
    const { spells, name } = character;
    const levels = ["Cantrips", "1st Level", "2nd Level", "3rd Level", "4th Level", "5th Level", "6th Level", "7th Level", "8th Level", "9th Level"];

    return (
        <>
            <h1>
                {name.toUpperCase()}
            </h1>

            {levels.map((level, index) => (
                <Card className="spells">
                    <h3>{level}</h3>
                    {spells && spells.map((spell, i) => (
                        spell.level_int === index && (
                            <div key={i}>
                                <SpellDetails spell={spell} />
                            </div>
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
