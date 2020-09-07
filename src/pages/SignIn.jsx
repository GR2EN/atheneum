import React, { useCallback, useContext } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { AuthContext } from '../Auth';
import firebaseApp from '../firebase';

const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  paper: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(3, 2),
  },
  form: {
    width: '100%', // Fix IE 11 issue
  },
  submit: {
    margin: theme.spacing(3, 0, 0),
  },
}));

const SignIn = ({ history }) => {
  const classes = useStyles();
  const { currentUser } = useContext(AuthContext);

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      const { email, password } = event.target.elements;

      try {
        await firebaseApp.auth().signInWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (e) {
        console.log(e);
      }
    },
    [history],
  );

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <Container maxWidth="sm">
      <Box className={classes.box}>
        <Typography component="h1" variant="h5">
          Авторизация
        </Typography>
        <Paper className={classes.paper}>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              autoFocus
              fullWidth
              id="email"
              label="Email"
              margin="normal"
              name="email"
              required
              variant="outlined"
            />
            <TextField
              fullWidth
              id="password"
              label="Пароль"
              margin="normal"
              name="password"
              required
              type="password"
              variant="outlined"
            />
            <Button
              className={classes.submit}
              color="primary"
              fullWidth
              type="submit"
              variant="contained"
            >
              Войти
            </Button>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

export default withRouter(SignIn);
