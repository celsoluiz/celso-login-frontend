import React from 'react'
import styled from 'styled-components'

const FormGroup = styled.div`
  margin-top: 16px;
`

const FormInput = styled.input`
  border: 1px solid #989fdb;
  border-radius: 8px;
  font-size: 0.625rem;
  height: 48px;
  line-height: 48px;
  padding: 17px;
  width: 256px;

  &::placeholder {
    color: #989fdb;
  }

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 1200px) {
  }
`

const Label = styled.label`
  color: #383e71;
  display: block;
  font-size: 0.625rem;
  line-height: 48px;
  margin-left: 11px;
  text-transform: uppercase;

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 1200px) {
  }
`

const FormField = ({ id, label, type, placeholder, name, change, error }) => (
  <FormGroup>
    <Label htmlFor={id}>{label}</Label>
    <FormInput
      type={type}
      id={id}
      placeholder={placeholder}
      name={name}
      onChange={change}
    />
    {error && <p>{error}</p>}
  </FormGroup>
)

export default FormField
