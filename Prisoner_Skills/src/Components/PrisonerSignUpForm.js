// import AddSkill from "./AddSkill"
import  React,{useEffect,useState} from "react";
import {Form, Field,withFormik} from "formik";
import * as Yup from 'yup';
import axios from  'axios'
import styled from 'styled-components';
import {
  Checkbox,
  Grid,
  Header,
  Segment,
  Form as SemanticForm,
 
  TextArea,} from 'semantic-ui-react'
  import '../App.css'




const FormContainer = styled.div`
  height: 95vh;
  width: 100vw;
  background-color: #F7F7F7;
`
const FieldContainer = styled.div`
  height: 170px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
const StyledErrorMessage = styled.p`
  color: red;
  margin: 10px;
`
const Button = styled.button`
background-color:white;
width:  150px;
height:50px;
border-radius:12px;
margin-left:12rem;

margin-top:3rem;

&:hover{
  background-color:#007bff;
  color:white;
}`



const Yes = styled.div` 
font-size:20px;
`



 function FormBuilder({value,errors,touched,status}){
    const[newUser,setUser] =useState([])

    useEffect(() => {
    if (status) {
      setUser([...newUser, status ])
    }
  
    }, [status]);
    
 return (
  <FormContainer>
 
     <Form>
       <Grid  textAlign='center' style={{ height: '70vh' }} verticalAlign='middle'>
       <Grid.Column style={{ maxWidth: 600 }}>
     <Header as ='h2' color='white' textAlign='center'>
       Add Inmate
       </Header>
    <SemanticForm size ='large'>
      <Segment stacked>
        
        <FieldContainer>
          <Header as ='h3'>Inmates Name {<br/>}
        <Field type="name" name="name" />
        </Header>
        </FieldContainer>
         <FieldContainer>
         <Header as='h3'>Cleared For Outside?</Header>
        <Yes> Yes </Yes>
        <Checkbox  type="checkbox" name="cleared" />
         </FieldContainer>
               
 
       
       
        
        <FieldContainer>
          <Header as='h3'>Skills:
       
         <Field type='textarea' name='skills' placeholder="Add Skills"/>
         </Header>
        </FieldContainer>
        <FieldContainer>
          <Button type = 'submit'>Submit</Button>
      </FieldContainer>
      </Segment>
      </SemanticForm>
     
      {touched.name && errors.name && <StyledErrorMessage>{errors.name}</StyledErrorMessage>} 
      </Grid.Column>
      </Grid>
    </Form>
     
       </FormContainer>
  )
};
   
   




const FormikSign = withFormik({
    mapPropsToValues({name,skills}){
        return{
              
              
           name: name || '',
          
          //  cleared:cleared|| true,
            skills:skills || '',
                 
            
        }
    }, 
      validationSchema:
       Yup.object().shape({
          
     
         name: Yup.string().required("Please Enter A Name"),
    
        skills: Yup.string(),
     
     
     
    }),
       handleSubmit(value,  {resetForm , setError,}) {
       
        axios
          .post("https://reqres.in/api/users", value)
          .then(res => {
            
            resetForm()
            console.log(res)
          })
          .catch(err => {
            setError(err)
            console.log("UH OH,",err) // There was an error creating the data and logs to console
            // resetForm({})
          })
    
 
        
      
  }
  })(FormBuilder);

  export default FormikSign