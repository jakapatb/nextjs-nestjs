import React from 'react'
import { motion, useMotionValue } from 'framer-motion'
import styled from 'styled-components'
import { color, ColorProps } from 'styled-system'
const Container = styled(motion.div)`
  perspective: 2048px;
  display: grid;
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
  opacity: 1;
`
const Aux = styled(motion.div)`
  width: 100%;
  position: absolute;
  transform-style: preserve-3d;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 4rem);
  grid-template-rows: repeat(4, 4rem);
  div {
    width: 100%;
    height: 100%;
    background-color: blue;
  }
`
interface Props {
  width: number
  height: number
  depth: number
}

export const Cube: React.FC<Props & any> = ({ children, ...dimension }) => {
  const { height, width, depth } = dimension
  const x = useMotionValue(-20)
  const y = useMotionValue(45)
  return (
    <Container>
      <CubeBox
        style={{ z: 0, height, width, rotateY: y, rotateX: x }}
        drag
        dragConstraints={{
          left: 90,
          right: 90,
          top: 90,
          bottom: 90
        }}
        onDrag={(event, info) => {
          x.set(info.point.x)
          y.set(info.point.y)
        }}
      >
        <Wall bg="#4a4a4a" position="top" dimension={dimension}>
          {children[0]}
        </Wall>
        <Wall bg="yellow" position="bottom" dimension={dimension}>
          {children[1]}
        </Wall>
        <Wall bg="red" position="right" dimension={dimension}>
          {children[2]}
        </Wall>
        <Wall bg="#a5a5a5" position="left" dimension={dimension}>
          {children[3]}
        </Wall>
        <Aux style={{ y: '-50%', height: depth }} initial={{ rotateX: '-90deg' }}>
          <Wall bg="blue" position="front" dimension={dimension}>
            {children[4]}
          </Wall>
          <Wall bg="#123456" position="back" dimension={dimension}>
            {children[5]}
          </Wall>
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
        transform: `rotateX(${90}deg) scaleX(-1)`,
        transformOrigin: 'center top',
        width: '100%',
        top: '100%',
        height
      }
    case 'back':
      return {
        transform: `rotateX(${-90}deg) scaleX(-1) `,
        transformOrigin: 'center bottom',
        width: '100%',
        bottom: '100%',
        height
      }
    case 'right':
      return {
        transform: `translateX(-50%) rotateY(90deg) scaleX(-1)`,
        width: depth,
        height: '100%',
        left: '100%'
      }
    case 'left':
      return {
        transform: `translateX(50%) rotateY(90deg) scaleX(-1)`,
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
        transform: `translateY(-50%) rotateX(90deg) scaleX(-1)`,
        height: depth,
        width: '100%',
        top: '100%'
      }
    default:
      return { transform: '', width, height, z: 0, x: 0, y: 0 }
  }
}
const Wall: React.FC<any> = ({ position, bg, dimension, children }) => {
  const { transform, ...rest } = rotateSelector(position, dimension)

  return (
    <Rect transformTemplate={() => transform} style={rest} bg={bg}>
      {children}
    </Rect>
  )
}
