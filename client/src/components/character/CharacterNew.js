import React, { useState, useEffect } from 'react';

import Character from '../../api/character';
import FloatingActionButton from './FloatingActionButton';
import { Form, FormContainer, FormContent } from '../styles/Form';
import FlexBox from '../styles/FlexBox';
import { FadeContent, Fade } from '../styles/Fade';

import { Backdrop, Button, FormControl, Modal, TextField } from '@material-ui/core';

const CharacterNew = props => {
    const [errors, setErrors] = useState([]);
    const [open, setOpen] = useState(false);
    const { currentUser, type, stats } = props;

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        props.open ? setOpen(true) : setOpen(false);
    }, []);

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
            {type === "character" && (
                <FloatingActionButton icon="add" onHandleOpen={handleOpen} />
            )}

    
            {type === "welcome" && (
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
                        <FadeContent>
                            <FormContainer
                                padding="0.5em"
                            >
                                <h3>
                                    New Character
                                </h3>

                                <Form onSubmit={createCharacter}>
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
                                                <TextField
                                                    id="name"
                                                    type="text"
                                                    name="name"
                                                    label="Name"
                                                    placeholder="Name"
                                                    required
                                                />
                                            </FormControl>

                                            <FormControl style={FormContent.character}>
                                                <TextField
                                                    id="gender"
                                                    type="text"
                                                    name="gender"
                                                    label="Gender"
                                                    placeholder="Gender"
                                                    required
                                                />
                                            </FormControl>

                                            <FormControl style={FormContent.character}>
                                                <TextField
                                                    id="race"
                                                    type="text"
                                                    name="race"
                                                    label="Race"
                                                    placeholder="Race"
                                                    defaultValue={stats ? stats._charRace : null}
                                                    required
                                                />
                                            </FormControl>

                                            <FormControl style={FormContent.character}>
                                                <TextField
                                                    id="class_1"
                                                    type="text"
                                                    name="class_1"
                                                    label="Class"
                                                    placeholder="Class"
                                                    defaultValue={stats ? stats._charClass : null}
                                                    required
                                                />
                                            </FormControl>

                                            <FormControl style={FormContent.character}>
                                                <TextField
                                                    id="class_1_level"
                                                    type="number"
                                                    name="class_1_level"
                                                    label="Level"
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
                                                <TextField
                                                    id="str"
                                                    type="number"
                                                    name="str"
                                                    label="STR"
                                                    placeholder="8"
                                                    defaultValue={stats ? stats._roll1 : null}
                                                    step="1"
                                                    min="1"
                                                    max="20"
                                                    required
                                                />
                                            </FormControl>

                                            <FormControl style={FormContent.stat}>
                                                <TextField
                                                    id="dex"
                                                    type="number"
                                                    name="dex"
                                                    label="DEX"
                                                    placeholder="8"
                                                    defaultValue={stats ? stats._roll2 : null}
                                                    step="1"
                                                    min="1"
                                                    max="20"
                                                    required
                                                />
                                            </FormControl>

                                            <FormControl style={FormContent.stat}>
                                                <TextField
                                                    id="con"
                                                    type="number"
                                                    name="con"
                                                    label="CON"
                                                    placeholder="8"
                                                    defaultValue={stats ? stats._roll3 : null}
                                                    step="1"
                                                    min="1"
                                                    max="20"
                                                    required
                                                />
                                            </FormControl>

                                            <FormControl style={FormContent.stat}>
                                                <TextField
                                                    id="int"
                                                    type="number"
                                                    name="int"
                                                    label="INT"
                                                    placeholder="8"
                                                    defaultValue={stats ? stats._roll4 : null}
                                                    step="1"
                                                    min="1"
                                                    max="20"
                                                    required
                                                />
                                            </FormControl>

                                            <FormControl style={FormContent.stat}>
                                                <TextField
                                                    id="wis"
                                                    type="number"
                                                    name="wis"
                                                    label="WIS"
                                                    placeholder="8"
                                                    defaultValue={stats ? stats._roll5 : null}
                                                    step="1"
                                                    min="1"
                                                    max="20"
                                                    required
                                                />
                                            </FormControl>

                                            <FormControl style={FormContent.stat}>
                                                <TextField
                                                    id="cha"
                                                    type="number"
                                                    name="cha"
                                                    label="CHA"
                                                    placeholder="8"
                                                    defaultValue={stats ? stats._roll6 : null}
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
                                </Form>
                                    
                            </FormContainer>
                        </FadeContent>
                    </Fade>
                </FlexBox>
            </Modal>
        </>
        
    );
};

export default CharacterNew;
