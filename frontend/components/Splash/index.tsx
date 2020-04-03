import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import styled from 'styled-components'
import { color } from 'styled-system'
import { useRouter } from 'next/router'

const Container = styled(motion.div)`
  /*  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #000; */
  opacity: 1;
`
export const SplashScreen: React.FC = ({ children }) => {
  const pageVariants = {
    initial: {
      opacity: 0
    },
    in: {
      opacity: 1
    },
    out: {
      opacity: 0
    }
  }

  return (
    <Container initial="initial" animate="in" exit="out" variants={pageVariants}>
      {children}
    </Container>
  )
}
