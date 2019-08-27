import React from 'react'
import { Menu, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { NavLink } from 'react-router-dom'

import history from './../utils/history'

const NavAdmin = () => {
  const signOutHandler = event => {
    localStorage.removeItem('token')
    history.push('/');
    // need to here call getData function to force re-render
  }

  return (
    <Menu size='big'>
      <Menu.Item  position='right'>
        <NavLink 
          to="/admin/prisoner/new" 
          activeClassName="selected" 
          activeStyle={{
            color: "blue",
          }}>
          Add Prisoner
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <NavLink 
          to="/admin/prison/:id" 
          activeClassName="selected" 
          activeStyle={{
            color: "blue",
          }}>
          Dashboard
        </NavLink>
      </Menu.Item>
      <Menu.Item>
        <Button onClick={signOutHandler}>Sign Out</Button>
      </Menu.Item>
    </Menu>
  )
}

export default NavAdmin