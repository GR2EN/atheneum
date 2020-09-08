import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Layout } from './components';
import { Classes, Dashboard, Profile, Schedule, SignIn, SignOut, SignUp, Students } from './pages';

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
          <Route component={Dashboard} exact path="/" />
          <Route component={Schedule} path="/schedule" />
          <Route component={Classes} path="/classes" />
          <Route component={Students} path="/students" />
          <Route component={Profile} path="/profile" />
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
