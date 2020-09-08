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

    await firestore.collection('users').doc(res.user.uid).set({
      firstName,
      lastName,
    });

    dispatch({ type: 'AUTH_SUCCESS' });
  } catch (e) {
    dispatch({ type: 'AUTH_FAIL', payload: e.message });
  }
  dispatch({ type: 'AUTH_END' });
};

export const signOut = () => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  try {
    await firebase.logout();
  } catch (e) {
    console.log(e.message);
  }
};

export const signIn = ({ email, password }) => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  dispatch({ type: 'AUTH_START' });
  try {
    await firebase.auth().signInWithEmailAndPassword(email, password);
    dispatch({ type: 'AUTH_SUCCESS' });
  } catch (e) {
    dispatch({ type: 'AUTH_FAIL', payload: e.message });
  }
  dispatch({ type: 'AUTH_END' });
};
