import React, { createContext, useCallback, useEffect, useState } from 'react';

import { CircularProgress } from '@material-ui/core';

import User from '../api/user';

export const UserState = createContext({
    currentUser: null,
    setCurrentUser: () => {},
});
const { Provider } = UserState;

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const getUser = useCallback(() => {
        User.current().then(user => {
          typeof user.id !== "number" ? setCurrentUser(null) : setCurrentUser(user);
          setIsLoading(false);
        });
    }, []);

    useEffect(() => getUser(), [getUser]);

    return (
        <Provider value={{ currentUser, setCurrentUser }}>
            {isLoading ? <CircularProgress variant="determinate" /> : children}
        </Provider>
    );
};

export default UserProvider;
