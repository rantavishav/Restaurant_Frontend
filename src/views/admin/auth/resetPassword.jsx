import * as Yup from "yup";
import { Formik } from "formik";
import {
  ADMIN_PASSWORD_REQUIRED,
  CONFIRM_PASSWORD_REQUIRED,
  PASSWORD_VALID,
  PASSWORD_VALIDATION,
  SET_PASSWORDS_NOT_MATCH,
} from "../../../constants";
import { BACKARROW_SVG } from "../../../assests/images";

const ResetPassword = (props) => {
  // eslint-disable-next-line react/prop-types
  const { setScreenName } = props;
  const validationSchema = Yup.object({
    password: Yup.string()
      // .matches(
      //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[{[@$!%*?&~+-])[A-Za-z\d{[@$!%*?&~+-]{8,}$/,
      //   PASSWORD_VALIDATION,
      // )
      .min(8, PASSWORD_VALID)
      .matches(/[a-z]/, PASSWORD_VALIDATION)
      .matches(/[A-Z]/, PASSWORD_VALIDATION)
      .matches(/[0-9]/, PASSWORD_VALIDATION)
      .matches(/[^a-zA-Z0-9.]/, PASSWORD_VALIDATION)
      .required(ADMIN_PASSWORD_REQUIRED),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], SET_PASSWORDS_NOT_MATCH)
      .required(CONFIRM_PASSWORD_REQUIRED),
  });

  return (
    <div className="main-container">
      <div className="back-button" onClick={() => setScreenName("LOGIN")}>
        <img src={BACKARROW_SVG} alt="back button" />
      </div>
      <div className="main-wrapper">
        <div className="page-title">
          <h2>Reset Password</h2>
          <div className="forgot-password-heading">
            Yeee you can reset your password here.
          </div>
        </div>
        <Formik
          initialValues={{ userName: "", password: "" }}
          onSubmit={(values) => {
            console.log("values", values);
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
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div className="form-error">
                <div className="error-message">
                  {errors.confirmPassword &&
                    touched.confirmPassword &&
                    errors.confirmPassword}
                </div>
              </div>
              <button type="submit" name="submit" className="submit-btn">
                Reset
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ResetPassword;
