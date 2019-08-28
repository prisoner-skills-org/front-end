import  React, { useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from 'yup';
import axios from  'axios'
import history from './../utils/history'

function FormBuilder({ errors, touched, setUserToken, status }) {

  useEffect(() => {
    if (status) {
      setUserToken(status)
    }
  }, [status])

  return (
    <Form>
      <Field type="text" name="username" placeholder="Username"/>
      <Field type="password" name="password" placeholder="Password" />
      <button type="submit">Login</button>
      {touched.email && errors.email && <p>{errors.email}</p>}
      {touched.password && errors.password && <p>{errors.password}</p>} 
    </Form>
  )
}

const FormikForm = withFormik({
  mapPropsToValues({ username, password }) {
    return { 
      username: username || "",
      password: password || "",
    }
  },

  //======VALIDATION SCHEMA START==========
  validationSchema: Yup.object().shape({
    username: Yup.string()
      // .email()
      .required("Email required"),
    password: Yup.string()
      // .min(6)
      .required("Password required"),
  }),
  //======VALIDATION SCHEMA END============
    
  handleSubmit(values, { resetForm, setSubmitting, setStatus }) {
    axios
      .post("https://prisoners-bw.herokuapp.com/api/auth/login", values)
      .then(res => {
        console.log('axios login res', res)
        resetForm()
        setSubmitting(false)
        localStorage.setItem('token', res.data.token);
        setStatus(res.data.token)
        history.push('/')
      })
      .catch(err => {
        console.log('axios login err', err)
        setSubmitting(false)
      })
  }
})(FormBuilder);

export default FormikForm