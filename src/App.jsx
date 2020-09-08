import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Layout } from './components';
import { Home, SignIn, SignOut, SignUp } from './pages';

const App = ({ loggedIn, emailVerified }) => {
  let routes;

  if (loggedIn && !emailVerified) {
    routes = (
      <Layout>
        <Switch>
          <Route component={SignOut} exact path="/logout" />
        </Switch>
      </Layout>
    );
  } else if (loggedIn && emailVerified) {
    routes = (
      <Layout>
        <Switch>
          <Route component={Home} exact path="/" />
          <Route component={SignOut} exact path="/logout" />
          <Redirect to="/" />
        </Switch>
      </Layout>
    );
  } else {
    routes = (
      <Switch>
        <Route component={SignIn} exact path="/login" />
        <Route component={SignUp} exact path="/register" />
        <Redirect to="/login" />
      </Switch>
    );
  }

  return <>{routes}</>;
};

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid,
  emailVerified: firebase.auth.emailVerified,
});

export default connect(mapStateToProps)(App);
