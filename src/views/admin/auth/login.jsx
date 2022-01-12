import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { ADMIN_PASSWORD_REQUIRED, ADMIN_USERNAME_REQUIRED } from '../../../constants';
import { login } from '../../../store/actions';

const AdminLogin = props => {
  // eslint-disable-next-line react/prop-types
  const { setScreenName } = props;
  const dispatch = useDispatch();
  const validationSchema = Yup.object({
    userName: Yup.string().required(ADMIN_USERNAME_REQUIRED),
    password: Yup.string().required(ADMIN_PASSWORD_REQUIRED),
  });

  return (
    <div className="main-container">
      <div className="main-wrapper">
        <div className="page-title">
          <h2>Admin Login</h2>
          <div className="forgot-password-heading">Just login you little piece of shit.</div>
        </div>
        <Formik
          initialValues={{ userName: '', password: '' }}
          onSubmit={values => {
            console.log('values', values);
            dispatch(login({ token: values.password }));
          }}
          validationSchema={validationSchema}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            // setFieldValue,
            handleSubmit,
            // isSubmitting,
          }) => (
            <form className="form-signin" onSubmit={handleSubmit}>
              <input
                type="text"
                name="userName"
                placeholder="Username"
                value={values.userName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="form-error">
                <div className="error-message">
                  {errors.userName && touched.userName && errors.userName}
                </div>
              </div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="form-error">
                <div className="error-message">
                  {errors.password && touched.password && errors.password}
                </div>
              </div>
              <div className="forgot-password">
                <button
                  type="button"
                  className="forgot-password-btn"
                  onClick={() => setScreenName('FORGOT_PASSWORD')}
                >
                  Forgot Password?
                </button>
              </div>
              <button type="submit" name="submit" className="submit-btn">
                Login
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default AdminLogin;
