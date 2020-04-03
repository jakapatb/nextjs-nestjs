import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { color, ColorProps } from 'styled-system'
const Container = styled.div`
  perspective: 500px;
`
const CubeBox = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
`
const Rect = styled(motion.div)<ColorProps>`
  ${color}
  position: absolute;
  opacity: 0.66;
`
const Aux = styled(motion.div)`
  width: 100%;
  position: absolute;
  transform-style: preserve-3d;
`

interface Props {
  width: number
  height: number
  depth: number
}

export const Cube: React.FC<Props> = (dimension) => {
  const { height, width, depth } = dimension
  return (
    <Container>
      <CubeBox initial={{ rotateY: 65, rotateX: -30 }} style={{ z: 0, height, width }}>
        <Wall bg="#4a4a4a" position="top" dimension={dimension} />
        <Wall bg="yellow" position="bottom" dimension={dimension} />
        <Wall bg="red" position="right" dimension={dimension} />
        <Wall bg="#a5a5a5" position="left" dimension={dimension} />
        <Aux style={{ y: '-50%', height: depth }} initial={{ rotateX: '-90deg' }}>
          <Wall bg="blue" position="front" dimension={dimension} />
          <Wall bg="#123456" position="back" dimension={dimension} />
        </Aux>
      </CubeBox>
    </Container>
  )
}

const rotateSelector = (position, { width, height, depth }) => {
  /* x:  */
  switch (position) {
    case 'front':
      return {
        transform: `rotateX(${90}deg)`,
        transformOrigin: 'center top',
        width: '100%',
        top: '100%',
        height
      }
    case 'back':
      return {
        transform: `rotateX(${-90}deg)`,
        transformOrigin: 'center bottom',
        width: '100%',
        bottom: '100%',
        height
      }
    case 'right':
      return {
        transform: `translateX(-50%) rotateY(90deg)`,
        width: depth,
        height: '100%',
        left: '100%'
      }
    case 'left':
      return {
        transform: `translateX(50%) rotateY(90deg)`,
        width: depth,
        height: '100%',
        right: '100%'
      }

    case 'top':
      return {
        transform: `translateY(50%) rotateX(90deg)`,
        width: '100%',
        bottom: '100%',
        height: depth
      }
    case 'bottom':
      return {
        transform: `translateY(-50%) rotateX(90deg)`,
        height: depth,
        width: '100%',
        top: '100%'
      }
    default:
      return { transform: '', width, height, z: 0, x: 0, y: 0 }
  }
}
const Wall = ({ position, bg, dimension }) => {
  const { transform, ...rest } = rotateSelector(position, dimension)

  return <Rect transformTemplate={() => transform} style={rest} bg={bg} />
}
