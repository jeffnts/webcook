import styled, { createGlobalStyle } from 'styled-components'

import 'semantic-ui-css/semantic.min.css'

export const GlobalStyle = createGlobalStyle`
  body{
    @import url('https://fonts.googleapis.com/css?family=Baloo&display=swap');
  
    margin: 0;
    padding: 0;
    
    li{
      text-decoration: none;
    }    
    
  }
`

export const Wrapper = styled.div`

`
