import React, { Fragment } from 'react'
import { Formik, Form, Field } from 'formik'
import { useMutation } from '@apollo/react-hooks'
import PropTypes from 'prop-types'

import { font } from '../../../config/styles'

import { Button, Icon } from 'semantic-ui-react'
import { Modal } from './RegisterStyle'

const Register = ({open, onClose}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <Modal.Header>
        <img
          src={require('../../../assets/icons/user-register.svg')}
          alt="Novo usuário"
        />

      </Modal.Header>

      <Formik
        initialValues={{
          username:'',
          name: '',
          email: '',
          password: '',
          passwordConfirmation: ''
        }}

        onSubmit={
          (values)=>{
            const { username, name, email, password, passwordConfirmation  } = values

            onClose()
          }
        }
      >
        {
          ({handleSubmit, values})=>{
            return(
              <Fragment>
                <Modal.Content>
                  <Form
                    className="ui form"
                  >
                    <div className="field">
                      <label htmlFor="Username">Username</label>
                      <Field
                        type='text'
                        name='username'
                        value={values.username}
                        placeholder='Digite seu nome de usuário. Ex: joao'
                      />
                    </div>

                    <div className="field">
                      <label htmlFor="name">Nome</label>
                      <Field
                        type='text'
                        name='name'
                        placeholder='Digite seu nome'
                      />
                    </div>

                    <div className="field">
                      <label htmlFor="email">Email</label>
                      <Field
                        type='email'
                        name='email'
                        placeholder='Digite seu endereço de email'
                      />
                    </div>

                    <div className="field">
                      <label htmlFor="email">Senha</label>
                      <Field
                        type='password'
                        name='password'
                        placeholder='Digite sua senha'
                      />
                    </div>

                    <div className="field">
                      <label htmlFor="email">Confirmar senha</label>
                      <Field
                        type='password'
                        name='passwordConfirmation'
                        placeholder='Digite de novo sua senha para confirmá-la'
                      />
                    </div>
                  </Form>
                </Modal.Content>

                <Modal.Actions>
                  <Button color='red' onClick={onClose} inverted>
                    <Icon name='close' /> cancelar
                  </Button>

                  <Button color='green' onClick={handleSubmit} inverted>
                    <Icon name='checkmark' /> Cadastrar
                  </Button>
                </Modal.Actions>
              </Fragment>
            )
          }
        }
      </Formik>
    </Modal>
  )
}

export default Register

Register.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func
}
