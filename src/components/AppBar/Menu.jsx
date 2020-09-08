import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Divider from '@material-ui/core/Divider';
import MuiMenu from '@material-ui/core/Menu';
import MuiMenuItem from '@material-ui/core/MenuItem';

import { signOut } from '../../store/actions';

const Menu = ({ anchorEl, open, handleCloseMenu, logout }) => {
  return (
    <MuiMenu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      onClose={handleCloseMenu}
      open={open}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <MuiMenuItem component={Link} to="/profile">
        Профиль
      </MuiMenuItem>
      <Divider />
      <MuiMenuItem onClick={logout}>Выйти</MuiMenuItem>
    </MuiMenu>
  );
};

const mapDispatchToProps = {
  logout: signOut,
};

export default connect(null, mapDispatchToProps)(Menu);
