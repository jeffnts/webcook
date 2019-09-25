import React from 'react';

import {Wrapper} from './NotFoundStyle'

const NotFound = () => {
  return (
    <Wrapper>
      <img
        src={require('../../assets/images/not-found.svg')}
        alt="Esta página não existe."
      />
    </Wrapper>
  )
}

export default NotFound
