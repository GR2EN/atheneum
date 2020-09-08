import React, { useCallback, useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

import Drawer from '../Drawer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  appBar: {
    [theme.breakpoints.up('md')]: {
      width: 'calc(100% - 240px)',
      marginLeft: 240,
    },
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
  },
}));

const Layout = ({ children }) => {
  const [drawerIsOpen, setDrawerOpen] = useState(false);
  const classes = useStyles();

  const toggleDrawerOpen = useCallback(() => {
    setDrawerOpen((prevState) => !prevState);
  });

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton className={classes.menuButton} onClick={toggleDrawerOpen}>
            <MenuIcon />
          </IconButton>
          <Typography noWrap variant="h6">
            Atheneum
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer handleDrawerToggle={toggleDrawerOpen} isOpen={drawerIsOpen} />

      <Container className={classes.content} component="main">
        <div className={classes.toolbar} />
        {children}
      </Container>
    </div>
  );
};

export default Layout;
