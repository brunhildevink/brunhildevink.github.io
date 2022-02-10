import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'

import { colors, font, typography } from '../../styles'
import { OutputType } from '../../types'

interface Props {
  color?: string
  delay?: number
  type: OutputType
  text: string
}

const Output: React.FC<Props> = ({ color, delay, type, text }) => {
  const delayRef = useRef(delay)
  const [shouldShow, setShouldShow] = useState<boolean>(delay ? false : true)

  useEffect(() => {
    if (delayRef.current) {
      setTimeout(() => {
        setShouldShow(true)
      }, delayRef.current)
    }
  }, [])

  if (shouldShow) {
    return (
      <Container type={type} color={color || colors.white}>
        {type === OutputType.OUTPUT ? (
          <Text>{text}</Text>
        ) : (
          <>
            <NewLineIcon>{'~'}</NewLineIcon>
            <Input value={text} readOnly />
          </>
        )}
      </Container>
    )
  } else {
    return <></>
  }
}

export default Output

const Container = styled.div<{ type: OutputType; color: string }>`
  ${({ type }) =>
    type === OutputType.INPUT &&
    `
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 8px;
  `}

  margin-bottom: 12px;
  color: ${({ color }) => color};
`

const Text = styled.p`
  font-family: ${font};
  font-size: ${typography.fontSizeText}px;
  font-weight: ${typography.fontWeightMedium};
`

const Input = styled.textarea`
  border: none;
  background-image: none;
  background-color: transparent;
  box-shadow: none;
  resize: none;
  overflow-y: hidden;

  &:focus {
    outline: none;
  }

  display: inline-block;
  width: 100%;
  height: 100%;
  font-family: ${font};
  font-size: ${typography.fontSizeText}px;
  font-weight: ${typography.fontWeightMedium};
  color: ${colors.white};
`

const NewLineIcon = styled.p`
  color: ${colors.white};
  font-weight: ${typography.fontWeightBold};
  font-size: ${typography.fontSizeText}px;
`
