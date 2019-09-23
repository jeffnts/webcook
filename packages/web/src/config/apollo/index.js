import { HttpLink } from 'apollo-link-http'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'

process.env.NODE_ENV !== 'production' && require('dotenv').config()

const httpLink = new HttpLink({
  uri: `${process.env.REACT_APP_STRAPI_URL}/graphql`
})

export const apolloClient =  new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
})
