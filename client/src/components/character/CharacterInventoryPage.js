import React, { useState, useEffect } from 'react';

import '../css/Character.css';
import { utils } from '../js/utils';
import { Character } from '../../api/character';
import { CharacterNav } from './CharacterNav';
import { CircularProgress } from '@material-ui/core';
import Card from '@material-ui/core/Card';

export const CharacterInventoryPage = props => {
    const [character, setCharacter] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      Character.one(props.match.params.id).then(character => { 
          setCharacter(character);
          setIsLoading(false);
        });
    }, [props.match.params.id]);
  
    if (isLoading) {
      return(
          <CircularProgress variant="determinate" />
      );
    };

    return (
        <div className="inventory character-background">
            <CharacterNav character={character} />

        </div>
    );
};
