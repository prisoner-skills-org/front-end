import styled from 'styled-components'

const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;

  /* Breakpoint for tablets */
  @media (min-width: 576px) {
    max-width: 540px;
  }

  /* Breakpoint for small desktops */
  @media (min-width: 768px) {
    max-width: 720px;
  }

  /* Breakpoint for medium desktops */
  @media (min-width: 992px) {
    max-width: 960px;
  }

  /* Breakpoint for large desktops and HD devices */
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
`

export default Container