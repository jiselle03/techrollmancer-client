import React from 'react';

import { User } from '../../api/user';

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
        <div className="Main">
            <h1 className="ui center aligned header">Sign Up</h1>
            <form className="ui large form" onSubmit={handleSubmit}>
                <div className="field">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" required />
                </div>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required />
                </div>
                <div className="field">
                    <label htmlFor="password_confirmation">Password Confirmation</label>
                    <input type="password" name="password_confirmation" id="password_confirmation" required />
                </div>
                <button className="ui right floated orange button" type="submit">Sign Up</button>
            </form>
        </div>
    );
};
