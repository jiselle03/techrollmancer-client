import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Session from '../../api/session';
import { BackgroundImage } from '../styles/Image';
import Container from '../styles/Container';
import { Form, FormContainer, FormContent } from '../styles/Form';
import FlexBox from '../styles/FlexBox';

import { Card, Button, Divider, FormControl, Input, InputAdornment, InputLabel } from '@material-ui/core';
import { AccountCircle, Lock } from '@material-ui/icons';

const SignInPage = props => {
    const [errors, setErrors] = useState([]);

    const fields = [
        {
            label: "Username",
            name: "username",
            type: "text",
            icon: "account"
        },
        {
            label: "Password",
            name: "password",
            type: "password",
            icon: "lock"
        }
    ];

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
                if (typeof props.onSignIn === "function") {
                    props.onSignIn();
                };
                props.history.push("/");
            };
        });
    };

    return (
        <BackgroundImage
            image="https://i.ibb.co/cctCwgk/d20.png"
        >
            <Container
                style={{overflow: "hidden"}}
            >
                <FormContainer
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

                        <Form onSubmit={createSession}>
                            { errors.length > 0 ? (
                                <div>
                                    <div className="header">
                                        Failed to sign in: { errors.map(error => error.message).join(", ") }
                                    </div>
                                </div>
                            ): "" }

                            {fields.map(field => (
                                <FormControl key={field.name} style={FormContent.field}>
                                    <InputLabel htmlFor={field.name}>{field.label}*</InputLabel>
                                    <Input
                                        type={field.type}
                                        name={field.name}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                {field.icon === "account" && (
                                                    <AccountCircle style={FormContent.icon} />
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
                                    Sign In
                                </Button>

                            </FlexBox>
                        </Form>

                        <Divider variant="middle" />
                        
                        <FlexBox
                            justifyContent="center"
                        >
                            <p>
                                Don't have an account? <Link to="/sign_up" style={FormContent.link}>SIGN UP</Link>
                            </p>
                        </FlexBox>
                    </Card>
                </FormContainer>

            </Container>
        </BackgroundImage>
    );
};

export default SignInPage;
