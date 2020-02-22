import React from 'react';

import { utils } from '../js/utils';
import Card from '@material-ui/core/Card';

export const CharacterFeatures = props => {
    const { name } = props.character;

    return (
        <div className="features character-background">
            <h1 className="character-name-title">{name.toUpperCase()}</h1>

        </div>
    );
};
