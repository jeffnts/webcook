import React, { useEffect, useState, useContext } from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'

import { UserContext } from '../store/contexts'

const PrivateRoute = ({component: Component, ...rest}) => {
  const { state } = useContext(UserContext)
 /* const  [ isAuthenticated, setIstautheticated ] = useState(false)
  const  [ isLoadingAuth, setIsLoaddingAuth ] = useState(true)

  /*async function checkAuthentication(){
    const isValidToken = await jwt.decode(state.token)

    setIstautheticated(true)
    setIsLoaddingAuth(false)
  }

  useEffect(()=>{
    checkAuthentication()
  },[])*/

  return (
    <Route
      {...rest}
      render={props =>
        state.isAuthenticated
          ? <Component {...props}/>
          : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>
      }
    />
  )
}

export default withRouter(PrivateRoute)
