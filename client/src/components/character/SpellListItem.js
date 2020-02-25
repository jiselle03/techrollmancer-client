import React, { useState, useEffect } from 'react';

import { Checkbox, FormControlLabel } from '@material-ui/core';

export const SpellListItem = props => {
    const [state, setState] = useState(false);

    const { spell, character } = props;

    const handleChange = state => event => {
        setState(event.target.checked);
    };
    
    useEffect(()=> {
        character.spells.map(charSpell => {
            if (charSpell.id === spell.id) {
                return setState(true);
            };
        });
    }, []);

    return(
        <FormControlLabel
            control={<Checkbox checked={state}  onClick={handleChange(state)} value={spell.slug} />}
            label={spell.name}
        />
    );
};
