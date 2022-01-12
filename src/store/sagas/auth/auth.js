import { put } from 'redux-saga/effects';
// import firebase from 'firebase';
import { loginSuccess, loginStart, loginFail } from '../../actions';
// import { errorHandler } from '../../../utils';

export function* loginSaga(action) {
  yield put(loginStart());
  const { token } = action.payload;
  if (token) {
    yield put(loginSuccess({ adminToken: token }));
  } else {
    yield put(loginFail('Invalid Credentials'));
  }
}

export function* authenticationValidatorSaga() {
  yield put(loginStart());
  const token = yield localStorage.getItem('adminToken');
  if (token) {
    yield put(loginSuccess({ adminToken: token }));
  } else {
    yield put(loginFail('Invalid Credentials'));
  }
}
