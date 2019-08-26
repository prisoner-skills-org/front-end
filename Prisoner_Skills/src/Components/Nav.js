import React from 'react'
import { Menu, Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const Nav = () => {
  const userToken = localStorage.getItem("token")

  return (
    <>
    { 
      userToken ?
      <Menu floated='right' fluid='true' >
        <Menu.Item  position='right'>
          Add Prisoner
        </Menu.Item>
        <Menu.Item>
          Dashboard
        </Menu.Item>
        <Menu.Item>
          Sign Out
        </Menu.Item>
      </Menu>
      :
      <Menu color='blue'>
        <Menu.Item position='left'>
          <Button primary>Sign up</Button>
        </Menu.Item>
        <Menu.Item position='right'>
          Login
        </Menu.Item>
      </Menu>
    }
    </>
  )
}

export default Nav