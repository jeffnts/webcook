import React from 'react'

import {
  UserProvider,
  RecipeProvider } from './contexts'

export const StoreProvider = ({children}) => {
  return (
   <UserProvider>
     <RecipeProvider>
       {children}
     </RecipeProvider>
   </UserProvider>
  )
}
