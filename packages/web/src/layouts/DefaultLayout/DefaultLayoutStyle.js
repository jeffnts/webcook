import styled, { createGlobalStyle } from 'styled-components'

import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'

export const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    
    li{
      text-decoration: none;
    }
  }
`

export const Wrapper = styled.div`

`
