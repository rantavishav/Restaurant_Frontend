import { all, takeLatest } from 'redux-saga/effects';
import * as actionLabels from '../actionLabels';
import { authenticationValidatorSaga, loginSaga } from './auth/auth';

// eslint-disable-next-line import/prefer-default-export
export function* watchAuthentication() {
  yield all([takeLatest(actionLabels.LOGIN_SAGA, loginSaga)]);
  yield all([takeLatest(actionLabels.AUTHENTICATION_VALIDATOR, authenticationValidatorSaga)]);
}
