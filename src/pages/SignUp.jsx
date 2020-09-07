import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

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

const SignUp = ({ history }) => {
  const classes = useStyles();

  const handleSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      const { email, password } = event.target.elements;

      try {
        await firebaseApp.auth().createUserWithEmailAndPassword(email.value, password.value);
        history.push('/');
      } catch (e) {
        console.log(e);
      }
    },
    [history],
  );

  return (
    <Container maxWidth="sm">
      <Box className={classes.box}>
        <Typography component="h1" variant="h5">
          Регистрация
        </Typography>
        <Paper className={classes.paper}>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  required
                  variant="outlined"
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  id="password"
                  label="Пароль"
                  name="password"
                  required
                  type="password"
                  variant="outlined"
                />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField
                  fullWidth
                  id="password-same"
                  label="Повторите пароль"
                  name="password-same"
                  required
                  type="password"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Button
              className={classes.submit}
              color="primary"
              fullWidth
              type="submit"
              variant="contained"
            >
              Далее
            </Button>
          </form>
        </Paper>
      </Box>
    </Container>
  );
};

export default withRouter(SignUp);
