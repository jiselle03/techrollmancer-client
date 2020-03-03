import React, { useState } from 'react';

import { Character } from '../../api/character';
import { FloatingActionButton } from './FloatingActionButton';
import { FormStyle, FormContent } from '../styles/FormStyle';
import { FlexBox } from '../styles/FlexBox';
import { FadeStyle, Fade } from '../styles/FadeStyle';

import { Backdrop, Button, FormControl, Input, InputLabel, Modal } from '@material-ui/core';

import PropTypes from 'prop-types';

Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
};

export const CharacterNew = props => {
    const [errors, setErrors] = useState([]);
    const [open, setOpen] = useState(false);
    const { currentUser, welcome } = props;

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

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
            cha: fd.get("cha"),
            user_id: currentUser.id
        };
        Character.create(newCharacter).then(data => {
            if (!data.errors) {
                handleClose();
                props.history.push(`/characters/${data.id}`);
                
            } else {
                setErrors(data.errors);
            };
        });
        
        currentTarget.reset();
    };

    return(
        <>
            {!welcome && (
                <FloatingActionButton icon="add" onHandleOpen={handleOpen} />
            )}

            {welcome && (
                <Button 
                    variant="contained" 
                    color="secondary"
                    className="button"
                    onClick={handleOpen}
                >
                    Create
                </Button>
            )}
    
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <FlexBox
                    alignItems="center"
                    justifyContent="center"
                    margin="10vh 0"
                >
                    <Fade in={open}>
                        <FadeStyle>
                            
                        <FormStyle
                            padding="0.5em"
                        >
                            <h3>
                                New Character
                            </h3>

                            <form onSubmit={createCharacter}>
                            { errors.length > 0 ? (
                                <div>
                                    <div className="header">
                                        Creation failed: { errors.map(error => error.message).join(", ") }
                                    </div>
                                </div>
                            ): "" }
                                <FlexBox
                                    direction="row"
                                >
                                    <div>
                                        <FormControl style={FormContent.character}>
                                            <InputLabel htmlFor="name">Name</InputLabel>
                                            <Input
                                                id="name"
                                                type="text"
                                                name="name"
                                                placeholder="Name"
                                                required
                                            />
                                        </FormControl>

                                        <FormControl style={FormContent.character}>
                                            <InputLabel htmlFor="gender">Gender</InputLabel>
                                            <Input
                                                id="gender"
                                                type="text"
                                                name="gender"
                                                placeholder="Gender"
                                                required
                                            />
                                        </FormControl>

                                        <FormControl style={FormContent.character}>
                                            <InputLabel htmlFor="race">Race*</InputLabel>
                                            <Input
                                                id="race"
                                                type="text"
                                                name="race"
                                                placeholder="Race"
                                                required
                                            />
                                        </FormControl>

                                        <FormControl style={FormContent.character}>
                                            <InputLabel htmlFor="class_1">Class*</InputLabel>
                                            <Input
                                                id="class_1"
                                                type="text"
                                                name="class_1"
                                                placeholder="Class"
                                                required
                                            />
                                        </FormControl>

                                        <FormControl style={FormContent.character}>
                                            <InputLabel htmlFor="class_1_level">Level*</InputLabel>
                                            <Input
                                                id="class_1_level"
                                                type="number"
                                                name="class_1_level"
                                                placeholder="1"
                                                step="1"
                                                min="1"
                                                max="20"
                                                required
                                            />
                                        </FormControl>
                                    </div>

                                    <div>
                                        <FormControl style={FormContent.stat}>
                                            <InputLabel htmlFor="str">STR*</InputLabel>
                                            <Input
                                                id="str"
                                                type="number"
                                                name="str"
                                                placeholder="8"
                                                step="1"
                                                min="1"
                                                max="20"
                                                required
                                            />
                                        </FormControl>

                                        <FormControl style={FormContent.stat}>
                                            <InputLabel htmlFor="dex">DEX*</InputLabel>
                                            <Input
                                                id="dex"
                                                type="number"
                                                name="dex"
                                                placeholder="8"
                                                step="1"
                                                min="1"
                                                max="20"
                                                required
                                            />
                                        </FormControl>

                                        <FormControl style={FormContent.stat}>
                                            <InputLabel htmlFor="con">CON*</InputLabel>
                                            <Input
                                                id="con"
                                                type="number"
                                                name="con"
                                                placeholder="8"
                                                step="1"
                                                min="1"
                                                max="20"
                                                required
                                            />
                                        </FormControl>

                                        <FormControl style={FormContent.stat}>
                                            <InputLabel htmlFor="int">INT*</InputLabel>
                                            <Input
                                                id="int"
                                                type="number"
                                                name="int"
                                                placeholder="8"
                                                step="1"
                                                min="1"
                                                max="20"
                                                required
                                            />
                                        </FormControl>

                                        <FormControl style={FormContent.stat}>
                                            <InputLabel htmlFor="wis">WIS*</InputLabel>
                                            <Input
                                                id="wis"
                                                type="number"
                                                name="wis"
                                                placeholder="8"
                                                step="1"
                                                min="1"
                                                max="20"
                                                required
                                            />
                                        </FormControl>

                                        <FormControl style={FormContent.stat}>
                                            <InputLabel htmlFor="cha">CHA*</InputLabel>
                                            <Input
                                                id="cha"
                                                type="number"
                                                name="cha"
                                                placeholder="8"
                                                step="1"
                                                min="1"
                                                max="20"
                                                required
                                            />
                                        </FormControl>
                                    </div>
                                </FlexBox>

                                <br />

                                <FlexBox
                                    justifyContent="center"
                                >
                                    <Button 
                                        variant="contained" 
                                        color="secondary"
                                        type="submit" 
                                        className="button"
                                    >
                                        Add
                                    </Button>

                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        onClick={handleClose}
                                        className="button"
                                    >
                                        CANCEL
                                    </Button>

                                </FlexBox>
                            </form>
                                
                        </FormStyle>
                        </FadeStyle>
                    </Fade>
                </FlexBox>
            </Modal>
        </>
        
    );
};
