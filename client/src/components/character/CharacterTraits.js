import React, { useState } from 'react';

import baseUrl from '../../config';
import Character from '../../api/character';
import FlexBox from '../styles/FlexBox';

import { Card } from '@material-ui/core';

const CharacterTraits = props => {
    const [edit, setEdit] = useState({
        profile: false, photo: false, personality_traits: false, 
        ideals: false, bonds: false, flaws: false, 
        background: false, description: false, backstory: false
    });

    const { handleRefresh } = props;
    const { id, name, gender, race, photo_url,
            class_1, class_2, class_3,
            class_1_level, class_2_level, class_3_level, trait } = props.character;
    const { description, backstory, personality_traits, ideals, bonds, flaws, 
            background_type, background_desc } = props.character.trait;

    const handleClick = field => {
        return setEdit({...edit, [field]: true});
    }; 

    const handleBlurProfile = event => {
        const { currentTarget } = event;
        const fd = new FormData(currentTarget);

        Character.update(id, {
            name: fd.get("name"),
            gender: fd.get("gender"),
            race: fd.get("race"),
            class_1: fd.get("class_1"),
            class_1_level: fd.get("class_1_level"),
            class_2: fd.get("class_2"),
            class_2_level: fd.get("class_2_level"),
            class_3: fd.get("class_3"),
            class_3_level: fd.get("class_3_level")
        }).then(data => {
            setEdit({...edit, profile: false});
        }).then(() => {
            handleRefresh();
        });
    };

    const handleBlurPhoto = event => {
        const { currentTarget } = event;

        Character.update(id, {photo_url: currentTarget.value})
            .then(() => {
                setEdit({...edit, photo: false});
            }).then(() => {
                handleRefresh();
            });
    };

    const handleBlur = (event, field) => {
        const { value } = event.currentTarget;
        
        fetch(`${baseUrl}/characters/${id}/traits/${trait.id}`, {
            credentials: "include",
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({[field]: value})
        }).then(res => res.json())
        .then(() => {
            props.handleRefresh();
        });

        if (field === "background_desc" || field === "background_type") {
            return setEdit({...edit, background: false});
        } else {
            return setEdit({...edit, [field]: false});
        };
            
    };

    return (
        <>
            <h1>
                {name.toUpperCase()}
            </h1>

            <div className="character-sheet">
                <Card className="traits-container">
                    <h6 className="header">Photo</h6>
                    {!edit.photo && (
                        <div
                            style={{
                            backgroundImage: `url(${photo_url})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPositionX: "50%"
                            }}
                            onClick={() => handleClick("photo")}
                            className="trait large"
                        >
                        </div>
                    )}
                    {edit.photo && (
                        <div className="photo-edit">
                            <label htmlFor="photo_url" className="photo">Photo URL</label>
                            <input 
                                type="text"
                                name="photo_url"
                                placeholder="Photo URL"
                                defaultValue={photo_url}
                                className="photo"
                                onBlur={event => handleBlurPhoto(event)}
                            />
                        </div>
                    )}
                </Card>

                <Card className="traits-container">
                    <h6 className="header">Profile</h6>
                    <div className="trait large" onClick={() => handleClick("profile")}>
                        {!edit.profile && (
                            <>
                                <p className="profile">Name</p>
                                <h6 className="profile">{name}</h6>

                                {gender && (
                                    <>
                                        <p className="profile">Gender</p>
                                        <h6 className="profile">{gender}</h6>
                                    </>
                                )}

                                <p className="profile">Race</p>
                                <h6 className="profile">{race}</h6>
                                
                                <p className="profile">Class</p>
                                {class_1 && (
                                    <>
                                        <h6 className="profile">{class_1} {class_1_level}</h6>
                                    </>
                                )}
                                {class_2 && (
                                    <>
                                        <h6 className="profile">{class_2} {class_2_level}</h6>
                                    </>
                                )}
                                {class_3 && (
                                    <>
                                        <h6 className="profile">{class_3} {class_3_level}</h6>
                                    </>
                                )}
                            </>
                        )}

                        {edit.profile && (
                            <form onBlur={event => handleBlurProfile(event)}>
                                <label htmlFor="name" className="traits">Name</label>
                                <input 
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    defaultValue={name}
                                    required
                                    className="profile"
                                />
                                <label htmlFor="gender" className="traits">Gender</label>
                                <input 
                                    type="text"
                                    name="gender"
                                    placeholder="Gender"
                                    defaultValue={gender}
                                    className="profile"
                                />
                                <label htmlFor="race" className="traits">Race</label>
                                <input 
                                    type="text"
                                    name="race"
                                    placeholder="Race"
                                    defaultValue={race}
                                    required
                                    className="profile"
                                />
                                <label htmlFor="class" className="traits">Class</label>
                                <FlexBox direction="row" justifyContent="space-around">
                                <input 
                                    type="text"
                                    name="class_1"
                                    placeholder="Class 1"
                                    defaultValue={class_1}
                                    className="profile flex"
                                    required
                                />
                                <input 
                                    type="number"
                                    step="1"
                                    min="1"
                                    max="20"
                                    name="class_1_level"
                                    placeholder="Level"
                                    defaultValue={class_1_level}
                                    className="profile flex"
                                    required
                                />
                                </FlexBox>
                                <FlexBox direction="row" justifyContent="space-around">
                                <input 
                                    type="text"
                                    name="class_2"
                                    placeholder="Class 2"
                                    defaultValue={class_2 || ""}
                                    className="profile flex"
                                />
                                <input 
                                    type="number"
                                    step="1"
                                    name="class_2_level"
                                    placeholder="Level"
                                    defaultValue={class_2_level || ""}
                                    className="profile flex"
                                />
                                </FlexBox>
                                <FlexBox direction="row" justifyContent="space-around">
                                <input 
                                    type="text"
                                    name="class_3"
                                    placeholder="Class 3"
                                    defaultValue={class_3 || ""}
                                    className="profile flex"
                                />
                                <input 
                                    type="number"
                                    step="1"
                                    name="class_3_level"
                                    placeholder="Level"
                                    defaultValue={class_3_level || ""}
                                    className="profile flex"
                                />
                                </FlexBox>
                            </form>
                        )}
                    </div>
                </Card>

                <Card className="traits">
                    <h6 className="header">Personality Traits</h6>
                    {!edit.personality_traits && (
                        <p 
                            className="trait"
                            onClick={() => handleClick("personality_traits")}
                        >
                            {personality_traits}
                        </p>
                    )}
                    {edit.personality_traits && (
                        <textarea 
                            rows="5"
                            placeholder="Personality Traits"
                            defaultValue={personality_traits || ""}
                            onBlur={event => handleBlur(event, "personality_traits")}
                            className="traits"
                        ></textarea>
                    )}

                    <h6 className="header">Ideals</h6>
                    {!edit.ideals && (
                        <p 
                            onClick={() => handleClick("ideals")}
                            className="trait"
                        >
                            {ideals}
                        </p>
                    )}
                    {edit.ideals && (
                        <textarea 
                            rows="5"
                            placeholder="Ideals"
                            defaultValue={ideals || ""}
                            onBlur={(event => handleBlur(event, "ideals"))}
                            className="traits"
                        ></textarea>
                    )}

                    <h6 className="header">Bonds</h6>
                    {!edit.bonds && (
                        <p 
                            onClick={() => handleClick("bonds")}
                            className="trait"
                        >
                           {bonds}
                        </p>
                    )}
                    {edit.bonds && (
                        <textarea 
                            rows="5"
                            placeholder="Bonds"
                            defaultValue={bonds || ""}
                            onBlur={(event => handleBlur(event, "bonds"))}
                            className="traits"
                        ></textarea>
                    )}

                    <h6 className="header">Flaws</h6>
                    {!edit.flaws && (
                        <p 
                            onClick={() => handleClick("flaws")}
                            className="trait"
                        >
                                {flaws}
                        </p>
                    )}
                    {edit.flaws && (
                        <textarea 
                            rows="5"
                            placeholder="Flaws"
                            defaultValue={flaws || ""}
                            onBlur={(event => handleBlur(event, "flaws"))}
                            className="traits"
                        ></textarea>
                    )}
                </Card>

                <Card className="traits">
                    <h6 className="header">Background</h6>
                    {!edit.background && (
                        <div 
                            onClick={() => handleClick("background")}
                            className="trait"
                        >
                            <p>
                                <strong>{background_type}</strong>
                            </p>
                            <p>
                                {background_desc}
                            </p>
                        </div>
                    )}
                    {edit.background && (
                        <div>
                            <input
                                type="text"
                                placeholder="Type"
                                defaultValue={background_type || ""}
                                onBlur={(event => handleBlur(event, "background_type"))}
                                className="traits"
                                />
                            <textarea 
                                rows="10"
                                placeholder="Description"
                                defaultValue={background_desc || ""}
                                onBlur={(event => handleBlur(event, "background_desc"))}
                                className="traits"
                            ></textarea>
                        </div>
                    )}
                </Card>

                <Card className="traits">
                    <h6 className="header">Description</h6>
                    {!edit.description && (
                        <p 
                            onClick={() => handleClick("description")}
                            className="trait"
                        >
                            {description}
                        </p>
                    )}
                    {edit.description && (
                        <textarea 
                            rows="5"
                            placeholder="Description"
                            defaultValue={description || ""}
                            onBlur={(event => handleBlur(event, "description"))}
                            className="traits"
                        ></textarea>
                    )}
                </Card>

                <Card className="traits">
                    <h6 className="header">Backstory</h6>
                    {!edit.backstory && (
                        <p 
                            onClick={() => handleClick("backstory")}
                            className="trait"
                        >
                            {backstory}
                        </p>
                    )}
                    {edit.backstory && (
                        <textarea 
                            rows="10"
                            placeholder="Backstory"
                            defaultValue={backstory || ""}
                            onBlur={(event => handleBlur(event, "backstory"))}
                            className="traits"
                        ></textarea>
                    )}
                </Card>
            </div>

        </>
    );
};

export default CharacterTraits;
