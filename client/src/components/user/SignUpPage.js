import React from 'react';
import { Link } from 'react-router-dom';

import { User } from '../../api/user';
import { BackgroundImage } from '../styles/BackgroundImage';
import { MainStyle } from '../styles/MainStyle';
import { FormStyle, FormContent } from '../styles/FormStyle';
import { ButtonStyle } from '../styles/ButtonStyle';

import { Card, Divider, FormControl, Input, InputAdornment, InputLabel, Typography } from '@material-ui/core';
import { AccountCircle, Email, Lock } from '@material-ui/icons';
import { FlexBox } from '../styles/FlexBox';

export const SignUpPage = props => {
    const handleSubmit = event => {
        event.preventDefault();
        const { currentTarget: form } = event;
        const fd = new FormData(form);
        const newUser = {
            first_name: fd.get("username"),
            email: fd.get("email"),
            password: fd.get("password"),
            password_confirmation: fd.get("password_confirmation")
        };

        User.create(newUser).then(res => {
            if (res.id) {
                if (typeof props.onSignUp === "function") {
                    props.onSignUp();
                }
                props.history.push("/characters");
            };
        });
    };

    return (
        <BackgroundImage
            image={require('../../assets/d20.png')}
        >
            <MainStyle>
                <FormStyle
                    height="85vh"
                    margin="10vh auto"
                >
                    <Card style={{
                            boxShadow: "5px 0 5px -2px #888", 
                            padding: "1em 0"
                        }}
                    >
                        <Typography variant="h3" align="center">
                        Create an Account
                        </Typography>

                        <FormControl>
                            <InputLabel htmlFor="username">Username*</InputLabel>
                            <Input
                            id="username"
                            type="text"
                            startAdornment={
                                <InputAdornment position="start">
                                    <AccountCircle style={FormContent.icon} />
                                </InputAdornment>
                            }
                            placeholder="Username"
                            required
                            />
                        </FormControl>

                        <FormControl>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input
                            id="email"
                            type="email"
                            startAdornment={
                                <InputAdornment position="start">
                                    <Email style={FormContent.icon} />
                                </InputAdornment>
                            }
                            placeholder="Email Address"
                            />
                        </FormControl>

                        <FormControl>
                            <InputLabel htmlFor="password">Password*</InputLabel>
                            <Input
                            id="password"
                            type="password"
                            startAdornment={
                                <InputAdornment position="start">
                                    <Lock style={FormContent.icon} />
                                </InputAdornment>
                            }
                            placeholder="Password"
                            required
                            />
                        </FormControl>

                        <FormControl>
                            <InputLabel htmlFor="password_confirmation">Password Confirmation*</InputLabel>
                            <Input
                            id="password_confirmation"
                            type="password"
                            startAdornment={
                                <InputAdornment position="start">
                                    <Lock style={FormContent.icon} />
                                </InputAdornment>
                            }
                            placeholder="Password Confirmation"
                            required
                            />
                        </FormControl>

                        <FlexBox
                            justifyContent="center"
                        >
                            <button style={ButtonStyle.formButton} onClick={handleSubmit}>SIGN UP</button>
                        </FlexBox>

                        <Divider variant="middle" />

                        <FlexBox
                            justifyContent="center"
                        >
                            <Typography variant="p" style={{marginTop: "1em"}}>
                                Don't have an account? <Link to="/sign_in" className="signin-link">SIGN IN</Link>
                            </Typography>
                        </FlexBox>
                    </Card>
                </FormStyle>
            </MainStyle>
        </BackgroundImage>
    );
};
