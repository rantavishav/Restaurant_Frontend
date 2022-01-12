import { useState } from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { ADMIN_EMAIL_REQUIRED, VALID_EMAIL_REQUIRED } from '../../../constants';
import ResetPasswordOtp from './otpModal';
import { BACKARROW_SVG } from '../../../assests/images';

const ForgotPassword = props => {
  // eslint-disable-next-line react/prop-types
  const { setScreenName } = props;
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const validationSchema = Yup.object({
    email: Yup.string().required(ADMIN_EMAIL_REQUIRED).email(VALID_EMAIL_REQUIRED),
  });

  return (
    <>
      <div className="main-container">
        <button
          type="button"
          className="back-button div-type"
          onClick={() => setScreenName('LOGIN')}
        >
          <img src={BACKARROW_SVG} alt="back button" />
        </button>
        <div className="main-wrapper">
          <div className="page-title">
            <h2>Forgot Password</h2>
            <div className="forgot-password-heading">
              It&apos;s Looks like you forgot your password. Don&apos;t worry, we&apos;ll help you
              out.
            </div>
          </div>
          <Formik
            initialValues={{ email: '' }}
            onSubmit={values => {
              console.log('values', values);
              setOpen(true);
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
                  name="email"
                  placeholder="Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div className="form-error">
                  <div className="error-message">
                    {errors.email && touched.email && errors.email}
                  </div>
                </div>
                <button type="submit" name="submit" className="submit-btn">
                  Get OTP
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
      {open && (
        <ResetPasswordOtp
          email="abc@test.com"
          handleClose={handleClose}
          setScreenName={setScreenName}
          open={open}
        />
      )}
    </>
  );
};

export default ForgotPassword;
