import React, { useState } from 'react';

import { CharacterSpellsNew } from './CharacterSpellsNew';
import { SpellExpansionPanel } from './SpellExpansionPanel';

import { Card } from '@material-ui/core';

export const CharacterSpells = props => {
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
                                <SpellExpansionPanel spell={spell} />
                            </div>
                        )
                    ))
                )}
            </Card>

            <Card className="spells">
                <h2>1st Level</h2>
                {spells && (
                    spells.map((spell,index) => (
                        spell.level_int === 1 && (
                            <div key={index}>
                                <SpellExpansionPanel spell={spell} />
                            </div>
                        )
                    ))
                )}
            </Card>

            <Card className="spells">
                <h2>2nd Level</h2>
                {spells && (
                    spells.map((spell, index) => (
                        spell.level_int === 2 && (
                            <div key={index}>
                                <SpellExpansionPanel spell={spell} />
                            </div>
                        )
                    ))
                )}
            </Card>

            <Card className="spells">
                <h2>3rd Level</h2>
                {spells && (
                    spells.map((spell, index) => (
                        spell.level_int === 3 && (
                            <div key={index}>
                                <SpellExpansionPanel spell={spell} />
                            </div>
                        )
                    ))
                )}
            </Card>

            <Card className="spells">
                <h2>4th Level</h2>
                {spells && (
                    spells.map((spell, index) => (
                        spell.level_int === 4 && (
                            <div key={index}>
                                <SpellExpansionPanel spell={spell} />
                            </div>
                        )
                    ))
                )}
            </Card>

            <Card className="spells">
                <h2>5th Level</h2>
                {spells && (
                    spells.map((spell, index) => (
                        spell.level_int === 5 && (
                            <div key={index}>
                                <SpellExpansionPanel spell={spell} />
                            </div>
                        )
                    ))
                )}
            </Card>

            <Card className="spells">
                <h2>6th Level</h2>
                {spells && (
                    spells.map((spell, index) => (
                        spell.level_int === 6 && (
                            <div key={index}>
                                <SpellExpansionPanel spell={spell} />
                            </div>
                        )
                    ))
                )}
            </Card>

            <Card className="spells">
                <h2>7th Level</h2>
                {spells && (
                    spells.map((spell, index) => (
                        spell.level_int === 7 && (
                            <div key={index}>
                                <SpellExpansionPanel spell={spell} />
                            </div>
                        )
                    ))
                )}
            </Card>

            <Card className="spells">
                <h2>8th Level</h2>
                {spells && (
                    spells.map((spell, index) => (
                        spell.level_int === 8 && (
                            <div key={index}>
                                <SpellExpansionPanel spell={spell} />
                            </div>
                        )
                    ))
                )}
            </Card>

            <Card className="spells">
                <h2>9th Level</h2>
                {spells && (
                    spells.map((spell, index) => (
                        spell.level_int === 9 && (
                            <div key={index}>
                                <SpellExpansionPanel spell={spell} />
                            </div>
                        )
                    ))
                )}
            </Card>

            <CharacterSpellsNew character={character} handleRefresh={handleRefresh}/>
        </>
    );
};
