import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { SpellListItem } from './SpellListItem';
import { FormStyle } from '../styles/FormStyle';
import { FlexBox } from '../styles/FlexBox';
import { ButtonStyle } from '../styles/ButtonStyle';
import { FadeStyle, Fade } from '../styles/FadeStyle';

import { Backdrop, Button, Fab, FormControl, FormGroup, FormLabel, Modal } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

import PropTypes from 'prop-types';

Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
};

const getSpells = () => {
    return axios.get("http://localhost:3000/api/v1/libraries/spells");
};

const updateSpellList = (id, params) => {
    return fetch(`http://localhost:3000/api/v1/characters/${id}/spells`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
};

export const CharacterSpellSet = props => {
    const [spells, setSpells] = useState([]);
    const [openNew, setOpenNew] = useState(false);
    
    const handleOpenNew = () => {
        setOpenNew(true);
    };
    const handleCloseNew = () => {
        setOpenNew(false);
    };

    const handleUpdateSpellList = event => {
        event.preventDefault();
        const { currentTarget } = event;

        const spellList = spells.map(spell => {
            return spell.is_true;
        });

        updateSpellList(props.character.id, spellList).then(data => {
            props.history.push(`/characters/${data.id}`);
        });
        
        currentTarget.reset();
    };

    useEffect(() => { 
        getSpells().then(spells => {
            setSpells(spells.data);
        });
    }, []);

    const { character } = props;

    return(
        <>
            <Fab 
                variant="extended"
                color="secondary" 
                size="large"
                aria-label="add"
                className="add-button"
                onClick={handleOpenNew}
                style={{
                    position: "fixed",
                    bottom: "40px",
                    right: "40px",
                }}
            >
                <EditIcon 
                    style={{
                        color: "#fff"
                    }}
                />
                Spells
            </Fab>
    
            <Modal
                open={openNew}
                onClose={handleCloseNew}
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
                    <Fade in={openNew}>
                        <FadeStyle
                            align="left"
                        > 
                        <FormStyle
                            padding="0.5em"
                        >
                            <h3>
                                Spell List
                            </h3>

                            <form onSubmit={handleUpdateSpellList}>
                            <FormControl component="fieldset">
                                <FormLabel component="legend">Cantrips</FormLabel>
                                <FormGroup>
                                {spells && (
                                    spells.map(spell => (
                                        spell.level_int === 0 && (
                                            <div key={spell.id}>
                                                <SpellListItem spell={spell} character={character} />
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
                                            <div key={spell.id}>
                                                <SpellListItem spell={spell} character={character} />
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
                                            <div key={spell.id}>
                                                <SpellListItem spell={spell} character={character} />
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
                                            <div key={spell.id}>
                                                <SpellListItem spell={spell} character={character} />
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
                                            <div key={spell.id}>
                                                <SpellListItem spell={spell} character={character} />
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
                                            <div key={spell.id}>
                                                <SpellListItem spell={spell} character={character} />
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
                                            <div key={spell.id}>
                                                <SpellListItem spell={spell} character={character} />
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
                                            <div key={spell.id}>
                                                <SpellListItem spell={spell} character={character} />
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
                                            <div key={spell.id}>
                                                <SpellListItem spell={spell} character={character} />
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
                                            <div key={spell.id}>
                                                <SpellListItem spell={spell} character={character} />
                                            </div>
                                        )
                                    ))
                                )}
                                </FormGroup>
                            </FormControl>

                            <FlexBox
                                justifyContent="center"
                            >
                                <Button variant="contained" type="submit" style={ButtonStyle.modalButton}>
                                    ADD
                                </Button>

                                <Button
                                    onClick={handleCloseNew}
                                    style={ButtonStyle.modalButton}
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
