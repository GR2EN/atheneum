import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import { AuthProvider } from './auth';
import { PrivateRoute } from './components';
import { Home, SignIn, SignOut, SignUp } from './pages';

const App = () => {
  return (
    <AuthProvider>
      <CssBaseline />
      <Router>
        <Switch>
          <PrivateRoute component={Home} exact path="/" />
          <PrivateRoute component={SignOut} path="/sign-out" />
          <Route component={SignIn} path="/sign-in" />
          <Route component={SignUp} path="/sign-up" />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
