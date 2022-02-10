import React, { KeyboardEvent, useState } from 'react'
import styled from 'styled-components'
import { colors, font, typography } from '../../styles'

interface Props {
  onSubmit: (input: string) => void
}

const Input: React.FC<Props> = ({ onSubmit }) => {
  const [textAreaValue, setTextAreaValue] = useState<string>('')

  const handleUserKeyPress = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      onSubmit(textAreaValue)
      setTextAreaValue('')
    }
  }

  return (
    <Container>
      <NewLineIcon>{'~'}</NewLineIcon>
      <TextArea
        aria-label="terminal input field"
        autoFocus
        onChange={(event) => setTextAreaValue(event.target.value)}
        onKeyPress={(event) => handleUserKeyPress(event)}
        spellCheck="false"
        value={textAreaValue}
      />
    </Container>
  )
}

export default Input

const Container = styled.form`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 8px;
  height: 100%;
`

const NewLineIcon = styled.p`
  color: ${colors.white};
  font-weight: ${typography.fontWeightBold};
  font-size: ${typography.fontSizeText}px;
`

const TextArea = styled.textarea`
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
