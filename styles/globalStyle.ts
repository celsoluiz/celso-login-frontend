import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-size: 100%;
    margin: 0;
    padding: 0;
  }
`
