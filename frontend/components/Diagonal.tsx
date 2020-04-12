import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'
import { motion, useCycle } from 'framer-motion'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5rem, auto));
  grid-gap: 2rem;
  justify-content: center;
  transform: skewY(-10deg);
  background-image: linear-gradient(45deg, #6303b1, #ff0099);
`
const Content = styled(motion.div)`
  z-index: 5;
  width: 20rem;
  height: 20rem;

  margin: 0 auto;
  font-size: 4rem;
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.33);
  backdrop-filter: blur(0.5rem);
  transform: skewY(10deg);
`
const Flexable = styled(motion.div)`
  position: absolute;
  top: 0;
  background: blue;
  bottom: 0;
`

export const Diagonal: React.FC = ({ children }) => {
  const containerRef = useRef(null)

  const handleExpand = () => {
    console.log('expand')
  }
  return (
    <Container>
      <Content whileHover={{ width: '40rem' }}>Hi</Content>
      <Content whileHover={{ width: '40rem' }}>Hi</Content>
      <Content whileHover={{ width: '40rem' }}>Hi</Content>
    </Container>
  )
}
