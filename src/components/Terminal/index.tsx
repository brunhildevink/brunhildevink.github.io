import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

import { Input, Output, TopBar } from '..'
import { colors } from '../../styles'
import terminalOutputData from '../../api'
import { drag, returnOutputResponses } from '../../utils'
import { TerminalOutput } from '../../types'

const Terminal: React.FC = () => {
  const [data, setData] = useState<TerminalOutput[]>(terminalOutputData)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    scrollToBottom()
  }, [data])

  useEffect(() => {
    drag()
  }, [])

  const scrollToBottom = () => {
    if (containerRef && containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight
    }
  }

  const renderOutput = data.map((response, index) => (
    <Output
      color={response.color}
      delay={response.delay}
      key={index}
      type={response.type}
      text={response.text}
      updateScrollTop={scrollToBottom}
    />
  ))

  const handleInputResponse = (input: string) => {
    const newData = [...data]
    returnOutputResponses(input).forEach((response) => newData.push(response))
    setData(newData)
  }

  return (
    <Wrapper id="draggable">
      <TopBar />
      <Container ref={containerRef}>
        {renderOutput}
        <Input onSubmit={handleInputResponse} />
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
  position: absolute;
  top: 50px;
  left: 50px;
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
