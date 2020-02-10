import React, { Component } from 'react';

import { Session } from '../../api/session';

export class SignInPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: []
        };
    };

    createSession = event => {
        event.preventDefault();
        const { currentTarget: form } = event;
        const fd = new FormData(form);
        
        Session.create({
            email: fd.get("email"),
            password: fd.get("password")
        }).then(data => {
            if (data.status === 404) {
                this.setState({
                    errors: [{ message: "Incorrect email or password. Please try again." }]
                });
            } else {
                this.props.history.push("/");
                if (typeof this.props.onSignIn === "function") {
                    this.props.onSignIn();
                };
            };
        });
    };

    render() {
        const { errors } = this.state;

        return (
            <div className="Main">
                <div className="ui placeholder segment Box">
                    <div className="ui two column very relaxed stackable grid">
                        <div className="column">
                            <div className="ui form" onSubmit={this.createSession}>
                                { errors.length > 0 ? (
                                    <div className="ui negative message">
                                        <div className="header">Failed to sign in</div>
                                            <p>{ errors.map(error => error.message).join(", ") }</p>
                                    </div>
                                ): "" }
                                <div className="field">
                                    <label>Username</label>
                                    <div className="ui left icon input">
                                        <input type="text" name="username" id="username" placeholder="Username" />
                                        <i className="user icon"></i>
                                    </div>
                                </div>
                                <div className="field">
                                    <label>Password</label>
                                    <div className="ui left icon input">
                                        <input type="password" name="password" id="password" />
                                        <i className="lock icon"></i>
                                    </div>
                                </div>
                                <input 
                                    className="ui blue submit button"
                                    type="submit"
                                    value="Sign In"
                                />
                            </div>
                        </div>
                        <div className="middle aligned column">
                            <div className="ui big button">
                                <i className="signup icon"></i>
                                Sign Up
                            </div>
                        </div>
                    </div>
                    <div className="ui vertical divider">
                        Or
                    </div>
                </div>
            </div>

        );
    };
};
