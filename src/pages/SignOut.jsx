import React, { useEffect } from 'react';

import firebaseApp from '../firebase';

const SignOut = () => {
  useEffect(() => {
    firebaseApp.auth().signOut();
  }, []);

  return <h1>Выполняется перенаправление...</h1>;
};

export default SignOut;
