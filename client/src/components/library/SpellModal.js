import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { FlexBox } from '../styles/FlexBox';
import { FadeStyle } from '../styles/FadeStyle';

import { Backdrop, Modal, Fade } from '@material-ui/core';

const getSpell = slug => {
    return axios.get(`http://localhost:3000/api/v1/libraries/spells/${slug}`);
};

export const SpellModal = props => {
    const [spell, setSpell] = useState({});

    const { open, fadeContent } = props;

    useEffect(() => {
        // console.log(fadeContent)
        getSpell(fadeContent).then(spell => {
            setSpell(spell.data);
        })
    }, []);

    return(
        <>
        hello
        </>
    //     <HtmlTooltip
    //         title={
    //         <React.Fragment>
                
    //         </React.Fragment>
    //         }
    //     >
    //         <Button>HTML</Button>
    //   </HtmlTooltip>
    );
};
