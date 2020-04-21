import React from 'react';

import CharacterSpellsNew from './CharacterSpellsNew';
import SpellDetails from './SpellDetails';

import { Card } from '@material-ui/core';

const CharacterSpells = props => {
    const { character, handleRefresh } = props;
    const { spells, name } = props.character;

    return (
        <>
            <h1>
                {name.toUpperCase()}
            </h1>

            <Card className="spells">
                <h3>Cantrips</h3>
                {spells && (
                    spells.map((spell, index) => (
                        spell.level_int === 0 && (
                            <div key={index}>
                                <SpellDetails spell={spell} />
                            </div>
                        )
                    ))
                )}
            </Card>

            <Card className="spells">
                <h3>1st Level</h3>
                {spells && (
                    spells.map((spell,index) => (
                        spell.level_int === 1 && (
                            <div key={index}>
                                <SpellDetails spell={spell} />
                            </div>
                        )
                    ))
                )}
            </Card>

            <Card className="spells">
                <h3>2nd Level</h3>
                {spells && (
                    spells.map((spell, index) => (
                        spell.level_int === 2 && (
                            <div key={index}>
                                <SpellDetails spell={spell} />
                            </div>
                        )
                    ))
                )}
            </Card>

            <Card className="spells">
                <h3>3rd Level</h3>
                {spells && (
                    spells.map((spell, index) => (
                        spell.level_int === 3 && (
                            <div key={index}>
                                <SpellDetails spell={spell} />
                            </div>
                        )
                    ))
                )}
            </Card>

            <Card className="spells">
                <h3>4th Level</h3>
                {spells && (
                    spells.map((spell, index) => (
                        spell.level_int === 4 && (
                            <div key={index}>
                                <SpellDetails spell={spell} />
                            </div>
                        )
                    ))
                )}
            </Card>

            <Card className="spells">
                <h3>5th Level</h3>
                {spells && (
                    spells.map((spell, index) => (
                        spell.level_int === 5 && (
                            <div key={index}>
                                <SpellDetails spell={spell} />
                            </div>
                        )
                    ))
                )}
            </Card>

            <Card className="spells">
                <h3>6th Level</h3>
                {spells && (
                    spells.map((spell, index) => (
                        spell.level_int === 6 && (
                            <div key={index}>
                                <SpellDetails spell={spell} />
                            </div>
                        )
                    ))
                )}
            </Card>

            <Card className="spells">
                <h3>7th Level</h3>
                {spells && (
                    spells.map((spell, index) => (
                        spell.level_int === 7 && (
                            <div key={index}>
                                <SpellDetails spell={spell} />
                            </div>
                        )
                    ))
                )}
            </Card>

            <Card className="spells">
                <h3>8th Level</h3>
                {spells && (
                    spells.map((spell, index) => (
                        spell.level_int === 8 && (
                            <div key={index}>
                                <SpellDetails spell={spell} />
                            </div>
                        )
                    ))
                )}
            </Card>

            <Card className="spells">
                <h3>9th Level</h3>
                {spells && (
                    spells.map((spell, index) => (
                        spell.level_int === 9 && (
                            <div key={index}>
                                <SpellDetails spell={spell} />
                            </div>
                        )
                    ))
                )}
            </Card>

            <CharacterSpellsNew character={character} handleRefresh={handleRefresh}/>
        </>
    );
};

export default CharacterSpells;
