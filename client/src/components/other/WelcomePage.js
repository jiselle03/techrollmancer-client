import React, { useState } from 'react';

import { utils } from '../js/utils.js';
import { BackgroundImage } from '../styles/BackgroundImage';
import { MainStyle } from '../styles/MainStyle';
import { CardStyle } from '../styles/CardStyle';
import { FadeStyle } from '../styles/FadeStyle';
import { ButtonStyle } from '../styles/ButtonStyle';
import { FlexBox } from '../styles/FlexBox';

import { Backdrop, Fade, Grid, Modal } from '@material-ui/core';

export const WelcomePage = () => {
    const [open, setOpen] = useState(false);
    const [rolls, setRolls] = useState([]);

    let currentRoll = 0;
    const handleOpen = sides => {
        setOpen(true);
        currentRoll = utils.roll(sides);
        setRolls([...rolls, currentRoll]);
    };

    const handleClose = () => {
        setRolls([]);
        setOpen(false);
    };

    return(
        <BackgroundImage
            image={require('../../assets/d20.png')}
            light={true}
        >
            <MainStyle>
                <h1> Welcome to Techrollmancer</h1>

                <h2>Quick Rolls</h2>
                <Grid container>
                    <div onClick={() => handleOpen(4)}>
                        <CardStyle
                            image={require(`../../assets/dice/d4.png`)}
                            imagePosition="50%"
                            height="7em"
                            width="7em"
                            color="#fff"
                            >
                        </CardStyle>
                    </div>

                    <div onClick={() => handleOpen(4)}>
                        <CardStyle
                            image={require(`../../assets/dice/d6.png`)}
                            imagePosition="50%"
                            height="7em"
                            width="7em"
                            color="#fff"
                            onClick={() => {
                                console.log(currentRoll);

                            }}
                        >
                        </CardStyle>
                    </div>

                    <div onClick={() => handleOpen(8)}>
                        <CardStyle
                            image={require(`../../assets/dice/d8.png`)}
                            imagePosition="50%"
                            height="7em"
                            width="7em"
                            color="#fff"
                        >
                        </CardStyle>
                    </div>

                    <div onClick={() => handleOpen(10)}>
                        <CardStyle
                            image={require(`../../assets/dice/d10.png`)}
                            imagePosition="50%"
                            height="7em"
                            width="7em"
                            color="#fff"
                        >
                        </CardStyle>
                    </div>

                    <div onClick={() => handleOpen(12)}>
                        <CardStyle
                            image={require(`../../assets/dice/d12.png`)}
                            imagePosition="50%"
                            height="7em"
                            width="7em"
                            color="#fff"
                        >
                        </CardStyle>
                    </div>

                    <div onClick={() => handleOpen(20)}>
                        <CardStyle
                            image={require(`../../assets/dice/d20.png`)}
                            imagePosition="50%"
                            height="7em"
                            width="7em"
                            color="#fff"
                        >
                        </CardStyle>
                    </div>
                </Grid>

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
                        margin="20vh 0"
                    >
                        <Fade in={open}>
                            <FadeStyle>
                                <h3>You rolled:</h3>
                                <h2>{rolls}</h2>

                                <button 
                                    onClick={handleClose}
                                    style={ButtonStyle.modalButton}
                                >
                                    EXIT
                                </button>
                            </FadeStyle>
                        </Fade>
                    </FlexBox>
                </Modal>

            </MainStyle>
        </BackgroundImage>
    );
    
};
