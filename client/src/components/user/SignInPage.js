import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Session from '../../api/session';
import BackgroundImage from '../styles/BackgroundImage';
import MainStyle from '../styles/MainStyle';
import { FormStyle, FormContent } from '../styles/FormStyle';
import FlexBox from '../styles/FlexBox';

import { Card, Button, Divider, FormControl, Input, InputAdornment, InputLabel } from '@material-ui/core';
import { AccountCircle, Lock } from '@material-ui/icons';

const SignInPage = props => {
    const [errors, setErrors] = useState([]);

    const createSession = event => {
        event.preventDefault();
        const { currentTarget: form } = event;
        const fd = new FormData(form);
        setErrors([]);
        
        Session.create({
            username: fd.get("username"),
            password: fd.get("password")
        }).then(data => {
            if (data.status === 404) {
                setErrors([...errors, { message: "Wrong username or password"}]);
            } else {
                props.history.push("/");
                if (typeof props.onSignIn === "function") {
                    props.onSignIn();
                };
            };
        });
    }

    return (
        <BackgroundImage
            image={require('../../assets/d20.png')}
        >
            <MainStyle
                style={{overflow: "hidden"}}
            >
                <FormStyle
                    height="55vh"
                    padding="1em"
                    margin="10vh auto"
                >
                    <Card style={{
                        boxShadow: "5px 0 5px -2px #888", 
                        padding: "1em 0",
                        }}
                    >
                        <h3 style={{paddingLeft: "0.75em"}}>
                            Sign In
                        </h3>

                        <form onSubmit={createSession}>
                        { errors.length > 0 ? (
                            <div>
                                <div className="header">
                                    Failed to sign in: { errors.map(error => error.message).join(", ") }
                                </div>
                            </div>
                        ): "" }
                            <FormControl style={FormContent.field}>
                                <InputLabel htmlFor="username">Username*</InputLabel>
                                <Input
                                id="username"
                                type="text"
                                name="username"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <AccountCircle style={FormContent.icon} />
                                    </InputAdornment>
                                }
                                placeholder="Username"
                                required
                                />
                            </FormControl>
                            
                            <br />

                            <FormControl style={FormContent.field}>
                                <InputLabel htmlFor="password">Password*</InputLabel>
                                <Input
                                id="password"
                                type="password"
                                name="password"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <Lock style={FormContent.icon} />
                                    </InputAdornment>
                                }
                                placeholder="Password"
                                required
                                />
                            </FormControl>

                            <FlexBox
                                justifyContent="center"
                            >
                                <Button 
                                    variant="contained" 
                                    color="secondary"
                                    type="submit" 
                                    className="button"
                                >
                                    Sign In
                                </Button>

                            </FlexBox>
                        </form>

                        <Divider variant="middle" />
                        
                        <FlexBox
                            justifyContent="center"
                        >
                            <p>
                                Don't have an account? <Link to="/sign_up" style={FormContent.link}>SIGN UP</Link>
                            </p>
                        </FlexBox>
                    </Card>
                </FormStyle>

            </MainStyle>
        </BackgroundImage>
    );
};

export default SignInPage;
