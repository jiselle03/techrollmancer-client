import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';

import User from '../api/user';
import Session from '../api/session';
import NavBar from './other/NavBar';
import AuthRoute from './other/AuthRoute';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';

import WelcomePage from './pages/WelcomePage';
import GeneratorPage from './pages/GeneratorPage';
import SchedulerPage from './pages/SchedulerPage';
import NotFoundPage from './pages/NotFoundPage';

import LibrariesIndexPage from './pages/LibrariesIndexPage';
import RaceIndexPage from './pages/RaceIndexPage';
import RaceShowPage from './pages/RaceShowPage';
import ClassIndexPage from './pages/ClassIndexPage';
import ClassShowPage from './pages/ClassShowPage';
import SpellIndexPage from './pages/SpellIndexPage';
import SpellShowPage from './pages/SpellShowPage';
import EquipmentShowPage from './pages/EquipmentShowPage';
import EquipmentIndexPage from './pages/EquipmentIndexPage';
import AdventuringGearIndexPage from './pages/AdventuringGearIndexPage';
import MountVehicleIndexPage from './pages/MountVehicleIndexPage';
import ToolIndexPage from './pages/ToolIndexPage';
import WeaponIndexPage from './pages/WeaponIndexPage';
import ArmorIndexPage from './pages/ArmorIndexPage';
import ConditionIndexPage from './pages/ConditionIndexPage';

import CharacterIndexPage from './pages/CharacterIndexPage';
import CharacterShowPage from './pages/CharacterShowPage';

import { CircularProgress } from '@material-ui/core';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getUser = useCallback(() => {
    User.current().then(data => {
      typeof data.id !== "number" ? setCurrentUser(null) : setCurrentUser(data);
      setIsLoading(false);
    });
  }, []);

  const destroySession = () => Session.destroy().then(setCurrentUser(null));

  useEffect(() => getUser(), [getUser]);
  
  if(isLoading) {
    return(
      <CircularProgress variant="determinate" />
    );
  };
      
  return (
    <BrowserRouter>
        <header>
          <NavBar 
            currentUser={currentUser} 
            onSignOut={destroySession} 
          />
        </header>
        <ReactNotification />
        <Switch>
          <Route exact path="/" component={WelcomePage}/>
          <Route exact path="/libraries" component={LibrariesIndexPage} />
          <Route exact path="/libraries/races" component={RaceIndexPage} />
          <Route path="/libraries/races/:slug" component={RaceShowPage} />
          <Route exact path="/libraries/classes" component={ClassIndexPage} />
          <Route path="/libraries/classes/:slug" component={ClassShowPage} />
          <Route exact path="/libraries/spells" component={SpellIndexPage} />
          <Route path="/libraries/spells/:slug" component={SpellShowPage} />
          <Route exact path="/libraries/equipment/adventuring-gear" component={AdventuringGearIndexPage} />
          <Route exact path="/libraries/equipment/mounts-and-vehicles" component={MountVehicleIndexPage} />
          <Route exact path="/libraries/equipment/tools" component={ToolIndexPage} />
          <Route exact path="/libraries/equipment/weapons" component={WeaponIndexPage} />
          <Route exact path="/libraries/equipment/armor" component={ArmorIndexPage} />
          <Route exact path="/libraries/equipment" component={EquipmentIndexPage} />
          <Route path="/libraries/equipment/:slug" component={EquipmentShowPage} />
          <Route exact path="/libraries/conditions" component={ConditionIndexPage} />
          <AuthRoute 
            exact path="/characters"
            isAuthenticated={!!currentUser}
            render={routeProps => (
              <CharacterIndexPage {...routeProps} currentUser={currentUser} />
            )}
          />
          <AuthRoute 
            exact path="/characters/:id"
            isAuthenticated={!!currentUser}
            component={CharacterShowPage}
          />
          <AuthRoute 
            path="/scheduler"
            isAuthenticated={!!currentUser}
            render={routeProps => (
              <SchedulerPage {...routeProps} currentUser={currentUser} />
            )}
        />
          <Route 
            path="/sign_in"
            render={routeProps => (
              <SignInPage {...routeProps} onSignIn={getUser} />
            )}  
          />
          <Route 
            path="/sign_up"
            render={routeProps => (
              <SignUpPage {...routeProps} onSignUp={getUser} />
            )}  
          />
          <Route 
            path="/generator"
            component={GeneratorPage}  
          />
          <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
  );
};
  
export default App;
  