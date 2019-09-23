import React from 'react'

import { RecipeProvider } from './contexts'

export const StoreProvider = ({children}) => {
  return (
    <RecipeProvider>
      {children}
    </RecipeProvider>
  )
}
