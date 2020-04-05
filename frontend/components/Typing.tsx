import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion, useAnimation } from 'framer-motion'

const Container = styled.div`
  display: flex;
  will-change: opacity;
`
const Char = styled(motion.div)`
  overflow: hidden;
  width: max-content;
`
interface Props {
  text: string
}

export const Typing: React.FC<Props> = ({ text }) => {
  const controls = useAnimation()

  useEffect(() => {
    const timeout = () =>
      setTimeout(() => {
        controls.start((i) => ({
          width: 0,
          opacity: 0,
          minWidth: 'unset',
          transition: { delay: (text.split('').length - (i + 1)) * 0.15 }
        }))
      }, 2000)
    const hanlder = async (timeout) => {
      await controls.start((i) => ({
        width: 'unset',
        opacity: 1,
        minWidth: '0.3em',
        transition: { delay: i * 0.2 }
      }))
      await timeout()
    }
    hanlder(timeout)
    return () => clearTimeout(timeout)
  }, [text])
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
          duration: 0.66,
          ease: 'easeInOut',
          loop: Infinity
        }}
      >
        |
      </Char>
    </Container>
  )
}
