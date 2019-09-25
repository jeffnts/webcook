import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'

process.env.NODE_ENV !== 'production' && require('dotenv').config()


const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
})

const httpLink = new HttpLink({
  uri: `${process.env.REACT_APP_STRAPI_URL}/graphql`
})

export const apolloClient =  new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
})
