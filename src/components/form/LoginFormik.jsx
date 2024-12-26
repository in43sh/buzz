import React from 'react';
import { withFormik } from 'formik';
import { connect } from 'react-redux';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import LoginForm from './LoginForm';
// import Debug from './Debug';
import { withRouter } from 'react-router';
import { authSetToken, setLoginErrorMessage } from '../../redux/reducer';
// import { setLoginLoader } from '../../redux/reducer';

function MyForm({ values, touched, errors, handleChange, handleBlur, handleSubmit }) {
  return (
    <>
      <LoginForm
        handleBlur={handleBlur}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        errors={errors}
        touched={touched}
        values={values}
      />
      {/* <Debug values={values} errors={errors} touched={touched} /> */}
    </>
  );
}

const LoginFormik = withFormik({
  mapPropsToValues: ({ initialValues }) => {
    return {
      ...initialValues
    };
  },

  validate: (values, { validate }) =>
    Object.keys(values).reduce((errors, field) => {
      const error = validate[field](values[field]);
      return {
        ...errors,
        ...(error && { [field]: error })
      };
    }, {}),

  handleSubmit: (values, { setSubmitting, props: { history, dispatch, token } }) => {
    // alert(JSON.stringify(values, null, 2));

    setSubmitting(false);
    // values = {...values, ...{["name"]: "test"}};
    values.name = 'test';
    axiosWithAuth(false)
      .post('/login', values)
      .then((res) => {
        // dispatch(setLoginLoader(true));

        // console.log(res);
        const token = res.data.token;
        const userData = {
          type: 'website',
          message: res.data.message
        };
        dispatch(authSetToken(token, userData));

        // dispatch(setLoginLoader(false));

        if (token) {
          // console.log("should redirect now");
          history.push('/account');
        }
      })
      .catch((err) => {
        console.log(err);
        // Error codes
        // 401 - wrong password
        // 500 - user with such email doesn't exist
        // Even if the user's "name" is wrong the user still can log in
        if (err.response.status === 401 || err.response.status === 500) {
          dispatch(setLoginErrorMessage('Wrong email or password'));
        }
      });
  },

  validateOnChange: false,

  displayName: 'LoginFormik'
})(MyForm);

export default connect(
  ({ user, token }) => ({ user, token }),
  (dispatch) => ({ dispatch })
)(withRouter(LoginFormik));
