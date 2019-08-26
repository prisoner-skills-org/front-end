// Link.js
import styled from 'styled-components'

const Link = styled.a`
  font-weight: bold;
  text-decoration: none;
  color: #7f8c8d;
  transition: color .25s ease-in-out;

  &:focus,
  &:hover {
    color: #95a5a6;
  }
`

export default Link