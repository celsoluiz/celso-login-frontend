import React from 'react'
import styled from 'styled-components'

const Text = styled.p`
  color: #989fdb;
  font-size: 0.75rem;
  font-weight: bold;
  line-height: 20px;
  margin-top: 16px;
  text-align: center;

  @media only screen and (min-width: 768px) {
    font-size: 1rem;
    text-align: left;
    width: 220px;
  }
`

const LeadText = ({ children }) => <Text>{children}</Text>

export default LeadText
