export * from './auth/auth';
export const resetApp = payload => ({
  type: 'RESET_APP',
  payload,
});
