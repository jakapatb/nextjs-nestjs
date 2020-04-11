import React, { useEffect } from 'react'
import styled from 'styled-components'
import { color, ColorProps } from 'styled-system'
import { Header } from './components/header'

const Container = styled.div<ColorProps>`
  min-height: 1000vh;
  ${color}
`

export const Layout: React.FC = ({ children }) => {
  return (
    <Container bg="oceanBlue" color="white">
      <Header />
      {children}
      <div>Footer</div>
    </Container>
  )
}
