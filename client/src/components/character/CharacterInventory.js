import React from 'react';

import '../css/Character.css';
import { utils } from '../js/utils';
import Card from '@material-ui/core/Card';

export const CharacterInventory = props => {
    const { name } = props.character;

    return (
        <div className="inventory character-background">
            <h1 className="character-name-title">{name.toUpperCase()}</h1>

        </div>
    );
};
