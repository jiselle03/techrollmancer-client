import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import { CircularProgress } from '@material-ui/core';

import { User } from '../api/user';
import { Session } from '../api/session';
import { NavBar } from './NavBar';
import { AuthRoute } from './AuthRoute';
import { SignUpPage } from './user/SignUpPage';
import { SignInPage } from './user/SignInPage';
import { WelcomePage } from './WelcomePage';

import { Library } from './library/Library';
import { RaceIndexPage } from './library/RaceIndexPage';
import { RaceShowPage } from './library/RaceShowPage';
import { ClassIndexPage } from './library/ClassIndexPage';
import { ClassShowPage } from './library/ClassShowPage';
import { SpellIndexPage } from './library/SpellIndexPage';
import { SpellShowPage } from './library/SpellShowPage';
import { WeaponIndexPage } from './library/WeaponIndexPage';
import { MagicItemIndexPage } from './library/MagicItemIndexPage';

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
          <div 
            className="site-container" 
            style={{
              display: "flex", 
              flexDirection: "row"
            }}
          >
            <header>
              <NavBar 
                currentUser={this.state.currentUser} 
                onSignOut={this.destroySession} 
              />
            </header>
            <Switch>
              <Route exact path="/" component={WelcomePage} />
              <Route exact path="/library" component={Library} />
              <Route exact path="/library/races" component={RaceIndexPage} />
              <Route path="/library/races/:slug" component={RaceShowPage} />
              <Route exact path="/library/classes" component={ClassIndexPage} />
              <Route path="/library/classes/:slug" component={ClassShowPage} />
              <Route exact path="/library/spells" component={SpellIndexPage} />
              <Route path="/library/spells/:slug" component={SpellShowPage} />
              <Route exact path="/library/weapons" component={WeaponIndexPage} />
              <Route exact path="/library/magic-items" component={MagicItemIndexPage} />
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
              {/* <Route 
                path="/sign_up"
                render={routeProps => (
                  <SignUpPage {...routeProps} onSignUp={this.getUser} />
                )}  
              /> */}
            </Switch>
          </div>
        </BrowserRouter>
      );
    };
  };
  
  export default App;
  