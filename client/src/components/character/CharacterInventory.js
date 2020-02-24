import React from 'react';

import { utils } from '../js/utils';
import Card from '@material-ui/core/Card';

export const CharacterInventory = props => {
    const { name } = props.character;

    return (
        <>
            <h1>
                {name.toUpperCase()}
            </h1>

            <div className="character-sheet">
                <Card>
                    <h2>
                        Inventory
                    </h2>
                </Card>
            </div>

        </>
    );
};
