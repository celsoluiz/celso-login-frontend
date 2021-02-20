import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: #faf5ff;
  border-radius: 8px;
  position: absolute;
  width: 311px;
  height: 357px;
  left: 32px;
  top: 139px;

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 1200px) {
  }
`

const Container = ({ children }) => <Wrapper>{children}</Wrapper>

export default Container
