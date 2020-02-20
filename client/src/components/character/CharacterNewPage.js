import React, { useState } from 'react';

import '../css/Character.css';
import { Character } from '../../api/character';

export const CharacterNewPage = props => {
    const [errors, setErrors] = useState([]);

    const createCharacter = event => {
        event.preventDefault();
        const { currentTarget } = event;
        const fd = new FormData(currentTarget);

        const newCharacter = {
            name: fd.get("name"),
            race: fd.get("race"),
            class_1: fd.get("class_1")
        };

        Character.create(newCharacter).then(data => {
            if (!data.errors) {
                props.history.push(`/characters/${data.id}`);
                
            } else {
                setErrors(data.errors);
            };
        });
        
        currentTarget.reset();
    };

    return(
        <div></div>
    );
};
