import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { color } from 'styled-system'

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  overflow: hidden;
  background: #4f4f4f;
  opacity: 0.5;
  display: flex;
`
const Center = styled.div`
  margin: auto;
`

export const SplashScreen: React.FC = () => {
  return (
    <Container>
      <Center></Center>
    </Container>
  )
}
