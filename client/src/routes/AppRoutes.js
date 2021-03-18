import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AuthRoute from './AuthRoute';
import SignUpPage from '../components/pages/auth/SignUpPage';
import SignInPage from '../components/pages/auth/SignInPage';

import WelcomePage from '../components/pages/WelcomePage';
import GeneratorPage from '../components/pages/GeneratorPage';
import SchedulerPage from '../components/pages/SchedulerPage';
import NotFoundPage from '../components/pages/NotFoundPage';

import LibrariesIndexPage from '../components/pages/library/LibrariesIndexPage';
import RaceIndexPage from '../components/pages/library/RaceIndexPage';
import RaceShowPage from '../components/pages/library/RaceShowPage';
import ClassIndexPage from '../components/pages/library/ClassIndexPage';
import ClassShowPage from '../components/pages/library/ClassShowPage';
import SpellIndexPage from '../components/pages/library/SpellIndexPage';
import SpellShowPage from '../components/pages/library/SpellShowPage';
import EquipmentShowPage from '../components/pages/library/EquipmentShowPage';
import EquipmentIndexPage from '../components/pages/library/EquipmentIndexPage';
import AdventuringGearIndexPage from '../components/pages/library/AdventuringGearIndexPage';
import MountVehicleIndexPage from '../components/pages/library/MountVehicleIndexPage';
import ToolIndexPage from '../components/pages/library/ToolIndexPage';
import WeaponIndexPage from '../components/pages/library/WeaponIndexPage';
import ArmorIndexPage from '../components/pages/library/ArmorIndexPage';
import ConditionIndexPage from '../components/pages/library/ConditionIndexPage';

import CharacterIndexPage from '../components/pages/character/CharacterIndexPage';
import CharacterShowPage from '../components/pages/character/CharacterShowPage';

const AppRoutes = () => {
    return (
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
              render={routeProps => (
                <CharacterIndexPage {...routeProps} />
              )}
            />
            <AuthRoute 
              exact path="/characters/:id"
              component={CharacterShowPage}
            />
            <AuthRoute 
              path="/scheduler"
              render={routeProps => <SchedulerPage {...routeProps} />}
          />
            <Route 
              path="/sign_in"
              render={routeProps => <SignInPage {...routeProps} />}  
            />
            <Route 
              path="/sign_up"
              render={routeProps => (
                <SignUpPage {...routeProps} />
              )}  
            />
            <Route 
              path="/generator"
              render={routeProps => (
                <GeneratorPage {...routeProps} />
              )} 
            />
            <Route component={NotFoundPage} />
        </Switch>
    );
};

export default AppRoutes;
