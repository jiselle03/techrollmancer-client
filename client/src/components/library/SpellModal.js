import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { FlexBox } from '../styles/FlexBox';
import { FadeStyle } from '../styles/FadeStyle';

import { Backdrop, Modal, Fade } from '@material-ui/core';

const getSpell = slug => {
    return axios.get(`http://localhost:3000/api/v1/libraries/spells/${slug}`);
};

export const SpellModal = props => {
    const [spell, setSpell] = useState(null);

    const { open, fadeContent } = props;

    useEffect(() => {
        console.log(fadeContent)
        getSpell(fadeContent).then(spell => {
            setSpell(spell.data);
            // console.log(spell.data)
        })
    }, []);

    return(
        <Modal
            open={open}
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
                        {/* <p>{spell.name}</p> */}
                        {/* {console.log(spell)} */}
                    </FadeStyle>
                </Fade>
            </FlexBox>
        </Modal>
    );
};
