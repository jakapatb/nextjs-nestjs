import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  &:before {
    z-index: 1;
    content: ' ';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-image: linear-gradient(45deg, #6303b1, #ff0099);
    transform: skewY(-10deg);
  }
`
const Content = styled.div`
  z-index: 5;
  position: relative;
  max-width: 50rem;
  margin: 0 auto;
  min-height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 4rem;
  border: 1px dashed white;
  background-color: rgba(255, 255, 255, 0.33);
  backdrop-filter: blur(0.5rem);
  /* transform: skewY(10deg); */
`

export const Diagonal: React.FC = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  )
}
