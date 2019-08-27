import React  from 'react'
import { Route } from "react-router-dom";

import PrivateRoute from './Components/PrivateRoute'
import Nav from './Components/Nav'
import NavAdmin from './Components/NavAdmin';
import FormikForm from './Components/Login'

function App(props){
  const userToken = localStorage.getItem("token")

  return(
    <div className='App'>
      { userToken ? <NavAdmin /> : <Nav /> }
      {/* <Route exact path="/" component={PrisonList} />
      <Route exact path="/prison/:id" render={props => <PrisonerList {...props} />} />
      <Route exact path="/prisoner/:id" render={props => <Prisoner {...props} />} />

      <Route exact path="/login" component={FormikForm} />
      <Route exact path="/signup" component={SignUp} />
      
      <PrivateRoute exact path="/admin/prison/:id" component={AdminPrisonerList} />
      <PrivateRoute exact path="/admin/prisoner/:id" component={AdminPrisoner} />
      <PrivateRoute exact path="/admin/prisoner/new" component={AdminNewPrisoner} /> */}
    </div>
  )
}
export default App