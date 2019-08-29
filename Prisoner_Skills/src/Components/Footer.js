import React from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from "react-router-dom"


const Footer = () => (
  <Menu size='small'>
    <Menu.Item>
    <i class="phone icon"></i>
    801-555-4689
    </Menu.Item>
    <Menu.Item position='left'>
    <i class="envelope outline icon"></i>
    support@prisonerskills.com
    </Menu.Item>
    <Menu.Item position='right'>
      <a href="http://www.patrickjstevenson.com/prisoner-skills/about.html">
        About Us
      </a>
    </Menu.Item>
    <Menu.Item >
      <a href="http://www.patrickjstevenson.com/prisoner-skills/index.html">
        Home
      </a>
    </Menu.Item>
  </Menu>
)

export default Footer