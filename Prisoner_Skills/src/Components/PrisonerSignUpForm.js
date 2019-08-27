import  React,{useEffect,useState} from "react";
import {Form, Field,withFormik} from "formik";
import * as Yup from 'yup';
import axios from  'axios'

function FormBuilder({values,errors,touched,status}) {
    const[newUser,setUser] =useState([])
 
    useEffect(() => {
    if (status) {
      setUser([...newUser, status ])
    }
  
    }, [status]);
    
 return (
    <div className="SignUp" id="AdminSign">
 
     <Form>
  
   <div><label>Please Enter Inmates Name
   {touched.name && errors.name && <p>{errors.name}</p>}
       <Field type="name" name="name" placeholder="name"/>
 </label>
       </div>
       <label>
       <div>
          
       <label className="checkbox-container">
          Outside Clearance ?
          <Field
            type="checkbox"
            name="cleared"
            checked={values.cleared}
          />
    
      
        </label>

       </div>
       </label>
       <label>
            Skills :
            <Field component ="input"type="text"name="skills"placeholder=""/><button type="submit" placeholder="Add">Add</button>

            
       </label>
       <br/>
    
       <br/>
       <br/>
       <button type="signup">SignUp</button>
     </Form>
   
   
   
     {newUser.map(eachUser => (
       
         <p key={eachUser.id}>
           Name: {eachUser.name} <br />
           Cleared: {eachUser.cleared}<br />
           Skills: {eachUser.skills}<br/>
           ID:{eachUser.id}
          
         </p>
         
   ))}
       
       </div>
  )
 };
   
   




const FormikForm = withFormik({
    mapPropsToValues({name,cleared,skills,id}){
        return{
              
    id:id ||"",      
           user:name || "",
            cleared:cleared || "",
          
            skills:skills ||"" 
                 
            
        }
    }, 
      validationSchema: Yup.object().shape({
          
     
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

  
  export default FormikForm 
 