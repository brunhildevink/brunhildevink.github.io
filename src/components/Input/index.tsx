import React from 'react'
import styled from 'styled-components'
import { colors, font, typography } from '../../styles'

const Input: React.FC = () => {
  return (
    <Container>
      <NewLineIcon>{'~'}</NewLineIcon>
      <InputField autoFocus aria-label="terminal input field" spellCheck="false" />
    </Container>
  )
}

export default Input

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 8px;
  height: 100%;
`

const NewLineIcon = styled.p`
  color: ${colors.white};
  font-weight: ${typography.fontWeightBold};
  font-size: ${typography.fontSizeText}px;
  margin-top: 4px;
`

const InputField = styled.textarea`
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

  &:before {
    content: '>';
    display: block;
    width: 40px;
    height: 40px;
  }
`
