import React, { Fragment } from 'react'

import { GlobalStyle,  Wrapper } from './DefaultLayoutStyle'

import { Sidenav } from '../../components/Layout'

const DefaultLayout = ({children}) => {
  return (
   <Fragment>
     <GlobalStyle/>

     <Wrapper>
       <Sidenav/>
       {children}
     </Wrapper>
   </Fragment>
  )
}

export default DefaultLayout
