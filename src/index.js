import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import CircularProgress from '@material-ui/core/CircularProgress';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import App from './App';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Container
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 128 }}
    >
      <CircularProgress color="primary" />
    </Container>
  </React.StrictMode>,
  document.getElementById('root'),
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <Router>
          <>
            <CssBaseline />
            <App />
          </>
        </Router>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root'),
  );
});
