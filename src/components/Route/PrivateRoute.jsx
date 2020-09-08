import React from 'react';
import { useSelector } from 'react-redux';
import { isEmpty, isLoaded } from 'react-redux-firebase';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const auth = useSelector((state) => state.firebase.auth);
  console.log(auth);

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

export default PrivateRoute;
