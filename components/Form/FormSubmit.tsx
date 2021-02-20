import React from 'react'
import styled from 'styled-components'

const InputSubmit = styled.input`
  background: linear-gradient(267.79deg, #383e71 0%, #9d25b0 99.18%);
  box-shadow: 0px 10px 25px #cf99db;
  border: 0;
  border-radius: 8px;
  color: #fff;
  cursor: pointer;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  height: 48px;
  margin-top: 32px;
  text-transform: uppercase;
  width: 168px;

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 1200px) {
  }
`

const FormSubmit = ({ text }) => <InputSubmit type="submit" value={text} />

export default FormSubmit
