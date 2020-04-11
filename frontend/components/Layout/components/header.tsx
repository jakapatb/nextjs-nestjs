import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useViewportScroll, motion, useTransform, useSpring } from 'framer-motion'

const Container = styled.div`
  width: 100%;
  display: flex;
  position: sticky;
  height: 64px;
  font-size: 48px;
  top: 0;
  background: black;
`
const Float = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: flex-end;
`
const Image = styled.img`
  min-width: 10rem;
  max-width: 50rem;
  max-height: 50rem;
  border: 1px solid red;
`
const Name = styled.p``

export const Header: React.FC = () => {
  const [height, setHeight] = useState(480)
  const [padding, setPadding] = useState(400)
  const { scrollY } = useViewportScroll()
  const yHeight = useTransform(scrollY, [0, 800], [480, 64])
  const yFont = useTransform(scrollY, [0, 800], [400, 0])
  useEffect(() => yHeight.onChange((v) => setHeight(v)), [yHeight])
  useEffect(() => yFont.onChange((v) => setPadding(v)), [yFont])
  return (
    <Container>
      {/* <Image src="" alt="header" /> */}
      <Float style={{ height }}>
        <Name style={{ paddingLeft: padding }}>{`Jakkapat Boonroj`}</Name>
      </Float>
    </Container>
  )
}
