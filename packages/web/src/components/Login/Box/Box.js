import React, {useState, useContext} from 'react'
import {withRouter} from 'react-router-dom'
import {Formik, Form, Field} from 'formik'
import axios from 'axios'

import { SET_AUTHENTICATION } from '../../../store/actionTypes/userActionTypes'

import {Button} from 'semantic-ui-react'
import {Wrapper} from './BoxStyle'

import {UserContext} from '../../../store/contexts'

import {Register} from '../Register'

const Box = ({history}) => {
  const { state, dispatch } = useContext(UserContext)

  const [ isOpenRegister, setIsOpenRegister ] = useState(false)
  const [ isLoadingAuthentication, setIisLoadingAuthentication] = useState(false)

  return (
    <Wrapper>
      <img
        src={require('../../../assets/icons/user.svg')}
        alt="Login"
      />
      <Formik
        initialValues={{
          identifier: '',
          password: ''
        }}

        onSubmit={
          async (values) => {
            const {identifier, password} = values

            try {
              setIisLoadingAuthentication(true)

              const {data} = await axios
                .post(`${process.env.REACT_APP_STRAPI_URL}/auth/local`, {
                  identifier,
                  password
                })

              localStorage.setItem('token', data.jwt)
              localStorage.setItem('id', data.user._id)

              dispatch({
                type: SET_AUTHENTICATION,
                payload: {
                  isAuthenticated: true
                }
              })

              setIisLoadingAuthentication(false)
              history.push('/receitas')
            } catch (error) {
              console.log(error.message)
            }
          }
        }
      >
        {
          () => {
            return (
              <Form
                className="ui form"
              >
                <div className="field">
                  <label htmlFor="email">Email ou Username</label>
                  <Field
                    type='text'
                    name='identifier'
                    placeholder='Digite seu email ou username'
                  />
                </div>

                <div className="field">
                  <label htmlFor="password">Senha</label>
                  <Field
                    type='password'
                    name='password'
                    placeholder='Digite sua senha'
                  />
                </div>

                <p
                  onClick={() => setIsOpenRegister(true)}
                >
                  Cadastrar novo usuário
                </p>

                <Button
                  primary
                  loading={isLoadingAuthentication}
                  disabled={isLoadingAuthentication}
                >
                  Entrar
                </Button>
              </Form>
            )
          }
        }
      </Formik>

      <Register
        open={isOpenRegister}
        onClose={() => setIsOpenRegister(false)}
      />
    </Wrapper>
  )
}

export default withRouter(Box)
