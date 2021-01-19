import React from 'react';
import { Link } from 'react-router-dom';

import User from '../../api/user';
import { BackgroundImage } from '../styles/Image';
import MainStyle from '../styles/MainStyle';
import { FormStyle, FormContent } from '../styles/FormStyle';

import { Button, Card, Divider, FormControl, Input, InputAdornment, InputLabel } from '@material-ui/core';
import { AccountCircle, Email, Lock } from '@material-ui/icons';
import FlexBox from '../styles/FlexBox';

const SignUpPage = props => {
    const fields = [
        {
            label: "Username",
            name: "username",
            type: "text",
            icon: "account"
        },
        {
            label: "Email",
            name: "email",
            type: "email",
            icon: "email"
        },
        {
            label: "Password",
            name: "password",
            type: "password",
            icon: "lock"
        },
        {
            label: "Password Confirmation",
            name: "password_confirmation",
            type: "password",
            icon: "lock"
        }
    ];

    const handleSubmit = event => {
        event.preventDefault();
        const { currentTarget: form } = event;
        const fd = new FormData(form);
        const newUser = {
            user:{
                username: fd.get("username"),
                email: fd.get("email"),
                password: fd.get("password"),
                password_confirmation: fd.get("password_confirmation")
            }
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
            image="https://i.ibb.co/cctCwgk/d20.png"
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
                            {fields.map(field => (
                                <FormControl key={field.name} style={FormContent.field}>
                                    <InputLabel htmlFor={field.name}>{field.label}*</InputLabel>
                                    <Input
                                        name={field.name}
                                        type="text"
                                        startAdornment={
                                            <InputAdornment position="start">
                                                {field.icon === "account" && (
                                                    <AccountCircle style={FormContent.icon} />
                                                )}
                                                {field.icon === "email" && (
                                                    <Email style={FormContent.icon} />
                                                )}
                                                {field.icon === "lock" && (
                                                    <Lock style={FormContent.icon} />
                                                )}
                                            </InputAdornment>
                                        }
                                        placeholder={field.label}
                                        required
                                    />
                                </FormControl>
                            ))}

                            <FlexBox
                                justifyContent="center"
                            >
                                <Button 
                                    variant="contained" 
                                    color="secondary"
                                    type="submit" 
                                    className="button"
                                >
                                    SIGN UP
                                </Button>
                            </FlexBox>
                        </form>

                        <Divider variant="middle" />

                        <FlexBox
                            justifyContent="center"
                        >
                            <p>
                                Already have an account? <Link to="/sign_in" style={FormContent.link}>SIGN IN</Link>
                            </p>
                        </FlexBox>
                    </Card>
                </FormStyle>
            </MainStyle>
        </BackgroundImage>
    );
};

export default SignUpPage;
