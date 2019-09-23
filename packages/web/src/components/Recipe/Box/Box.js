import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import {
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBBadge,
  MDBBtn,
  MDBIcon } from 'mdbreact'
import { Wrapper } from './BoxStyle'

const Box = ({data}) => {
  return (
    <Wrapper>
      <Link to={{pathname: '/receitas/detalhes', state: data.id}}>
        <MDBCardImage
          className="img-fluid"
          src={process.env.node !== 'production' && process.env.REACT_APP_STRAPI_URL+data.image.url}
          waves
        />
      </Link>

      <MDBCardBody>
        <MDBCardTitle
          className='text-center'
        >
          {data.name}
        </MDBCardTitle>

        <MDBCardText>
         {
           data.tags.map(tag =>(
             <MDBBadge
               key={tag.id}
               color={tag.color}
               className='m-2'
             >
               <Link>
                 {tag.name}
               </Link>
             </MDBBadge>
           ))
         }
        </MDBCardText>

        <Link to={{pathname: '/receitas/detalhes', state: data.id}}>
          <MDBBtn color="info">
            <MDBIcon icon="eye" className="mr-1" /> Ver
          </MDBBtn>
        </Link>
      </MDBCardBody>
    </Wrapper>
  )
}

export default Box

Box.propTypes = {
  data: PropTypes.array
}
