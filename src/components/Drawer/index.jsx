import React from 'react';

import MuiDrawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core/styles';

import DrawerMenu from './Menu';

const useStyles = makeStyles({
  drawer: {
    width: 250,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 250,
  },
});

const Drawer = ({ open, handleDrawerToggle }) => {
  const classes = useStyles();

  return (
    <>
      <Hidden mdUp>
        <MuiDrawer
          anchor="left"
          classes={{ paper: classes.drawerPaper }}
          className={classes.drawer}
          ModalProps={{
            keepMounted: true,
          }}
          onClose={handleDrawerToggle}
          open={open}
          variant="temporary"
        >
          <DrawerMenu />
        </MuiDrawer>
      </Hidden>
      <Hidden smDown>
        <MuiDrawer
          anchor="left"
          classes={{ paper: classes.drawerPaper }}
          className={classes.drawer}
          variant="permanent"
        >
          <DrawerMenu />
        </MuiDrawer>
      </Hidden>
    </>
  );
};

export default Drawer;
