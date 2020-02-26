import React, { useState, useEffect } from 'react';

import { Checkbox, FormControlLabel } from '@material-ui/core';

export const SpellListItem = props => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = event => {
        setIsChecked(!isChecked);
        props.onHandleChange(event);
    }

    useEffect(() => {
        const { characterSpells, checkedSpell, spell } = props;
        const isChecked = checkedSpell || characterSpells.includes(spell.id);
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

