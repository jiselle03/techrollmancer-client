import React, { useState, useEffect } from 'react';
import axios from 'axios';

import baseUrl from '../../config';
import SpellListItem from './SpellListItem';
import FloatingActionButton from './FloatingActionButton';
import { FormStyle } from '../styles/FormStyle';
import FlexBox from '../styles/FlexBox';
import { FadeStyle, Fade } from '../styles/FadeStyle';

import { Backdrop, Button, FormControl, FormGroup, FormLabel, Modal } from '@material-ui/core';
import PropTypes from 'prop-types';

Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
};

const CharacterSpellsNew = props => {
    const [spells, setSpells] = useState([]);
    const [open, setOpen] = useState(false);
    const [newSpells, setNewSpells] = useState([]);

    const { character } = props;
    const ids = character.spells.map(spell => spell.id);
    
    const getSpells = () => {
        return axios.get("http://localhost:3000/api/v1/libraries/spells");
    };
    
    const handleOpen = () => {
        setNewSpells(ids);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleChange =  event => {
        event.preventDefault();
        const { id } = event.target.parentNode.parentNode.dataset;
        const { checked } = event.target;
        
        if (checked) {
            setNewSpells([...newSpells, parseInt(id)]);
        } else {
            const filteredSpells = newSpells.filter(spellId => spellId !== parseInt(id));
            setNewSpells(filteredSpells);
        } 
    };

    const handleSubmit = event => {
        event.preventDefault();
        return fetch(`${baseUrl}/characters/${character.id}/character_spells`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({spells: newSpells})
        }).then(res => res.json())
        .then(() => {
            props.handleRefresh();
        }).then(() => {
            setOpen(false);
        });
    };

    useEffect(() => { 
        getSpells().then(spells => {
            setSpells(spells.data);
            setNewSpells(ids);
        });
    }, [open]);

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
                <FlexBox
                    alignItems="center"
                    justifyContent="center"
                >
                    <Fade in={open}>
                        <FormStyle
                            padding="0.5em"
                        >

                            <form onSubmit={handleSubmit}>
                                <div 
                                    style={{
                                        position: "sticky", 
                                        top: "0", 
                                        zIndex: "1",
                                        backgroundColor: "rgba(45,99,127,1)",
                                        padding: "1em",
                                        textAlign: "center",
                                        boxShadow: "0 5px 5px -2px #888",
                                    }}
                                >
                                    <h3 className="title">
                                        Spell List
                                    </h3>
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
                                </div>
                                <FadeStyle
                            align="left"
                        > 
                            <div>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Cantrips</FormLabel>
                                <FormGroup>
                                {spells && (
                                    spells.map(spell => (
                                        spell.level_int === 0 && (
                                            <div key={spell.id} data-id={spell.id}>
                                                <SpellListItem onHandleChange={handleChange} characterSpells={newSpells} spell={spell} />
                                            </div>
                                        )
                                    ))
                                )}
                                </FormGroup>
                            </FormControl>
                            <br />
                            <FormControl component="fieldset">
                                <FormLabel component="legend">1st Level</FormLabel>
                                <FormGroup>
                                {spells && (
                                    spells.map(spell => (
                                        spell.level_int === 1 && (
                                            <div key={spell.id} data-id={spell.id}>
                                                <SpellListItem onHandleChange={handleChange} characterSpells={newSpells} spell={spell} />
                                            </div>
                                        )
                                    ))
                                )}
                                </FormGroup>
                            </FormControl>
                            <br />
                            <FormControl component="fieldset">
                                <FormLabel component="legend">2nd Level</FormLabel>
                                <FormGroup>
                                {spells && (
                                    spells.map(spell => (
                                        spell.level_int === 2 && (
                                            <div key={spell.id} data-id={spell.id}>
                                                <SpellListItem onHandleChange={handleChange} characterSpells={newSpells} spell={spell} />
                                            </div>
                                        )
                                    ))
                                )}
                                </FormGroup>
                            </FormControl>
                            <br />
                            <FormControl component="fieldset">
                                <FormLabel component="legend">3rd Level</FormLabel>
                                <FormGroup>
                                {spells && (
                                    spells.map(spell => (
                                        spell.level_int === 3 && (
                                            <div key={spell.id} data-id={spell.id}>
                                                <SpellListItem onHandleChange={handleChange} characterSpells={newSpells} spell={spell} />
                                            </div>
                                        )
                                    ))
                                )}
                                </FormGroup>
                            </FormControl>
                            <br />
                            <FormControl component="fieldset">
                                <FormLabel component="legend">4th Level</FormLabel>
                                <FormGroup>
                                {spells && (
                                    spells.map(spell => (
                                        spell.level_int === 4 && (
                                            <div key={spell.id} data-id={spell.id}>
                                                <SpellListItem onHandleChange={handleChange} characterSpells={newSpells} spell={spell} />
                                            </div>
                                        )
                                    ))
                                )}
                                </FormGroup>
                            </FormControl>
                            <br />
                            <FormControl component="fieldset">
                                <FormLabel component="legend">5th Level</FormLabel>
                                <FormGroup>
                                {spells && (
                                    spells.map(spell => (
                                        spell.level_int === 5 && (
                                            <div key={spell.id} data-id={spell.id}>
                                                <SpellListItem onHandleChange={handleChange} characterSpells={newSpells} spell={spell} />
                                            </div>
                                        )
                                    ))
                                )}
                                </FormGroup>
                            </FormControl>
                            <br />
                            <FormControl component="fieldset">
                                <FormLabel component="legend">6th Level</FormLabel>
                                <FormGroup>
                                {spells && (
                                    spells.map(spell => (
                                        spell.level_int === 6 && (
                                            <div key={spell.id} data-id={spell.id}>
                                                <SpellListItem onHandleChange={handleChange} characterSpells={newSpells} spell={spell} />
                                            </div>
                                        )
                                    ))
                                )}
                                </FormGroup>
                            </FormControl>
                            <br />
                            <FormControl component="fieldset">
                                <FormLabel component="legend">7th Level</FormLabel>
                                <FormGroup>
                                {spells && (
                                    spells.map(spell => (
                                        spell.level_int === 7 && (
                                            <div key={spell.id} data-id={spell.id}>
                                                <SpellListItem onHandleChange={handleChange} characterSpells={newSpells} spell={spell} />
                                            </div>
                                        )
                                    ))
                                )}
                                </FormGroup>
                            </FormControl>
                            <br />
                            <FormControl component="fieldset">
                                <FormLabel component="legend">8th Level</FormLabel>
                                <FormGroup>
                                {spells && (
                                    spells.map(spell => (
                                        spell.level_int === 8 && (
                                            <div key={spell.id} data-id={spell.id}>
                                                <SpellListItem onHandleChange={handleChange} characterSpells={newSpells} spell={spell} />
                                            </div>
                                        )
                                    ))
                                )}
                                </FormGroup>
                            </FormControl>
                            <br />
                            <FormControl component="fieldset">
                                <FormLabel component="legend">9th Level</FormLabel>
                                <FormGroup>
                                {spells && (
                                    spells.map(spell => (
                                        spell.level_int === 9 && (
                                            <div key={spell.id} data-id={spell.id}>
                                                <SpellListItem onHandleChange={handleChange} characterSpells={newSpells} spell={spell} />
                                            </div>
                                        )
                                    ))
                                )}
                                </FormGroup>
                            </FormControl>
                            </div>
                                        
                            </FadeStyle>
                            </form>
                        </FormStyle>
                    </Fade>
                </FlexBox>
            </Modal>
        </>
        
    );
};

export default CharacterSpellsNew;
