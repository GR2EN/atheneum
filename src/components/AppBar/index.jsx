import React from 'react';

import MuiAppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  appBar: {
    [theme.breakpoints.up('md')]: {
      width: 'calc(100% - 250px)',
      marginLeft: 240,
    },
  },
  menuButton: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  accountButton: {
    marginLeft: 'auto',
  },
}));

const AppBar = ({ handleDrawerToggle }) => {
  const classes = useStyles();

  return (
    <MuiAppBar className={classes.appBar}>
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" onClick={handleDrawerToggle}>
          <MenuIcon />
        </IconButton>
        <Typography noWrap variant="h6">
          Atheneum
        </Typography>
        <IconButton className={classes.accountButton} color="inherit">
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
