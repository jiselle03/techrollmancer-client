import React from 'react';

import { utils } from '../js/utils';
import Card from '@material-ui/core/Card';

export const CharacterTraits = props => {

    const { name } = props.character;

    return (
        <>
            <h1>
                {name.toUpperCase()}
            </h1>

            <div className="character-sheet">
                <Card>
                    <h2>
                        Traits
                    </h2>
                </Card>
            </div>

        </>
    );
};
