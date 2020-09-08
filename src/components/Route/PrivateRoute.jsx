import React from 'react';
import { connect } from 'react-redux';
import { isEmpty, isLoaded } from 'react-redux-firebase';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: RouteComponent, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isLoaded(auth) && !isEmpty(auth) ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const mapStateToProps = ({ firebase }) => ({
  auth: firebase.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
