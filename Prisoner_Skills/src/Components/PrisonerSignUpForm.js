// import AddSkill from "./AddSkill"
import  React,{useEffect,useState} from "react";
import {Form, Field,withFormik} from "formik";
import * as Yup from 'yup';
import axios from  'axios'
import { bounce } from 'react-animations'
import styled,{keyframes} from 'styled-components';
import {
 
  Grid,
  Header,
  Segment,
  Form as SemanticForm} from 'semantic-ui-react';
  import '../PrisonerSign.css'



const Bounce = styled.h1`animation:4s  ${keyframes `${bounce}`} infinite;`
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
margin-left:8rem;

margin-top:2rem;

&:hover{
  background-color:#007bff;
  color:white;
}`





 function FormBuilder({value,errors,touched,status,props}){
    const[newUser,setUser] =useState([])

    useEffect(() => {
    if (status) {
      setUser([...newUser, status ])
    }
  
    }, [newUser]);

 return (
  <FormContainer>
 
     <Form>
       <Grid  textAlign='center' style={{ height: '70vh' }} verticalAlign='middle'>
       <Grid.Column style={{ maxWidth: 450  }}>
     <Bounce><Header as ='h2' color='white' textAlign='center'>
       Add Inmate
       </Header></Bounce>
    <SemanticForm size ='large'>
      <Segment stacked>
        
        <FieldContainer>
          <Header as ='h3'>Inmates Name: {<br/>}
          {touched.name && errors.name && <StyledErrorMessage>{errors.name}</StyledErrorMessage>} 
        <Field type="name" name="name" />
        </Header>
        </FieldContainer>
         <FieldContainer>
         <Header as='h3'>Does inmate have outside clearance?
         {touched.cleared && errors.cleared && <StyledErrorMessage>{errors.cleared}</StyledErrorMessage>}
        <Field component="select" name="cleared" className="cleared">
   
            <option>Please Select</option>
         
            <option value='true' name='yes'>Yes</option>

            <option value='false' name='no'>No</option>
            
                
                
                </Field>
                </Header>
         </FieldContainer>
               
 
       
       
        
        <FieldContainer>
          <Header as='h3'>Skills:
          {touched.skills && errors.skills && <StyledErrorMessage>{errors.skills}</StyledErrorMessage>}
         <Field type='textarea'  name='skills' />
         </Header>
        </FieldContainer>
        <FieldContainer>
          <Button type = 'submit'>Submit</Button>
    

      </FieldContainer>
      </Segment>
      </SemanticForm>
  
    
      </Grid.Column>
      </Grid>
    </Form>
     
       </FormContainer>
  )
};
   
   




const FormikSign = withFormik({
    mapPropsToValues({name,skills,cleared,Yes,No}){
        return{
              
              
           name: name || '',
           cleared: Yes ||  "Yes",
       cleared: No    ||   "No",
          //  select : false || '',
            skills:skills || '',
                 
            
        }
    }, 
      validationSchema:
       Yup.object().shape({
          
    
         name: Yup.string().required("Please Enter A Name"),
    
        skills: Yup.string().required("Please enter inmates skills. If none enter n/a"),
        cleared: Yup.string().required("Please select if cleared for outside")
  
  
        // select: Yup.string().required('Please Make A Selection')    
     
     
     
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