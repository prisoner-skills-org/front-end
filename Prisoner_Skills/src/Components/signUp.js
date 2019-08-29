import  React,{useEffect,useState} from "react";
import {Form, Field,withFormik} from "formik";
import * as Yup from 'yup';
import axios from  'axios'
import '../App.css'


function FormBuilder({errors,touched,status}) {
    const[newPrison,setUser] =useState([])
 
    useEffect(() => {
    if (status) {
      setUser([...newPrison, status ])
    }
  
    }, [status]);
    
 return (
    <div className="SignUp" id="AdminSign">
 
     <Form>
  
   <label><div>
     Admin's Name
   {touched.admiName && errors.adminName && <p>{errors.adminName}</p>}
       <Field 
           type="name" 
           name="adminName" 
           placeholder="Name"/>
           </div>
 </label>
       
       <label>
       <div>
          
       <label className="prisonName">
            Prison's Name
            {touched.prisonName && errors.prisonName && <p>{errors.prisonName}</p>}
          <Field
            type="name"
            name="prisonName"
             placeholder=""
          />
    
      
        </label>

       </div>
       </label>
       <label className="email">
            Email
            {touched.email && errors.email&& <p>{errors.email}</p>}
            <Field type="email" name="email" placeholder=""/>

            
       </label>
       <div>
                <label className="password">
               Password 
               {touched.password && errors.password && <p>{errors.password}</p>}
               <Field type="password" name="password" />


       </label>
       </div>
       <br/>
    
       <br/>
       <br/>
       <button type="submit">SignUp</button>
     </Form>
   
   
   
     {newPrison.map(eachPrison=> (
       
         <p key={eachPrison.prisonName}>
           Admin: {eachPrison.adminName} <br />
           Prison:{eachPrison.prisonName}<br/>
           email: {eachPrison.email}<br />
           password: {eachPrison.password}<br/>
           ID:{eachPrison.id}
          
         </p>
         
   ))}
       
       </div>
  )
 
     };
   




const FormikForm = withFormik({
    mapPropsToValues({adminName,prisonName,email,id}){
        return{
              
    id:id ||"",      
           adminName:adminName || "",
            prisonName:prisonName || "",
          
            email:email ||"",
        }
      },         
      validationSchema:
       Yup.object().shape({
          
     
        adminName: Yup.string().required("Please Enter A Name"),
       prisonName: Yup.string().required("Please Enter The Prison Name"),
       email: Yup.string().required("Please Enter A Password"),
                 
            
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
 