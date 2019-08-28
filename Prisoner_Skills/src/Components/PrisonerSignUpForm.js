import AddSkill from "./AddSkill"
import  React,{useEffect,useState} from "react";
import {Form, Field,Button,withFormik} from "formik";
import * as Yup from 'yup';
import axios from  'axios'
import styled from 'styled-components';

const Flex = styled.div`
display:flex;
flex-direction:column;
flex-wrap:wrap;
text-align:center;
width:960px;
height:800px;
background-color: #007bff;
padding-top:10rem;
margin-left:10em;`

const Title = styled.h1`
font-size:80px;`
const Label = styled.label`
`

export default function FormBuilder({values,errors,touched,status}){
    const[newUser,setUser] =useState([])
 
    useEffect(() => {
    if (status) {
      setUser([...newUser, status ])
    }
  
    }, [status]);
    
 return (
  
   <Flex className="SignUp" id="PrisonerSignUp">
     
     <Title>Add Inmate</Title>
    
     <Form>
  
   <Label><h3>Inmates Name</h3>

       <Field type="name" name="name" placeholder="name"/>
   </Label>
   
     
      
          
       <Label className="checkbox-container">
          <h2>Outside Clearance ?</h2>
          <Field
            type="checkbox"
            name="cleared"
     
          />
    
      
        </Label>

      
  
     </Form>
   
      <AddSkill/>
 

       </Flex>
  )
};
   
   




const FormikForm = withFormik({
    mapPropsToValues({name,cleared,skills,id}){
        return{
              
             id:id ||"",      
           user:name || "",
            cleared:cleared || "",
          
            skills:skills ||"",
                 
            
        }
    }, 
      validationSchema:
       Yup.object().shape({
          
     
         name: Yup.string().required("Please Enter A Name"),
        cleared: Yup.boolean().required(),
     
     
     
    }),
       handleSubmit(values,  {setError,resetForm, setStatus }) {
       
        axios
          .post("", values)
          .then(res => {
            setStatus(res.data)
            resetForm()
            
          })
          .catch(err => {
            setError(err)
            console.log("UH OH,",err); // There was an error creating the data and logs to console
          })
    
 
        
      
  }
  })(FormBuilder);

  