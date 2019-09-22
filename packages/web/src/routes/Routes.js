import React from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import { DefaultLayout } from '../layouts'

import {
  RecipeHome,
  RecipeDetails,
  RecipeCreate } from '../pages/Recipe'

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <DefaultLayout>
          <Route path='/receitas' component={RecipeHome}/>
          <Route path='/receitas/:slug' component={RecipeDetails}/>
          <Route path='/receitas/nova' component={RecipeCreate}/>
        </DefaultLayout>
      </Switch>
    </Router>
  )
}

