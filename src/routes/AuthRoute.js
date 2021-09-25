import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { UserState } from '../providers/UserProvider';

const AuthRoute = props => {
  const { currentUser } = useContext(UserState);

  const { component: Component, ...routeProps } = props;

  if (!currentUser) {
    return <Redirect to="/sign_in" />;
  } else {
    return <Route {...routeProps} component={Component} />;
  };
};

export default AuthRoute;
