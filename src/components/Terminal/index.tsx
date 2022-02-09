import React from 'react'
import styled from 'styled-components'

import { Input, TopBar } from '..'
import { colors } from '../../styles'
import ResponseText from '../ResponseText'

const Terminal: React.FC = () => {
  return (
    <Wrapper>
      <TopBar />
      <Container>
        <ResponseText color={colors.menuRed} text="Busy compiling..." />
        <ResponseText color={colors.menuGreen} delay={2000} text="Compiled successfully!" />
        <ResponseText
          color={colors.menuYellow}
          delay={3000}
          text="Start navigating the website by typing the following commands:"
        />
        <ResponseText color={colors.menuYellow} delay={3000} text="[About me, Projects, Social links]" />
        <Input />
      </Container>
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
  user-select: none;
`

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 8px;
  overflow-y: scroll;
  background: ${colors.darkGrey};
  border: 1px solid ${colors.ashGrey};
  border-top: 0px transparent;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`
