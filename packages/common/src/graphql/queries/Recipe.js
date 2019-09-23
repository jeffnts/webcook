import gql from 'graphql-tag'

export const FETCH_RECIPES = gql`
    {
        recipes{
            id
            name
            image{
                url
            }
            tags{
                name
            }
        }
    }
`
