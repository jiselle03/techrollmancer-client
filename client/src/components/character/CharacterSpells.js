import React from 'react';

import { utils } from '../js/utils';
import { CharacterSpellSet } from './CharacterSpellSet';

import Card from '@material-ui/core/Card';

export const CharacterSpells = props => {
    const { character } = props;
    const { spells, name } = props.character;

    return (
        <>
            <h1>
                {name.toUpperCase()}
            </h1>

            <div className="character-sheet">
                <Card className="spells">
                    <h2>Cantrips</h2>
                    {spells && (
                        spells.map((spell, index) => (
                            spell.level_int === 0 && (
                                <p key={index}>{spell.name}</p>
                            )
                        ))
                    )}
                </Card>

                <Card className="spells">
                    <h2>1st Level</h2>
                    {spells && (
                        spells.map((spell,index) => (
                            spell.level_int === 1 && (
                                <p key={index}>{spell.name}</p>
                            )
                        ))
                    )}
                </Card>

                <Card className="spells">
                    <h2>2nd Level</h2>
                    {spells && (
                        spells.map((spell, index) => (
                            spell.level_int === 2 && (
                                <p key={index}>{spell.name}</p>
                            )
                        ))
                    )}
                </Card>

                <Card className="spells">
                    <h2>3rd Level</h2>
                    {spells && (
                        spells.map((spell, index) => (
                            spell.level_int === 3 && (
                                <p key={index}>{spell.name}</p>
                            )
                        ))
                    )}
                </Card>

                <Card className="spells">
                    <h2>4th Level</h2>
                    {spells && (
                        spells.map((spell, index) => (
                            spell.level_int === 4 && (
                                <p key={index}>{spell.name}</p>
                            )
                        ))
                    )}
                </Card>

                <Card className="spells">
                    <h2>5th Level</h2>
                    {spells && (
                        spells.map((spell, index) => (
                            spell.level_int === 5 && (
                                <p key={index}>{spell.name}</p>
                            )
                        ))
                    )}
                </Card>

                <Card className="spells">
                    <h2>6th Level</h2>
                    {spells && (
                        spells.map((spell, index) => (
                            spell.level_int === 6 && (
                                <p key={index}>{spell.name}</p>
                            )
                        ))
                    )}
                </Card>

                <Card className="spells">
                    <h2>7th Level</h2>
                    {spells && (
                        spells.map((spell, index) => (
                            spell.level_int === 7 && (
                                <p key={index}>{spell.name}</p>
                            )
                        ))
                    )}
                </Card>

                <Card className="spells">
                    <h2>8th Level</h2>
                    {spells && (
                        spells.map((spell, index) => (
                            spell.level_int === 8 && (
                                <p key={index}>{spell.name}</p>
                            )
                        ))
                    )}
                </Card>

                <Card className="spells">
                    <h2>9th Level</h2>
                    {spells && (
                        spells.map((spell, index) => (
                            spell.level_int === 9 && (
                                <p key={index}>{spell.name}</p>
                            )
                        ))
                    )}
                </Card>

                <CharacterSpellSet character={character} />
            </div>
        </>
    );
};
