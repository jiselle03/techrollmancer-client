import React from 'react';
import { Link } from 'react-router-dom';

import { User } from '../../api/user';
import { BackgroundImage } from '../styles/BackgroundImage';
import { MainStyle } from '../styles/MainStyle';
import { FormStyle, FormContent } from '../styles/FormStyle';
import { ButtonStyle } from '../styles/ButtonStyle';

import { Button, Card, Divider, FormControl, Input, InputAdornment, InputLabel } from '@material-ui/core';
import { AccountCircle, Email, Lock } from '@material-ui/icons';
import { FlexBox } from '../styles/FlexBox';

export const SignUpPage = props => {
    const handleSubmit = event => {
        event.preventDefault();
        const { currentTarget: form } = event;
        const fd = new FormData(form);
        const newUser = {
            username: fd.get("username"),
            email: fd.get("email"),
            password: fd.get("password"),
            password_confirmation: fd.get("password_confirmation")
        };
        
        User.create(newUser).then(res => {
            if (res.id) {
                if (typeof props.onSignUp === "function") {
                    props.onSignUp();
                };
                props.history.push("/");
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
                    padding="1em"
                    margin="auto"
                >
                    <Card style={{
                            boxShadow: "5px 0 5px -2px #888", 
                            padding: "1em 0"
                        }}
                    >
                        <h3 style={{paddingLeft: "0.75em"}}>
                            Create an Account
                        </h3>

                        <form onSubmit={handleSubmit}>
                        <FormControl style={FormContent.field}>
                            <InputLabel htmlFor="username">Username*</InputLabel>
                            <Input
                            id="username"
                            name="username"
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

                        <FormControl style={FormContent.field}>
                            <InputLabel htmlFor="email">Email</InputLabel>
                            <Input
                            id="email"
                            name="email"
                            type="email"
                            startAdornment={
                                <InputAdornment position="start">
                                    <Email style={FormContent.icon} />
                                </InputAdornment>
                            }
                            placeholder="Email Address"
                            />
                        </FormControl>

                        <FormControl style={FormContent.field}>
                            <InputLabel htmlFor="password">Password*</InputLabel>
                            <Input
                            id="password"
                            name="password"
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

                        <FormControl style={FormContent.field}>
                            <InputLabel htmlFor="password_confirmation">Password Confirmation*</InputLabel>
                            <Input
                            id="password_confirmation"
                            name="password_confirmation"
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
                            <Button variant="contained" type="submit" style={ButtonStyle.formButton}>
                                SIGN UP
                            </Button>
                        </FlexBox>
                        </form>

                        <Divider variant="middle" />

                        <FlexBox
                            justifyContent="center"
                        >
                            <p>
                                Don't have an account? <Link to="/sign_in" style={FormContent.link}>SIGN IN</Link>
                            </p>
                        </FlexBox>
                    </Card>
                </FormStyle>
            </MainStyle>
        </BackgroundImage>
    );
};
