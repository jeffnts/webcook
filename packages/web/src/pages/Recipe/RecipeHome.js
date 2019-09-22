import React from 'react'

import { MDBRow, MDBCol } from "mdbreact"
import { Container } from './RecipeStyle'

import { Box } from '../../components/Recipe'

export const RecipeHome = () => {
  return (
    <Container>
      <MDBRow>
        <MDBCol
          xl='4' lg='6' md ='6' sm='12'
          className='my-2'
        >
            <Box/>
        </MDBCol>
      </MDBRow>
    </Container>
  )
}

