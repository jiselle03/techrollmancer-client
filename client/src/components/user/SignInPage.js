import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Session } from '../../api/session';
import { MainStyle } from '../styles/MainStyle';

import { Card, Divider, FormControl, Input, InputAdornment, InputLabel } from '@material-ui/core';
import { AccountCircle, Lock } from '@material-ui/icons';

export const SignInPage = props => {
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
        <div className="signin-background SignIn">
            <MainStyle>
                <Card id="signin-form">
                <h2 className="center">Sign In</h2>
                    <form onSubmit={createSession}>
                    { errors.length > 0 ? (
                        <div>
                            <div className="header">
                                Failed to sign in: { errors.map(error => error.message).join(", ") }
                            </div>
                        </div>
                    ): "" }
                        <FormControl>
                            <InputLabel htmlFor="username">Username*</InputLabel>
                            <Input
                            id="username"
                            type="text"
                            name="username"
                            startAdornment={
                                <InputAdornment position="start">
                                <AccountCircle id="account-icon" />
                                </InputAdornment>
                            }
                            placeholder="Username"
                            required
                            />
                        </FormControl>
                        
                        <br />

                        <FormControl>
                            <InputLabel htmlFor="password">Password*</InputLabel>
                            <Input
                            id="password"
                            type="password"
                            name="password"
                            startAdornment={
                                <InputAdornment position="start">
                                <Lock id="password-icon" />
                                </InputAdornment>
                            }
                            placeholder="Password"
                            required
                            />
                        </FormControl>

                        <div className="center">
                            <button className="button">SIGN IN</button>
                        </div>
                    </form>

                    <Divider variant="middle" />

                    <p className="center">Don't have an account? <Link to="/sign_up" className="signup-link">SIGN UP</Link></p>
                </Card>

            </MainStyle>
        </div>
    );
};
