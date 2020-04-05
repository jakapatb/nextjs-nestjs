import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'

const Container = styled.div`
  display: flex;
`
const Char = styled(motion.div)``
interface Props {
  text: string
}

export const Typing: React.FC<Props> = ({ text }) => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start((i) => ({
      width: 'unset',
      opacity: 1,
      minWidth: '0.3em',
      transition: { delay: i * 0.15 }
    }))
  }, [])
  return (
    <Container>
      {text.split('').map((char, i) => (
        <Char custom={i} animate={controls} initial={{ width: 0, opacity: 0 }}>
          {char}
        </Char>
      ))}
      <Char
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          ease: 'easeInOut',
          loop: Infinity
        }}
      >
        |
      </Char>
    </Container>
  )
}
