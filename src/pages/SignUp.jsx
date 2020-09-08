import React, { useState } from 'react';
import { connect } from 'react-redux';

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Field, Form, Formik } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';

import { signUp } from '../store/actions';

const useStyles = makeStyles((theme) => ({
  box: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
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
  error: {
    padding: theme.spacing(0, 2, 3, 2),
    textAlign: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 0),
  },
}));

const Input = ({ ...props }) => {
  return <TextField fullWidth required variant="outlined" {...props} />;
};

const PasswordField = ({ ...props }) => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisibility((prevState) => !prevState);
  };

  const handleMouseDown = (event) => {
    event.preventDefault();
  };

  return (
    <TextField
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={togglePasswordVisibility} onMouseDown={handleMouseDown}>
              {passwordVisibility ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      required
      type={passwordVisibility ? 'text' : 'password'}
      variant="outlined"
      {...props}
    />
  );
};

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string().required('Введите имя.'),
  lastName: Yup.string().required('Введите фамилию.'),
  email: Yup.string().email('Проверьте правильность email.').required('Введите email.'),
  password: Yup.string().required('Введите пароль.').min(8, 'Минимальная длина пароля 8 символов.'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Пароли должны совпадать.')
    .required('Введите пароль еще раз.'),
});

const SignUp = ({ register, loading, error }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <Box className={classes.box}>
        <Typography component="h1" variant="h5">
          Регистрация
        </Typography>
        <Paper className={classes.paper}>
          {error && (
            <Box className={classes.error}>
              <Typography color="error" gutterBottom>
                {error}
              </Typography>
            </Box>
          )}

          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: '',
              confirmPassword: '',
            }}
            onSubmit={async (values, { setSubmitting }) => {
              await register(values);
              setSubmitting(false);
            }}
            validationSchema={SignUpSchema}
          >
            {({ isSubmitting, isValid }) => (
              <Form className={classes.form}>
                <Grid container spacing={2}>
                  <Grid item sm={6} xs={12}>
                    <Field autoFocus component={Input} label="Имя" name="firstName" type="text" />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <Field component={Input} label="Фамилия" name="lastName" type="text" />
                  </Grid>
                  <Grid item xs={12}>
                    <Field component={Input} label="Email" name="email" type="email" />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <Field component={PasswordField} label="Пароль" name="password" />
                  </Grid>
                  <Grid item sm={6} xs={12}>
                    <Field
                      component={PasswordField}
                      label="Повторите пароль"
                      name="confirmPassword"
                    />
                  </Grid>
                </Grid>
                <Button
                  className={classes.submit}
                  color="primary"
                  disabled={!isValid || isSubmitting}
                  fullWidth
                  type="submit"
                  variant="contained"
                >
                  {loading ? <CircularProgress size="1.5rem" /> : 'Далее'}
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Box>
    </Container>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.error,
});

const mapDispatchToProps = {
  register: signUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
