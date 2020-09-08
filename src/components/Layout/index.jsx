import React, { useCallback, useState } from 'react';

import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '../AppBar';
import Drawer from '../Drawer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
      <AppBar handleDrawerToggle={toggleDrawerOpen} />
      <Drawer handleDrawerToggle={toggleDrawerOpen} isOpen={drawerIsOpen} />
      <Container className={classes.content} component="main">
        <div className={classes.toolbar} />
        {children}
      </Container>
    </div>
  );
};

export default Layout;
