import React from 'react'
import { Button, Menu, } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import styled from 'styled-components'


const Footer = () => (
  <Menu size='small'>
    <Menu.Item>
    <i class="phone icon"></i>
    555-555-5555
    </Menu.Item>
    <Menu.Item position='left'>
    <i class="envelope outline icon"></i>
    prisonerskills@gmail.com
    </Menu.Item>
    <Menu.Item position='right'>
      <Link to="/about">
        About Us
      </Link>
    </Menu.Item>
    <Menu.Item >
      <Link to="/">
        Home
      </Link>
    </Menu.Item>
  </Menu>
)

export default Footer