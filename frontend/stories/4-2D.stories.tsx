import React from 'react'
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

export const Demo: React.FC = () => {
  return (
    <Container>
      <Typing text={"I'm your father."} />
    </Container>
  )
}
