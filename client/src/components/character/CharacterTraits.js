import React, { useState } from 'react';

import baseUrl from '../../config';
import Character from '../../api/character';
import FlexBox from '../styles/FlexBox';
import { Form } from '../styles/Form';
import { Heading, Text } from '../styles/Typography';

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
            <Heading>{name.toUpperCase()}</Heading>

            <div className="character-sheet">
                <Card className="traits-container">
                    <Heading as="h6" className="header">Photo</Heading>
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
                    <Heading as="h6" className="header">Profile</Heading>
                    <div className="trait large" onClick={() => handleClick("profile")}>
                        {!edit.profile && (
                            <>
                                <Text className="profile">Name</Text>
                                <Heading as="h6" className="profile">{name}</Heading>

                                {gender && (
                                    <>
                                        <Text className="profile">Gender</Text>
                                        <Heading as="h6" className="profile">{gender}</Heading>
                                    </>
                                )}

                                <Text className="profile">Race</Text>
                                <h6 className="profile">{race}</h6>
                                
                                <Text className="profile">Class</Text>
                                {class_1 && (
                                    <>
                                        <Heading as="h6" className="profile">{class_1} {class_1_level}</Heading>
                                    </>
                                )}
                                {class_2 && (
                                    <>
                                        <Heading as="h6" className="profile">{class_2} {class_2_level}</Heading>
                                    </>
                                )}
                                {class_3 && (
                                    <>
                                        <Heading as="h6" className="profile">{class_3} {class_3_level}</Heading>
                                    </>
                                )}
                            </>
                        )}

                        {edit.profile && (
                            <Form onBlur={event => handleBlurProfile(event)}>
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
                            </Form>
                        )}
                    </div>
                </Card>

                <Card className="traits">
                    <Heading as="h6" className="header">Personality Traits</Heading>
                    {!edit.personality_traits && (
                        <Text 
                            className="trait"
                            onClick={() => handleClick("personality_traits")}
                        >
                            {personality_traits}
                        </Text>
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

                    <Heading as="h6" className="header">Ideals</Heading>
                    {!edit.ideals && (
                        <Text 
                            onClick={() => handleClick("ideals")}
                            className="trait"
                        >
                            {ideals}
                        </Text>
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

                    <Heading as="h6" className="header">Bonds</Heading>
                    {!edit.bonds && (
                        <Text 
                            onClick={() => handleClick("bonds")}
                            className="trait"
                        >
                           {bonds}
                        </Text>
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

                    <Heading as="h6" className="header">Flaws</Heading>
                    {!edit.flaws && (
                        <Text 
                            onClick={() => handleClick("flaws")}
                            className="trait"
                        >
                                {flaws}
                        </Text>
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
                    <Heading as="h6" className="header">Background</Heading>
                    {!edit.background && (
                        <div 
                            onClick={() => handleClick("background")}
                            className="trait"
                        >
                            <Text>
                                <strong>{background_type}</strong>
                            </Text>
                            <Text>
                                {background_desc}
                            </Text>
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
                    <Heading as="h6" className="header">Description</Heading>
                    {!edit.description && (
                        <Text 
                            onClick={() => handleClick("description")}
                            className="trait"
                        >
                            {description}
                        </Text>
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
                    <Heading as="h6" className="header">Backstory</Heading>
                    {!edit.backstory && (
                        <Text 
                            onClick={() => handleClick("backstory")}
                            className="trait"
                        >
                            {backstory}
                        </Text>
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
