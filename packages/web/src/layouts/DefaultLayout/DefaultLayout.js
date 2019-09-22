import React, { Fragment } from 'react'

import { GlobalStyle,  Wrapper } from './DefaultLayoutStyle'

const DefaultLayout = ({children}) => {
  return (
   <Fragment>
     <GlobalStyle/>

     <Wrapper>
       {children}
     </Wrapper>
   </Fragment>
  )
}

export default DefaultLayout
