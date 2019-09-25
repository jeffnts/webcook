import gql from 'graphql-tag'

export const FETCH_RECIPES = gql`
    query fetchRecipes($where: JSON!){
        recipes(where: $where){
            id
            name
            image{
                url
            }
            tags{
                id
                name
                color
            }
        }
    }
`
