import React from 'react';

import Card from '@material-ui/core/Card';

export const CharacterJournal = props => {
    const { name } = props.character;

    return (
        <>
            <h1>
                {name.toUpperCase()}
            </h1>

            <div className="character-sheet">
                <Card>
                    <h2>
                        Journal
                    </h2>
                </Card>
            </div>

        </>
    );
};
