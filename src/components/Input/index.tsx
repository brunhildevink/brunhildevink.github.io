import React from 'react'
import styled from 'styled-components'
import { colors, font, typography } from '../../styles'

const Input: React.FC = () => {
  return (
    <Container>
      <NewLineIcon>{'~'}</NewLineIcon>
      <InputField autoFocus aria-label="terminal input field" />
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

const NewLineIcon = styled.span`
  color: ${colors.menuYellow};
`

const InputField = styled.textarea`
  border: none;
  background-image: none;
  background-color: transparent;
  box-shadow: none;
  resize: none;

  &:focus {
    outline: none;
  }

  display: inline-block;
  width: 100%;
  height: 100%;
  font-family: ${font};
  font-size: ${typography.fontSizeText}px;
  color: ${colors.white};

  &:before {
    content: '>';
    display: block;
    width: 40px;
    height: 40px;
  }
`
