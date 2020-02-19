import React from 'react';

import '../css/Character.css';
import { utils } from '../js/utils';
import Card from '@material-ui/core/Card';

export const CharacterTraits = props => {

    const { character } = props;

    return (
        <div className="traits character-background">
            <h1 className="character-name-title">{character.name.toUpperCase()}</h1>

        </div>
    );
};
