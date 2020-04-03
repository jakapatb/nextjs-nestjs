import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { color, ColorProps } from 'styled-system'
const Container = styled.div`
  perspective: 500px;
  border: 1px solid green;
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

  opacity: 0.8;
  border: 1px solid red;
`

interface Props {
  width: number
  height: number
  depth: number
}

export const Cube: React.FC<Props> = (dimension) => {
  return (
    <Container>
      <CubeBox animate={{ rotateY: 20, rotateX: -30 }} style={{ z: 0 }} transition={{ duration: 1 }}>
        <Wall bg="blue" position="front" dimension={dimension} />
        <Wall bg="#123456" position="back" dimension={dimension} />
        <Wall bg="red" position="right" dimension={dimension} />
        <Wall bg="#a5a5" position="left" dimension={dimension} />
        <Wall bg="#4a4a" position="top" dimension={dimension} />
        <Wall bg="yellow" position="bottom" dimension={dimension} />
      </CubeBox>
    </Container>
  )
}

const rotateSelector = (position, { width, height, depth }) => {
  const heighestValue = Math.max(width, height, depth)
  /* x:  */
  switch (position) {
    case 'front':
      return {
        rotate: `rotateY(${0}deg)`,
        width,
        height,
        z: depth / 2,
        x: 0,
        y: 0
      }
    case 'back':
      return {
        rotate: `rotateY(${180}deg)`,
        width,
        height,
        z: depth / 2,
        x: 0,
        y: 0
      }
    case 'right':
      return {
        rotate: `rotateY(${90}deg)`,
        width: depth,
        height,
        z: width / 2,
        x: 0,
        y: 0
      }
    case 'left':
      return { rotate: `rotateY(${-90}deg)`, width: depth, height, z: width / 2, x: 0, y: 0 }

    case 'top':
      return {
        rotate: `rotateX(${90}deg)`,
        width,
        height: depth,
        z: width - depth / 2,
        x: 0,
        y: 0
      }
    case 'bottom':
      return {
        rotate: `rotateX(${-90}deg)`,
        width,
        height: depth,
        z: height - depth / 2,
        x: 0,
        y: 0
      }
    default:
      return { rotate: '', width, height, z: 0, x: 0, y: 0 }
  }
}
const Wall = ({ position, bg, dimension }) => {
  const { rotate, ...rest } = rotateSelector(position, dimension)

  return (
    <Rect
      transformTemplate={({ x, y, z }) => `${rotate} translateX(${x}) translateY(${y}) translateZ(${z})`}
      style={rest}
      bg={bg}
    />
  )
}
