import React from 'react'
import styled from 'styled-components'
import FormField from './FormField'
import FormSubmit from './FormSubmit'

const Form = styled.form`
  margin: 4px auto 0;
`

const LoginForm = () => {
  const sendLogin = evt => {
    evt.preventDefault()
  }

  return (
    <Form onSubmit={sendLogin}>
      <FormField
        id="formEmail"
        label="E-mail"
        type="email"
        placeholder="user.name@mail.com"
        name="email"
        change=""
        error=""
      />
      <FormField
        id="formPassword"
        label="Senha"
        type="password"
        placeholder="abcdefg"
        name="password"
        change=""
        error=""
      />
      <FormSubmit text="Entrar" />
    </Form>
  )
}

export default LoginForm
