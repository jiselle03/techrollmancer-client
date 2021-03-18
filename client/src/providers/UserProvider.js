import React, { createContext, useCallback, useEffect, useState } from 'react';

import { CircularProgress } from '@material-ui/core';

import User from '../api/user';

export const UserState = createContext({
    currentUser: null,
    setIsSignedIn: () => {},
});
const { Provider } = UserState;

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSignedIn, setIsSignedIn] = useState(false);

    const getUser = useCallback(() => {
        User
          .current()
          .then(user => typeof user.id !== "number" ? setCurrentUser(null) : setCurrentUser(user))
          .then(() => setIsLoading(false));
    }, [isSignedIn]);

    useEffect(() => {
        getUser();
        setIsSignedIn();
    }, [getUser]);

    return (
        <Provider value={{ currentUser, setIsSignedIn }}>
            {isLoading ? <CircularProgress variant="determinate" /> : children}
        </Provider>
    );
};

export default UserProvider;
