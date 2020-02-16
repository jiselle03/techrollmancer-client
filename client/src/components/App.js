import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './css/NavBar.css';
// import { CircularProgress } from '@material-ui/core';
import { User } from '../api/user';
import { Session } from '../api/session';
import { NavBar } from './NavBar';
import { AuthRoute } from './AuthRoute';
import { SignUpPage } from './user/SignUpPage';
import { SignInPage } from './user/SignInPage';
import { WelcomePage } from './WelcomePage';
import { NotFoundPage } from './NotFoundPage';

import { Libraries } from './library/Libraries';
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

import { CharacterShowPage } from './character/CharacterShowPage';
import { CharacterNewPage } from './character/CharacterNewPage';
import { CharacterIndexPage } from './character/CharacterIndexPage';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        currentUser: null,
        isLoading: true
      };
    };
  
    getUser = () => {
      User.current().then(data => {
        if (typeof data.id !== "number") {
          this.setState({ currentUser: null, isLoading: false });
        } else {
          this.setState({ currentUser: data, isLoading: false });
        };
      });
    };
  
    destroySession = () => {
      Session.destroy().then(this.setState({ currentUser: null }));
    };
  
    componentDidMount() {
      this.getUser();
    };
  
    render() {
      // if(this.state.isLoading) {
      //   return(
      //     <CircularProgress variant="determinate" />
      //   );
      // };
        
      return (
        <BrowserRouter>
            <header>
              <NavBar 
                currentUser={this.state.currentUser} 
                onSignOut={this.destroySession} 
              />
            </header>
            <Switch>
              <Route exact path="/" component={WelcomePage} />
              <Route exact path="/libraries" component={Libraries} />
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
                isAuthenticated={!!this.state.currentUser}
                component={CharacterNewPage}
                path = "/characters/new"
                exact
              />
              <AuthRoute 
                isAuthenticated={!!this.state.currentUser}
                component={CharacterIndexPage}
                exact path="/characters"
              />
              <AuthRoute 
                isAuthenticated={!!this.state.currentUser}
                component={CharacterShowPage}
                path="/characters/:id"
              />
              <Route 
                path="/sign_in"
                render={routeProps => (
                  <SignInPage {...routeProps} onSignIn={this.getUser} />
                )}  
              />
              <Route 
                path="/sign_up"
                render={routeProps => (
                  <SignUpPage {...routeProps} onSignUp={this.getUser} />
                )}  
              />
              <Route component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
      );
    };
  };
  
  export default App;
  