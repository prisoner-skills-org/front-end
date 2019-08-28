import  React from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from 'yup';
import axios from  'axios'
import Loader from 'react-loader-spinner';
import styled from 'styled-components'
import { 
  Button, 
  Form as SemanticForm, 
  Grid, 
  Header, 
  Segment 
} from 'semantic-ui-react'

import history from './../utils/history'

const FormContainer = styled.div`
  height: 90vh;
  width: 100vw;
  background-color: #F7F7F7;
`
const FieldContainer = styled.div`
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
const StyledErrorMessage = styled.p`
  color: red;
  margin: 10px;
`

function FormBuilder({ errors, touched, status, isSubmitting }) {
  return (
    <FormContainer>
      <Form>
        <Grid textAlign='center' style={{ height: '70vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='blue' textAlign='center'>
              Create an Admin Account
            </Header>
            <SemanticForm size='large'>
              <Segment stacked>
                <FieldContainer>
                  <Field 
                    type="text" 
                    name="username" 
                    placeholder="Username" 
                  />
                  <Field 
                    type="password" 
                    name="password" 
                    placeholder="Password"
                  />
                  <Field 
                    type="password" 
                    name="passwordConfirm" 
                    placeholder="Confirm Password"
                  />
                  <Button color='blue' fluid size='large'>
                    {isSubmitting ? 
                      <Loader type="ThreeDots" color="white" height={10} /> 
                      : 
                      'Sign Up' 
                    }
                  </Button>
                </FieldContainer>
              </Segment>
            </SemanticForm>
            {touched.username && errors.username&& <StyledErrorMessage>{errors.username}</StyledErrorMessage>}
            {touched.password && errors.password && <StyledErrorMessage>{errors.password}</StyledErrorMessage>}
            {touched.passwordConfirm && errors.passwordConfirm && <StyledErrorMessage>{errors.passwordConfirm}</StyledErrorMessage>}
            <StyledErrorMessage>{status}</StyledErrorMessage>
          </Grid.Column>
        </Grid>
      </Form>
    </FormContainer>
  )
}

const FormikForm = withFormik({
  mapPropsToValues({ username, password, passwordConfirm }){
    return {  
      username: username || "",
      password: password || "",
      passwordConfirm: passwordConfirm || "",
    }
  },
  
  //======VALIDATION SCHEMA START==========
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please enter your username"),
    password: Yup.string().required("Please enter your password"),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password'), null])
      .required('Confirm password is required')
  }),
  //======VALIDATION SCHEMA END============
  
  handleSubmit(values, { setError, resetForm, setStatus, setSubmitting }) {
    setSubmitting(true);
    axios
      .post("https://prisoners-bw.herokuapp.com/api/auth/register", values)
      .then(res => {
        console.log('axios sign up res', res)
        setStatus('Account created! Redirecting to login...')
        setTimeout(() => {
          setSubmitting(false);
          history.push('/login')
        }, 2000);
        resetForm()
      })
      .catch(err => {
        setError(err)
        setStatus(err.message)
        setSubmitting(false)
      })
  }
})(FormBuilder);

export default FormikForm