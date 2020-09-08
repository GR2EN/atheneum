import React from 'react';
import { NavLink } from 'react-router-dom';

import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ScheduleIcon from '@material-ui/icons/Schedule';
import SchoolIcon from '@material-ui/icons/School';

const useStyles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  linkActive: {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
  },
}));

const Menu = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem activeClassName={classes.linkActive} button component={NavLink} exact to="/">
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText>Панель управления</ListItemText>
        </ListItem>
        <ListItem activeClassName={classes.linkActive} button component={NavLink} to="/schedule">
          <ListItemIcon>
            <ScheduleIcon />
          </ListItemIcon>
          <ListItemText>Расписание</ListItemText>
        </ListItem>
        <ListItem activeClassName={classes.linkActive} button component={NavLink} to="/classes">
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText>Классы</ListItemText>
        </ListItem>
        <ListItem activeClassName={classes.linkActive} button component={NavLink} to="/students">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText>Ученики</ListItemText>
        </ListItem>
      </List>
      <Divider />
    </>
  );
};

export default Menu;
