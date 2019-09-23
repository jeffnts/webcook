import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'

import { apolloClient } from '../config/apollo'

import { DefaultLayout } from '../layouts'

import {
  RecipeHome,
  RecipeDetails,
  RecipeCreate } from '../pages/Recipe'

export const Routes = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <Switch>
          <DefaultLayout>
            <Route path='/receitas' component={RecipeHome}/>
            <Route path='/receitas/detalhe' component={RecipeDetails}/>
            <Route path='/receitas/nova' component={RecipeCreate}/>
          </DefaultLayout>
        </Switch>
      </Router>
    </ApolloProvider>
  )
}

