import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import { AuthProvider } from './Auth';
import { Home, SignIn, SignUp } from './pages';
import PrivateRoute from './PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <PrivateRoute component={Home} exact path="/" />
          <Route component={SignIn} path="/sign-in" />
          <Route component={SignUp} path="/sign-up" />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
