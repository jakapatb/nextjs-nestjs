import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { color } from 'styled-system'

const Container = styled(motion.div)`
  ${color}
  border: 1px solid red;
`
export const SplashScreen: React.FC = () => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }
  return (
    <Container
      drag="x"
      dragConstraints={{ left: -100, right: 100 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      Hi
    </Container>
  )
}
