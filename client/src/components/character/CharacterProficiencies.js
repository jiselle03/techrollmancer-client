import React, { useState, useEffect } from 'react';

import { Checkbox, FormControlLabel } from '@material-ui/core';

export const CharacterProficiencies = props => {
    const [isChecked, setIsChecked] = useState(false);
    const { field, onHandleChange, proficiencies, modifier } = props;

    const handleChange = event => {
        // console.log(isChecked)
        setIsChecked(!isChecked);
        onHandleChange(event);
    };

    useEffect(() => {
        if (proficiencies[field]) {
            setIsChecked(true);
        };
    }, [isChecked]);

    return(
        <FormControlLabel
            control={<Checkbox checked={isChecked} onChange={handleChange} value={field} data-field={field} />}
            label={
                <>
                    <span className="stat">
                        <h6>{modifier}</h6>
                    </span>
                </>
            }
        />    
                
    );
};

