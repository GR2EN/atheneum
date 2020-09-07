import React, { useEffect } from 'react';

import firebase from '../firebase';

const SignOut = () => {
  useEffect(() => {
    firebase.auth().signOut();
  }, []);

  return <>Выполняется перенаправление...</>;
};

export default SignOut;
