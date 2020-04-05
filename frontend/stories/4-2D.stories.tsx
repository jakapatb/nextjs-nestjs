import React, { useState, useEffect } from 'react'
import { Typing } from 'components/Typing'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  background: #000;
  color: #fff;
  font-size: 64px;
  min-height: 30rem;
  align-items: center;
`

export default {
  title: '2D',
  component: Typing
}

const text = ["I'm your father.", 'Bad guy']

export const Demo: React.FC = () => {
  const [state, setState] = useState(0)
  useEffect(() => {
    const handler = setInterval(() => {
      setState((state) => (state + 1 >= text.length ? 0 : state + 1))
    }, 10000)
    return () => {
      clearInterval(handler)
    }
  }, [])
  return (
    <Container>
      <Typing text={text[state]} />
    </Container>
  )
}
