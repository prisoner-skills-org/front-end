import React, { useState, useEffect }  from 'react'
import { Route } from "react-router-dom";

import PrivateRoute from './Components/PrivateRoute'
import Nav from './Components/Nav'
import NavAdmin from './Components/NavAdmin';

import PrisonList from './Components/PrisonList'
import PrisonerList from './Components/PrisonerList'
import PrisonerCard from './Components/PrisonerCard'
import Login from './Components/Login'
import signUp from './Components/signUp'

import AdminDashboard from "./Components/AdminDashboard";

import FormikSign from './Components/PrisonerSignUpForm';

function App(props){
  const [userToken, setUserToken] = useState('')
  
  useEffect(() => { 
    setUserToken(localStorage.getItem("token"))
  }, [userToken]);

  return(
    <div className='App'>
      { userToken ? <NavAdmin setUserToken={setUserToken}/> : <Nav /> }
      <Route exact path="/" component={PrisonList} />
      <Route exact path="/prison/:id" render={props => <PrisonerList {...props} />} />
      <Route exact path="/prisoner/:id" render={props => <PrisonerCard {...props} />} />

      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={signUp} />
      <PrivateRoute exact path="/admin/add" component={FormikSign}/>
      <PrivateRoute exact path="/admin/prison/:id" component={AdminDashboard} />
      {/*<PrivateRoute exact path="/admin/prisoner/:id" component={AdminPrisoner} />
      <PrivateRoute exact path="/admin/prisoner/new" component={AdminNewPrisoner} />*/}
    </div>
  )
}
export default App