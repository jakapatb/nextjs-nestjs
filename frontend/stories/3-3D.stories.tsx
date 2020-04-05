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
export const CubeBox: React.FC = () => {
  return (
    <Contianer>
      <Cube width={256} height={256} depth={256}>
        <h1>1</h1>
        <h1>2</h1>
        <h1>3</h1>
        <h1>4</h1>
        <h1>5</h1>
        <h1>6</h1>
      </Cube>
    </Contianer>
  )
}

export default {
  title: '3D',
  component: CubeBox
}
