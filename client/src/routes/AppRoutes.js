import React from 'react';
import { Route, Switch } from 'react-router-dom';

import urls from '../data/urls.json';

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
            <Route exact path={urls.home} component={WelcomePage}/>
            <Route exact path={urls.libraries.index} component={LibrariesIndexPage} />
            <Route exact path={urls.libraries.races.index} component={RaceIndexPage} />
            <Route path={urls.libraries.races.show} component={RaceShowPage} />
            <Route exact path={urls.libraries.classes.index} component={ClassIndexPage} />
            <Route path={urls.libraries.classes.show} component={ClassShowPage} />
            <Route exact path={urls.libraries.spells.index} component={SpellIndexPage} />
            <Route path={urls.libraries.spells.show} component={SpellShowPage} />
            <Route exact path={urls.libraries.equipment.index} component={EquipmentIndexPage} />
            <Route path={urls.libraries.equipment.show} component={EquipmentShowPage} />
            <Route exact path={urls.libraries.equipment.adventuringGear} component={AdventuringGearIndexPage} />
            <Route exact path={urls.libraries.equipment.armor} component={ArmorIndexPage} />
            <Route exact path={urls.libraries.equipment.mountsAndVehicles} component={MountVehicleIndexPage} />
            <Route exact path={urls.libraries.equipment.tools} component={ToolIndexPage} />
            <Route exact path={urls.libraries.equipment.weapons} component={WeaponIndexPage} />
            <Route exact path={urls.libraries.conditions} component={ConditionIndexPage} />
            <AuthRoute 
              exact path={urls.characters.index}
              render={routeProps => (
                <CharacterIndexPage {...routeProps} />
              )}
            />
            <AuthRoute 
              exact path={urls.characters.show}
              component={CharacterShowPage}
            />
            <Route 
              path={urls.user.signIn}
              render={routeProps => <SignInPage {...routeProps} />}  
            />
            <Route 
              path={urls.user.signUp}
              render={routeProps => <SignUpPage {...routeProps} />}  
            />
            <AuthRoute 
              path={urls.scheduler}
              render={routeProps => <SchedulerPage {...routeProps} />}
            />
            <Route 
              path={urls.generator}
              render={routeProps => <GeneratorPage {...routeProps} />} 
            />
            <Route component={NotFoundPage} />
        </Switch>
    );
};

export default AppRoutes;
