import React, { Fragment, useState, useEffect } from 'react';

import Library from '../../api/library';
import Spell from '../../api/spell';
import SpellListItem from '../other/SpellListItem';
import FloatingActionButton from '../other/FloatingActionButton';
import { FadeContent, Fade } from '../styles/Fade';
import { FormContainer, Form, SpellForm } from '../styles/Form';
import Container from '../styles/Container';
import { Heading } from '../styles/Typography';

import { Backdrop, Button, FormControl, FormGroup, FormLabel, Modal } from '@material-ui/core';

const CharacterSpellsNew = props => {
    const [spells, setSpells] = useState([]);
    const [open, setOpen] = useState(false);
    const [newSpells, setNewSpells] = useState([]);

    const { character, levels } = props;
    const ids = character.spells.map(spell => spell.id);
      
    const handleOpen = () => {
        setNewSpells(ids);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    const handleChange =  event => {
        event.preventDefault();
        const { id } = event.target.parentNode.parentNode.dataset;
        const { checked } = event.target;
        
        if (checked) {
            setNewSpells([...newSpells, parseInt(id)]);
        } else {
            const filteredSpells = newSpells.filter(spellId => spellId !== parseInt(id));
            setNewSpells(filteredSpells);
        };
    };

    const handleSubmit = event => {
        event.preventDefault();
        Spell.update(character.id, newSpells)
        .then(() => {
            props.handleRefresh();
            setOpen(false);
        });
    };

    useEffect(() => { 
        Library.allSpells().then(spells => {
            setNewSpells(ids);
            setSpells(spells);
        });
    }, []);

    return(
        <>
            <FloatingActionButton icon="edit" onHandleOpen={handleOpen} />
    
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                style={{overflow:"scroll"}}
            >
                <Fade in={open} display= "flex" alignItems="center" justifyContent="center">
                    <FormContainer padding="0.5em">
                        <Form onSubmit={handleSubmit}>
                            <SpellForm>
                                <Heading as="h3" className="title">Spell List</Heading>
                                <Button 
                                    variant="contained" 
                                    color="secondary"
                                    type="submit" 
                                    className="button"
                                >
                                    SAVE
                                </Button>

                                <Button
                                    variant="contained" 
                                    color="secondary"
                                    onClick={handleClose}
                                    className="button"
                                >
                                    CANCEL
                                </Button>
                            </SpellForm>
                            <FadeContent align="left"> 
                                <Container>
                                    {levels.map((level, index) => (
                                        <Fragment key={index}>
                                            <FormControl component="fieldset" key={index}>
                                                <FormLabel component="legend">{level}</FormLabel>
                                                <FormGroup>
                                                {spells && spells.map(spell => (
                                                        spell.level_int === index && (
                                                            <SpellListItem 
                                                                key={spell.id} 
                                                                data-id={spell.id}
                                                                onHandleChange={handleChange} 
                                                                characterSpells={newSpells} 
                                                                spell={spell} 
                                                            />
                                                        )
                                                    ))}
                                                </FormGroup>
                                            </FormControl>
                                            <br />
                                        </Fragment>
                                    ))}
                                </Container>      
                            </FadeContent>
                        </Form>
                    </FormContainer>
                </Fade>
            </Modal>
        </>
        
    );
};

export default CharacterSpellsNew;
