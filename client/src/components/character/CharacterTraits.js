import React, { useState } from 'react';

import { Character } from '../../api/character';
import { FlexBox } from '../styles/FlexBox';

import Card from '@material-ui/core/Card';

export const CharacterTraits = props => {
    const [editProfile, setEditProfile] = useState(false);
    const [editPhoto, setEditPhoto] = useState(false);

    const { handleRefresh } = props;
    const { id, name, gender, race, photo_url,
            class_1, class_2, class_3,
            class_1_level, class_2_level, class_3_level } = props.character;
    const { description, backstory, personality_traits, ideals, bonds, flaws, 
            background_type, background_desc } = props.character.trait;

    const handleClickProfile = () => {
        setEditProfile(true);
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
            setEditProfile(false);
        }).then(() => {
            handleRefresh();
        });
    };

    const handleClickPhoto = () => {
        setEditPhoto(true);
    }; 

    const handleBlurPhoto = event => {
        const { currentTarget } = event;

        Character.update(id, {photo_url: currentTarget.value})
            .then(() => {
                setEditPhoto(false);
            }).then(() => {
                handleRefresh();
            });
    };

    return (
        <>
            <h1>
                {name.toUpperCase()}
            </h1>

            <div className="character-sheet">
                <Card
                    
                    className="traits-container"
                    onClick={handleClickPhoto}
                >
                    <h6 className="header">Photo</h6>
                    <div
                        style={{
                        backgroundImage: `url(${photo_url})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        }}
                        className="trait large"
                    >
                    </div>
                    {editPhoto && (
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
                    <div className="trait large" onClick={() => handleClickProfile()}>
                        {!editProfile && (
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

                        {editProfile && (
                            <form onBlur={event => handleBlurProfile(event)}>
                                <label htmlFor="name" className="traits">Name</label>
                                <input 
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    defaultValue={name}
                                    required
                                    className="traits"
                                />
                                <label htmlFor="gender" className="traits">Gender</label>
                                <input 
                                    type="text"
                                    name="gender"
                                    placeholder="Gender"
                                    defaultValue={gender}
                                    className="traits"
                                />
                                <label htmlFor="race" className="traits">Race</label>
                                <input 
                                    type="text"
                                    name="race"
                                    placeholder="Race"
                                    defaultValue={race}
                                    required
                                    className="traits"
                                />
                                <label htmlFor="class" className="traits">Class</label>
                                <FlexBox direction="row" justifyContent="space-around">
                                <input 
                                    type="text"
                                    name="class_1"
                                    placeholder="Class 1"
                                    defaultValue={class_1}
                                    className="traits flex"
                                    required
                                />
                                <input 
                                    type="number"
                                    step="1"
                                    min="1"
                                    max="20"
                                    name="class_1_level"
                                    placeholder="Class 1 Level"
                                    defaultValue={class_1_level}
                                    className="traits flex"
                                    required
                                />
                                </FlexBox>
                                <FlexBox direction="row" justifyContent="space-around">
                                <input 
                                    type="text"
                                    name="class_2"
                                    placeholder="Class 2"
                                    defaultValue={class_2 || ""}
                                    className="traits flex"
                                />
                                <input 
                                    type="number"
                                    step="1"
                                    name="class_2_level"
                                    placeholder="Class 2 Level"
                                    defaultValue={class_2_level || ""}
                                    className="traits flex"
                                />
                                </FlexBox>
                                <FlexBox direction="row" justifyContent="space-around">
                                <input 
                                    type="text"
                                    name="class_3"
                                    placeholder="Class 3"
                                    defaultValue={class_3 || ""}
                                    className="traits flex"
                                />
                                <input 
                                    type="number"
                                    step="1"
                                    name="class_3_level"
                                    placeholder="Level"
                                    defaultValue={class_3_level || ""}
                                    className="traits flex"
                                />
                                </FlexBox>
                            </form>
                        )}
                    </div>
                </Card>

                <Card className="traits">
                    <h6 className="header">Personality Traits</h6>
                    <p className="trait">{personality_traits}</p>

                    <h6 className="header">Ideals</h6>
                    <p className="trait">{ideals}</p>

                    <h6 className="header">Bonds</h6>
                    <p className="trait">{bonds}</p>

                    <h6 className="header">Flaws</h6>
                    <p className="trait">{flaws}</p>
                </Card>

                <Card className="traits">
                    <h6 className="header">Background</h6>
                    <p className="trait"><strong>{background_type}</strong><br />
                    {background_desc}</p>
                </Card>

                <Card className="traits">
                    <h6 className="header">Description</h6>
                    <p className="trait">{description}</p>
                </Card>

                <Card className="traits">
                    <h6 className="header">Backstory</h6>
                    <p className="trait">{backstory}</p>
                </Card>
            </div>

        </>
    );
};
