import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import { AuthProvider } from './auth';
import { PrivateRoute } from './components';
import { Home, SignIn, SignOut, SignUp } from './pages';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <CssBaseline />
        <Router>
          <Switch>
            <PrivateRoute component={Home} exact path="/" />
            <PrivateRoute component={SignOut} path="/logout" />
            <Route component={SignIn} path="/login" />
            <Route component={SignUp} path="/register" />
          </Switch>
        </Router>
      </AuthProvider>
    </Provider>
  );
};

export default App;
