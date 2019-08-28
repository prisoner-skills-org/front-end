import  React, { useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import * as Yup from 'yup';
import axios from  'axios'
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
  height: 95vh;
  width: 100vw;
  background-color: #F7F7F7;
`
const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 600px;
  border: 1px solid red;
`
const FieldContainer = styled.div`
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
const StyledErrorMessage = styled.p`
  color: red;
  margin: 5px;
`

function FormBuilder({ errors, touched, setUserToken, status }) {
  useEffect(() => {
    if (status) {
      setUserToken(status)
    }
  }, [status])

  return (
    <FormContainer>
      <Form>
        <Grid textAlign='center' style={{ height: '70vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='blue' textAlign='center'>
              Welcome Back!
            </Header>
            <SemanticForm size='large'>
              <Segment stacked>
                <FieldContainer>
                  <Field type="text" name="username" placeholder="Username"/>
                  <Field type="password" name="password" placeholder="Password" />
                  <Button color='blue' fluid size='large'>
                    Login
                  </Button>
                </FieldContainer>
              </Segment>
            </SemanticForm>
            {touched.email && errors.email && <StyledErrorMessage>{errors.email}</StyledErrorMessage>}
            {touched.password && errors.password && <StyledErrorMessage>{errors.password}</StyledErrorMessage>} 
          </Grid.Column>
        </Grid>
      </Form>
    </FormContainer>
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
        history.push('/admin/prison/:id')
      })
      .catch(err => {
        console.log('axios login err', err)
        setSubmitting(false)
      })
  }
})(FormBuilder);

export default FormikForm