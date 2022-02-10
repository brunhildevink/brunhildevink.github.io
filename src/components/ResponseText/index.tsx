import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'

import { colors, font, typography } from '../../styles'
import { responseType } from '../../types'

interface Props {
  color?: string
  delay?: number
  type: responseType
  text: string
}

const ResponseText: React.FC<Props> = ({ color, delay, type, text }) => {
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
        {type === responseType.OUTPUT ? (
          <Text>{text}</Text>
        ) : (
          <>
            <NewLineIcon>{'~'}</NewLineIcon>
            <Input readOnly>{text}</Input>
          </>
        )}
      </Container>
    )
  } else {
    return <></>
  }
}

export default ResponseText

const Container = styled.div<{ type: responseType; color: string }>`
  ${({ type }) =>
    type === responseType.INPUT &&
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
