import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
import { UserProvider } from './providers/UserProvider';
import AppRoutes from './routes/AppRoutes';
import NavBar from './components/other/NavBar';
import { ThemeProvider } from 'styled-components';
import theme from './components/styles/Theme';
import GlobalStyles from './components/styles/Global';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <UserProvider>
        <BrowserRouter>
          <GlobalStyles />
          <NavBar />
          <ReactNotification />
          <AppRoutes />
        </BrowserRouter>
      </UserProvider>
    </ThemeProvider>
  );
};
  
export default App;
  