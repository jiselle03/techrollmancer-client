import React, { useState } from 'react';

import { Character } from '../../api/character';

export const CharacterNew = props => {
    const [errors, setErrors] = useState([]);

    const createCharacter = event => {
        event.preventDefault();
        const { currentTarget } = event;
        const fd = new FormData(currentTarget);

        const newCharacter = {
            name: fd.get("name"),
            gender: fd.get("gender"),
            race: fd.get("race"),
            class_1: fd.get("class_1"),
            class_1_level: fd.get("class_1_level"),
            str: fd.get("str"),
            dex: fd.get("dex"),
            con: fd.get("con"),
            int: fd.get("int"),
            wis: fd.get("wis"),
            cha: fd.get("cha")
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
        <div className="form-background">
            <main className="Main">

            </main>
        </div>
    );
};
