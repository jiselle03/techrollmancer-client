import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Session } from '../../api/session';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LockIcon from '@material-ui/icons/Lock';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';

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
            <main className="Main">
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
                                <LockIcon id="password-icon" />
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

            </main>
        </div>
    );
};
