import React, { useReducer, createContext } from "react"

import {
  initialState,
  RecipeReducer } from '../reducers/RecipeReducer'

export const RecipeContext = createContext()

export const RecipeProvider = ({children}) => {
  const [ state, dispatch ] = useReducer(RecipeReducer, initialState)

  return (
    <RecipeContext.Provider
      value={
        {
          state,
          dispatch
        }
      }
    >
      {children}
    </RecipeContext.Provider>
  )
}

