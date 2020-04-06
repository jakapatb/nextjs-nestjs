import React from 'react'
import { Cube } from 'components/Cube'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Contianer = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin: 10rem;
  h1 {
    font-size: 120px;
  }
`
const Homepage: React.FC = () => {
  return <Contianer></Contianer>
}

export default Homepage
