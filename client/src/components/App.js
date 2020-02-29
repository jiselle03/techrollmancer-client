import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { CircularProgress } from '@material-ui/core';
import { User } from '../api/user';
import { Session } from '../api/session';
import { NavBar } from './NavBar';
import { AuthRoute } from './AuthRoute';
import { SignUpPage } from './user/SignUpPage';
import { SignInPage } from './user/SignInPage';

import { WelcomePage } from './other/WelcomePage';
import { GeneratorPage } from './other/GeneratorPage';
import { SchedulerPage } from './other/SchedulerPage';
import { NotFoundPage } from './other/NotFoundPage';

import { LibrariesIndexPage } from './library/LibrariesIndexPage';
import { RaceIndexPage } from './library/RaceIndexPage';
import { RaceShowPage } from './library/RaceShowPage';
import { ClassIndexPage } from './library/ClassIndexPage';
import { ClassShowPage } from './library/ClassShowPage';
import { SpellIndexPage } from './library/SpellIndexPage';
import { SpellShowPage } from './library/SpellShowPage';
import { EquipmentShowPage } from './library/EquipmentShowPage';
import { EquipmentIndexPage } from './library/EquipmentIndexPage';
import { AdventuringGearIndexPage } from './library/AdventuringGearIndexPage';
import { MountVehicleIndexPage } from './library/MountVehicleIndexPage';
import { ToolIndexPage } from './library/ToolIndexPage';
import { WeaponIndexPage } from './library/WeaponIndexPage';
import { ArmorIndexPage } from './library/ArmorIndexPage';
import { ConditionIndexPage } from './library/ConditionIndexPage';

import { CharacterIndexPage } from './character/pages/CharacterIndexPage';
import { CharacterShowPage } from './character/pages/CharacterShowPage';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getUser = useCallback(() => {
    User.current().then(data => {
      if (typeof data.id !== "number") {
        setCurrentUser(null);
        setIsLoading(false);
      } else {
        setCurrentUser(data);
        setIsLoading(false);
      };
    });
  }, []);

  const destroySession = () => {
    Session.destroy().then(setCurrentUser(null));
  };

  useEffect(() => {
    getUser();
  }, [getUser]);
  
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
        <Switch>
          <Route exact path="/" component={WelcomePage} />
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
            isAuthenticated={!!currentUser}
            render={routeProps => (
              <CharacterIndexPage {...routeProps} currentUser={currentUser} />
            )}
            exact path="/characters"
          />
          <AuthRoute 
            isAuthenticated={!!currentUser}
            component={CharacterShowPage}
            exact path="/characters/:id"
          />
          <AuthRoute 
            isAuthenticated={!!currentUser}
            component={SchedulerPage}
            path="/scheduler"
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
  