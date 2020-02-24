import React from 'react';

import { utils } from '../js/utils';
import Card from '@material-ui/core/Card';

export const CharacterSpells = props => {
    const { character } = props;
    const { name } = props.character;

    return (
        <>
            <h1>
                {name.toUpperCase()}
            </h1>

            <div className="character-sheet">
                <Card className="spells">
                    <h2>Cantrips</h2>
                    {character.spells && (
                        character.spells.filter(spell => (
                            <p>{spell.level === "Cantrip"}</p>
                        ))
                    )}
                </Card>

                <Card className="spells">
                    <h2>1st Level</h2>
                    {character.spells && (
                        character.spells.filter(spell => (
                            <p>{spell.level === "1st-level"}</p>
                        ))
                    )}
                </Card>

                <Card className="spells">
                    <h2>2nd Level</h2>
                    {character.spells && (
                        character.spells.filter(spell => (
                            <p>{spell.level === "2nd-level"}</p>
                        ))
                    )}
                </Card>

                <Card className="spells">
                    <h2>3rd Level</h2>
                    {character.spells && (
                        character.spells.filter(spell => (
                            <p>{spell.level === "3rd-level"}</p>
                        ))
                    )}
                </Card>

                <Card className="spells">
                    <h2>4th Level</h2>
                    {character.spells && (
                        character.spells.filter(spell => (
                            <p>{spell.level === "4th-level"}</p>
                        ))
                    )}
                </Card>

                <Card className="spells">
                    <h2>5th Level</h2>
                    {character.spells && (
                        character.spells.filter(spell => (
                            <p>{spell.level === "5th-level"}</p>
                        ))
                    )}
                </Card>

                <Card className="spells">
                    <h2>6th Level</h2>
                    {character.spells && (
                        character.spells.filter(spell => (
                            <p>{spell.level === "6th-level"}</p>
                        ))
                    )}
                </Card>

                <Card className="spells">
                    <h2>7th Level</h2>
                    {character.spells && (
                        character.spells.filter(spell => (
                            <p>{spell.level === "7th-level"}</p>
                        ))
                    )}
                </Card>

                <Card className="spells">
                    <h2>8th Level</h2>
                    {character.spells && (
                        character.spells.filter(spell => (
                            <p>{spell.level === "8th-level"}</p>
                        ))
                    )}
                </Card>

                <Card className="spells">
                    <h2>9th Level</h2>
                    {character.spells && (
                        character.spells.filter(spell => (
                            <p>{spell.level === "9th-level"}</p>
                        ))
                    )}
                </Card>
            </div>
        </>
    );
};
