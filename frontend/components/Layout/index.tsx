import React from 'react'
import styled from 'styled-components'
import { color, ColorProps } from 'styled-system'
const Container = styled.div<ColorProps>`
  min-height: 100vh;
  ${color}
`
const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
`

export const Layout: React.FC = ({ children }) => {
  return (
    <Container bg="blue" color="white">
      <HeaderContainer>Header</HeaderContainer>
      {children}
      <div>Footer</div>
    </Container>
  )
}
