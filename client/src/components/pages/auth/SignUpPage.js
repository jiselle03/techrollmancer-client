import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import User from '../../../api/user';
import { UserState } from '../../../providers/UserProvider';
import { signUpFields as fields } from '../../../data/userFields';
import { BackgroundImage } from '../../styles/Image';
import { Layout } from '../../styles/Container';
import { Form, FormContainer, FormContent } from '../../styles/Form';
import { Heading, Text } from '../../styles/Typography';

import { Button, Card, Divider, FormControl, Input, InputAdornment, InputLabel } from '@material-ui/core';
import { AccountCircle, Email, Lock } from '@material-ui/icons';
import FlexBox from '../../styles/FlexBox';

const SignUpPage = props => {
    const { setCurrentUser } = useContext(UserState);

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
            if (res.user.id) {
                setCurrentUser(res.user);
                props.history.push("/");
            };
        });
    };

    return (
        <BackgroundImage
            image="https://i.ibb.co/cctCwgk/d20.png"
        >
            <Layout>
                <FormContainer
                    height="85vh"
                    padding="1em"
                    margin="auto"
                >
                    <Card style={{
                            boxShadow: "5px 0 5px -2px #888", 
                            padding: "1em 0"
                        }}
                    >
                        <Heading as="h3" style={{paddingLeft: "0.75em"}}>
                            Create an Account
                        </Heading>

                        <Form onSubmit={handleSubmit}>
                            {fields.map(field => (
                                <FormControl key={field.name} style={FormContent.field}>
                                    <InputLabel htmlFor={field.name}>{field.label}*</InputLabel>
                                    <Input
                                        name={field.name}
                                        type={field.type}
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
                        </Form>

                        <Divider variant="middle" />

                        <FlexBox
                            justifyContent="center"
                        >
                            <Text>
                                Already have an account? <Link to="/sign_in" style={FormContent.link}>SIGN IN</Link>
                            </Text>
                        </FlexBox>
                    </Card>
                </FormContainer>
            </Layout>
        </BackgroundImage>
    );
};

export default SignUpPage;
