import React from 'react';
import { Link } from 'react-router-dom';

import { User } from '../../api/user';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';

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
        <div className="signup-background SignUp">
            <main className="Main">
                <Card id="signup-form">
                    <h2 className="center">Create an Account</h2>
                    <FormControl>
                        <InputLabel htmlFor="username">Username*</InputLabel>
                        <Input
                        id="username"
                        type="text"
                        startAdornment={
                            <InputAdornment position="start">
                            <AccountCircle id="account-icon" />
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
                            <EmailIcon id="email-icon" />
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
                            <LockIcon id="password-icon" />
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
                            <LockIcon id="password-icon" />
                            </InputAdornment>
                        }
                        placeholder="Password Confirmation"
                        required
                        />
                    </FormControl>

                    <div className="center">
                        <button className="button" onClick={handleSubmit}>SIGN UP</button>
                    </div>

                    <Divider variant="middle" />

                    <p className="center">Don't have an account? <Link to="/sign_in" className="signin-link">SIGN IN</Link></p>
                </Card>
            </main>
        </div>
    );
};
