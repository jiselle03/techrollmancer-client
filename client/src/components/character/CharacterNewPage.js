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
            class_1: fd.get("class_1"),
            class_2: fd.get("class_2"),
            class_3: fd.get("class_3"),
            class_1_level: fd.get("class_1_level"),
            class_2_level: fd.get("class_2_level"),
            class_3_level: fd.get("class_3_level"),
            hp: fd.get("hp"),
            alignment: fd.get("alignment"),
            photo_url: fd.get("photo_url"),
            str: fd.get("str"),
            dex: fd.get("dex"),
            con: fd.get("con"),
            int: fd.get("int"),
            wis: fd.get("wis"),
            cha: fd.get("cha"),
            armor_class: fd.get("armor_class"),
            speed: fd.get("speed")
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
