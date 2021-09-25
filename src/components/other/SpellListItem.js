import React, { useState, useEffect } from 'react';
import { Checkbox, FormControlLabel } from '@material-ui/core';

const SpellListItem = props => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = event => {
    setIsChecked(!isChecked);
    props.onHandleChange(event);
  };

  const { characterSpells, spell } = props;

  useEffect(() => {
    const isChecked = characterSpells.includes(spell.id);
    setIsChecked(isChecked);
  }, [isChecked, characterSpells, spell.id]);

  return(
    <FormControlLabel
      control={<Checkbox 
        checked={isChecked}  
        onChange={handleChange} 
        value={spell.slug} 
        data-id={spell.id} 
      />}
      label={spell.name}
    />
  );
};

export default SpellListItem;
