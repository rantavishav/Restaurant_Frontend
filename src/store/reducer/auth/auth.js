import * as actionLabels from '../../actionLabels';

export const initialState = {
  isLogin: false,
  isLoading: false,
  adminToken: '',
  deviceId: '',
  signupToken: '',
  errorMsg: '',
  registerEmail: '',
  activeSession: null,
  isRegisterTokenValid: false,
  isRegisterSuccess: false,
  isResetPasswordTokenValid: false,
  isForgotPasswordSuccess: false,
  showScreen: '',
};

// eslint-disable-next-line default-param-last
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionLabels.LOGIN_START:
      return { ...state, isLoading: true };
    case actionLabels.LOGIN_SUCCESS: {
      const { adminToken } = payload;
      localStorage.setItem('adminToken', adminToken);
      return { ...state, adminToken, isLoading: false };
    }
    case actionLabels.LOGIN_FAIL: {
      return { ...state, isLoading: false, errorMsg: payload };
    }

    default:
      return state;
  }
};
