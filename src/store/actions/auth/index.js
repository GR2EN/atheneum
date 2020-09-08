import history from '../../../history';

export const signUp = ({ email, password, firstName, lastName }) => async (
  dispatch,
  getState,
  { getFirebase, getFirestore },
) => {
  const firebase = getFirebase();
  const firestore = getFirestore();
  dispatch({ type: 'AUTH_START' });
  try {
    const res = await firebase.auth().createUserWithEmailAndPassword(email, password);

    const user = firebase.auth().currentUser;
    await user.sendEmailVerification();

    await firestore.collection('users').doc(res.user.uid).set({
      firstName,
      lastName,
    });

    dispatch({ type: 'AUTH_SUCCESS' });
    history.push('/');
  } catch (err) {
    dispatch({ type: 'AUTH_FAIL', payload: err.message });
  }
  dispatch({ type: 'AUTH_END' });
};

export const verifyEmail = () => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  dispatch({ type: 'VERIFY_START' });
  try {
    const user = firebase.auth().currentUser;
    await user.sendEmailVerification();
    dispatch({ type: 'VERIFY_SUCCESS' });
  } catch (err) {
    dispatch({ type: 'VERIFY_FAIL', payload: err.message });
  }
};

export const signIn = ({ email, password }) => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  dispatch({ type: 'AUTH_START' });
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    dispatch({ type: 'AUTH_SUCCESS' });
    history.push('/');
  } catch (err) {
    dispatch({ type: 'AUTH_FAIL', payload: err.message });
  }
  dispatch({ type: 'AUTH_END' });
};

export const signOut = () => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  try {
    await firebase.logout();
  } catch (err) {
    console.log(err.message);
  }
};
