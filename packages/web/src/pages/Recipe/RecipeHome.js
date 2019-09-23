import React from 'react'
import { useQuery } from '@apollo/react-hooks'

import { FETCH_RECIPES } from '@webbook/common/graphql/queries/Recipe'

import { MDBRow, MDBCol, MDBProgress  } from "mdbreact"
import { Container } from './RecipeStyle'

import { Box } from '../../components/Recipe'

export const RecipeHome = () => {
  const { loading, data } = useQuery(FETCH_RECIPES)

  return (
    <Container>
      <MDBRow>
        {
          loading
            ? <MDBProgress material preloader />
            : data.recipes.map(recipe => (
                <MDBCol
                  xl='4' lg='6' md ='6' sm='12'
                  className='my-2'
                  key={recipe.id}
                >
                  <Box
                    data={recipe}
                  />
                </MDBCol>
              ))
        }
      </MDBRow>
    </Container>
  )
}

