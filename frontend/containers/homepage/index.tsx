import React from 'react'
import { Cube } from 'components/Cube'
import styled from 'styled-components'

const Contianer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10rem;
`
const Homepage: React.FC = () => {
  return (
    <Contianer>
      <Cube width={300} height={300} depth={500} />
    </Contianer>
  )
}

export default Homepage
