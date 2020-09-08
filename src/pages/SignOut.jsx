import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { signOut } from '../store/actions';

const SignOut = ({ logout }) => {
  useEffect(() => {
    logout();
  }, []);

  return <>Выполняется перенаправление...</>;
};

const mapDispatchToProps = {
  logout: signOut,
};

export default connect(null, mapDispatchToProps)(SignOut);
