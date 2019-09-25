import React, { Fragment, useState, useContext, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import  jwt from 'jsonwebtoken'

import { SET_AUTHENTICATION } from '../store/actionTypes/userActionTypes'

import { apolloClient } from '../config/apollo'

import PrivateRoute from './PrivateRoute'

import { LoginPage } from '../pages/Login'
import {
  RecipeHome,
  RecipeDetails,
  RecipeCreate } from '../pages/Recipe'
import { NotFound } from '../pages/NotFound'

import { UserContext } from '../store/contexts'

export const Routes = () => {
  const { state, dispatch } = useContext(UserContext)

  const [ isLoadingAuth, setIsLoadingAuth ] = useState(true)

  async function checkToken(){
    const isValidToken = await jwt.decode(state.token)

    dispatch({
      type: SET_AUTHENTICATION,
      payload: {
        isAuthenticated: !!isValidToken,
        isLoadingAuthentication: false
      }
    })

    setIsLoadingAuth(false)
  }

  useEffect(()=>{
    checkToken()
  },[])

  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <Switch>

          <Route exact path='/login' component={LoginPage}/>

          {
            !isLoadingAuth
              &&<Fragment>
                    <PrivateRoute exact path='/' component={RecipeHome}/>
                    <PrivateRoute exact path='/receitas' component={RecipeHome}/>
                    <PrivateRoute exact path='/receitas/detalhes' component={RecipeDetails}/>
                    <PrivateRoute exact path='/receitas/nova' component={RecipeCreate}/>
            </Fragment>
          }
          {
            !isLoadingAuth
              && <Route component={NotFound}/>
          }
        </Switch>
      </Router>
    </ApolloProvider>
  )
}

