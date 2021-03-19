import React, { useContext, useState, useEffect } from 'react';

import Character from '../../api/character';
import { UserState } from '../../providers/UserProvider';
import { newFields } from '../../data/characterFields';
import FloatingActionButton from '../other/FloatingActionButton';
import { Form, FormContainer, FormContent } from '../styles/Form';
import FlexBox from '../styles/FlexBox';
import { FadeContent, Fade } from '../styles/Fade';
import { Heading } from '../styles/Typography';
import Container from '../styles/Container';

import { Backdrop, Button, FormControl, Modal, TextField } from '@material-ui/core';

const CharacterNew = props => {
    const [errors, setErrors] = useState([]);
    const [open, setOpen] = useState(false);
    const { type, stats } = props;
    const { currentUser } = useContext(UserState);

    const fields = newFields(stats);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        props.open ? setOpen(true) : setOpen(false);
    }, [props.open]);

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
            user_id: currentUser.id,
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
                <Fade in={open} margin="5vh 0">
                    <FadeContent>
                        <FormContainer margin="auto">
                            <Heading as="h3">New Character</Heading>

                            <Form onSubmit={createCharacter}>
                            { errors.length > 0 ? (
                                <Container>
                                    <Container className="header">
                                        Creation failed: { errors.map(error => error.message).join(", ") }
                                    </Container>
                                </Container>
                            ): "" }

                                {fields.map(field => (
                                    field.type === "text" ? (
                                        <FormControl key={field.name} style={field.half ? FormContent.half : FormContent.full}>
                                            <TextField
                                                type="text"
                                                name={field.name}
                                                label={field.label}
                                                placeholder={field.label}
                                                defaultValue={field.defaultValue}
                                                required
                                            />
                                        </FormControl>
                                    ) : (
                                        <FormControl key={field.name} style={FormContent.half}>
                                            <TextField
                                                type="number"
                                                name={field.name}
                                                label={field.label}
                                                defaultValue={field.defaultValue}
                                                required
                                                InputProps={{
                                                    inputProps: { 
                                                        max: 20, min: 1, step: 1
                                                    }
                                                }}
                                            />
                                    </FormControl>
                                    )
                                ))}

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
            </Modal>
        </>
        
    );
};

export default CharacterNew;
