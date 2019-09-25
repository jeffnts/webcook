import React, { useContext } from 'react'
import { useQuery } from '@apollo/react-hooks'

import { graphql } from '@webcook/common'

import { DefaultLayout } from '../../layouts/DefaultLayout'

import { Placeholder } from 'semantic-ui-react'
import { Container } from '../../components/Layout/UI'

import { UserContext } from '../../store/contexts'

import { Box } from '../../components/Recipe'

const { queries: { FETCH_RECIPES } } = graphql

export const RecipeHome = () => {
  const { state } = useContext(UserContext)
  const {_id } = state

  const { loading, data } = useQuery(FETCH_RECIPES, {
    variables:{
      where:{
        users:{
          _id
        }
      }
    }
  })

  return (
    <DefaultLayout>
      <Container>
        {
          loading
            ? <Placeholder>
              <Placeholder.Line length='full' />
              <Placeholder.Line length='very long' />
              <Placeholder.Line length='long' />
              <Placeholder.Line length='medium' />
              <Placeholder.Line length='short' />
              <Placeholder.Line length='very short' />
            </Placeholder>
            : data.recipes.length > 0
                ? data.recipes.map(recipe =>(
                    <Box
                      key={recipe.id}
                      data={recipe}
                    />
                  ))
                : <h1>Sem receitas cadastradas :(</h1>
        }
      </Container>
    </DefaultLayout>
  )
}

