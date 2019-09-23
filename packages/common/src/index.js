import { FETCH_RECIPES } from './graphql/queries/Recipe'

export const graphql = () =>{
  return{
    queries:{
      FETCH_RECIPES
    }
  }
}
