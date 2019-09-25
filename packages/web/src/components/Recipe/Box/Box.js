import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import { Image, Label } from 'semantic-ui-react'
import { Card } from './BoxStyle'

const Box = ({data}) => {

  return (
    <Card>
      <Link to={{pathname: '/receitas/detalhes', state: data.id}}>
        <Image
          src={
            process.env.NODE_ENV !== 'production'
              ? process.env.REACT_APP_STRAPI_URL + data.image.url
              : data.image.url
          }
        />
      </Link>

      <Card.Content>
        <Card.Header>{data.name}</Card.Header>

        <Card.Description>
          {
            data.tags && data.tags.map(tag =>(
              <Label
                key={tag.id}
                color={tag.color}
              >
                {tag.name}
              </Label>
            ))
          }
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default Box

Box.propTypes = {
  data: PropTypes.object
}
