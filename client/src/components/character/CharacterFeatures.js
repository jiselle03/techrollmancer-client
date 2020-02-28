import React from 'react';

import Card from '@material-ui/core/Card';

export const CharacterFeatures = props => {
    const { name } = props.character;

    return (
        <>
            <h1>
                {name.toUpperCase()}
            </h1>

            <div className="character-sheet">
                <Card>
                    <h2>
                        Features
                    </h2>
                </Card>
            </div>

        </>
    );
};
