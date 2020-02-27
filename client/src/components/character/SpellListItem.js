import React, { useState, useEffect } from 'react';

import { Checkbox, FormControlLabel } from '@material-ui/core';

export const SpellListItem = props => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = event => {
        setIsChecked(!isChecked);
        props.onHandleChange(event);
    }

    useEffect(() => {
        const { characterSpells, spell } = props;
        const isChecked = characterSpells.includes(spell.id);
        setIsChecked(isChecked);
    }, [isChecked]);

    const { spell } = props;

    return(
        <FormControlLabel
            control={<Checkbox checked={isChecked}  onChange={handleChange} value={spell.slug} data-id={spell.id} />}
            label={spell.name}
        />
    );
};

