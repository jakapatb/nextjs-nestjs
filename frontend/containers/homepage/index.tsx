import React from 'react'
import styled from 'styled-components'
import { Layout } from 'components/Layout'
import { Typing } from 'components/Typing'
import { Button } from 'components/Button'
import { Diagonal } from 'components/Diagonal'

const NextButton = styled(Button)`
  &&& {
    padding: 0;
    width: 4rem;
    height: 4rem;
  }
  transform: rotate(45deg);
`
const Hero = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  z-index: 100;
  padding: 18rem;
  background-color: black;
`
const Center = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;
  font-size: 3rem;
  span {
    margin-right: 1rem;
  }
`
const Intro = styled.div`
  height: 10rem;
`
const Homepage: React.FC = () => {
  return (
    <Layout>
      {' '}
      <Hero>
        <Intro>
          <h1>Hi my name is..</h1>
        </Intro>
        <Center>
          <span>{`I'm `}</span>
          <Typing text={'Front-end Web Developer'} />
        </Center>
        <Center>
          <NextButton>{`>`}</NextButton>
        </Center>
      </Hero>{' '}
      <Diagonal>Hii</Diagonal>
    </Layout>
  )
}

export default Homepage
