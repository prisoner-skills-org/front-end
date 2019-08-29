import React from 'react'
import { Button, Menu, } from 'semantic-ui-react'
import { Link } from "react-router-dom"
import styled from 'styled-components'


const Footer = () => (
  <Menu size='small'>
    <Menu.Item>
    <i class="phone icon"></i>
    801-555-4689
    </Menu.Item>
    <Menu.Item position='left'>
    <i class="envelope outline icon"></i>
     <a href="mailto:support@prisoner-skills.live">support@prisoner-skills.live</a> 
    </Menu.Item>
    <Menu.Item position='right'>
      <Link to="/about">
        About Us
      </Link>
    </Menu.Item>
    <Menu.Item >
      <Link to="/home">
        Home
      </Link>
    </Menu.Item>
  </Menu>
)

export default Footer