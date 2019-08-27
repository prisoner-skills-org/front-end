import  React,{useEffect,useState} from "react";
import {Form, Field,withFormik} from "formik";
import * as Yup from 'yup';
import axios from  'axios'

function FormBuilder({value,errors,touched,status}) {
    const[user,setUser] =useState([])
 
    useEffect(() => {
    if (status) {
      setUser([...user, status ])
    }
  
    }, [status]);
    
 return (
    <div className="Login" id="AdminSign">
 
     <Form>
  
   <div>
   {touched.email && errors.email && <p>{errors.email}</p>}
       <Field type="email" name="email" placeholder="email"/>
 
       </div>
       <div>
       {touched.password && errors.password && <p>{errors.password}</p>} 
       <Field type="password" name="password" placeholder="Password" />
  
       </div>
       <label>
 
       </label>
       <br/>
       <button type="submit" >Login</button>
       <br/>
       <br/>
       <button type="signup">SignUp</button>
     </Form>
   
   
   
     {user.map(eachUser => (
       
         <p key={eachUser.id}>
           Username: {eachUser.username} <br />
           Email: {eachUser.email}<br />
           Location: {eachUser.location}<br/>
           ID:{eachUser.id}
          
         </p>
         
   ))}
       
       </div>
  )
 };
   
   




const FormikForm = withFormik({
    mapPropsToValues({name,password,email,id,location}){
        return{
              
    id:id ||"",      
           user:name || "",
            password:password || "",
            email:email || "",
            location:location ||"," 
                 
            
        }
    }, 
      validationSchema: Yup.object().shape({
          
        id: Yup.string(),
         name: Yup.string().required("Please Enter Your Name"),
        password: Yup.string().min(6).required(),
        email: Yup.string().email().required("Please Enter Your E-Mail"),
     
     
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
 