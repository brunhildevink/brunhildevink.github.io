import React from 'react'
import styled from 'styled-components'

import { TopBar } from '..'
import { colors } from '../../styles'

const Terminal: React.FC = () => {
  return (
    <Wrapper>
      <TopBar />
      <Container />
    </Wrapper>
  )
}

export default Terminal

const Wrapper = styled.div`
  width: 80%;
  max-width: 600px;
  height: 440px;
  box-shadow: 5px 14px 34px 10px rgba(0, 0, 0, 0.24);
  margin: 0 auto;
  transform: translateY(25%);
`

const Container = styled.div`
  height: 100%;
  width: 100%;
  background: ${colors.darkGrey};
  border: 1px solid ${colors.ashGrey};
  border-top: 0px transparent;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`
