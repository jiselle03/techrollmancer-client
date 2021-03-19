import React, { useState, useEffect } from 'react';

import { Heading } from '../styles/Typography';

import { Checkbox, FormControlLabel } from '@material-ui/core';

const CharacterProficiencies = props => {
    const [isChecked, setIsChecked] = useState(false);
    const { field, onHandleChange, proficiencies, modifier } = props;

    const handleChange = event => {
        setIsChecked(!isChecked);
        onHandleChange(event);
    };

    useEffect(() => {
        if (proficiencies[field]) {
            setIsChecked(true);
        };
    }, [proficiencies, field]);

    return(
        <FormControlLabel
            control={<Checkbox checked={isChecked} onChange={handleChange} value={field} data-field={field} />}
            label={
                <>
                    <span className="stat">
                        <Heading as="h6" className="ability">{modifier > 0 ? `+${modifier}` : modifier}</Heading>
                    </span>
                </>
            }
        />    
                
    );
};

export default CharacterProficiencies;
