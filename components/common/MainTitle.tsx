import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.5rem;
  font-weight: normal;
  line-height: 32px;
  margin: 0 auto;
  text-align: center;
  width: 139px;

  @media only screen and (min-width: 768px) {
    font-size: 2.5rem;
    line-height: 48px;
    text-align: left;
    width: 231px;
  }
`

const MainTitle: React.FC<{ title: string }> = ({ title }) => (
  <Title>{title}</Title>
)

export default MainTitle
