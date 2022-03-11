import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import DOMPurify from 'dompurify'

import { colors, font, typography } from '../../styles'
import { OutputType } from '../../types'

interface Props {
  callback?: () => any
  color?: string
  delay?: number
  type?: OutputType
  text: string
  updateScrollTop: () => void
}

const Output: React.FC<Props> = ({ callback, color, delay, type = 'SYSTEM', text, updateScrollTop }) => {
  const delayRef = useRef(delay)
  const callbackRef = useRef(callback)
  const updateScrollTopRef = useRef(updateScrollTop)
  const [shouldShow, setShouldShow] = useState<boolean>(delay ? false : true)
  const purifiedHTML = DOMPurify.sanitize(text, { ADD_ATTR: ['target'], USE_PROFILES: { html: true } })

  useEffect(() => {
    if (delayRef.current) {
      setTimeout(() => {
        setShouldShow(true)
        updateScrollTopRef.current()
      }, delayRef.current)
    }

    if (callbackRef.current) {
      callbackRef.current()
    }
  }, [callbackRef, updateScrollTopRef])

  if (shouldShow) {
    return (
      <Container outputType={type} color={color || colors.white}>
        {type === 'SYSTEM' ? (
          <OutputValue dangerouslySetInnerHTML={{ __html: purifiedHTML }} />
        ) : (
          <>
            <NewLineIcon>{'~'}</NewLineIcon>
            <UserInput>{text}</UserInput>
          </>
        )}
      </Container>
    )
  } else {
    return <></>
  }
}

export default Output

const Container = styled.div<{ outputType: OutputType; color: string }>`
  ${({ outputType }) =>
    outputType === 'USER' &&
    `
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 8px;
  align-items: center;
  height: 20px;
  `}

  margin-bottom: 12px;

  > * {
    color: ${({ color }) => color};
    font-family: ${font};
    font-size: ${typography.fontSizeText}px;
    font-weight: ${typography.fontWeightRegular};
  }
`

const OutputValue = styled.div`
  a {
    color: ${colors.white};
  }
`

const UserInput = styled.span`
  display: inline-block;
  width: 100%;
  height: 100%;
  line-height: 20px;
`

const NewLineIcon = styled.span`
  color: ${colors.white};
  font-weight: ${typography.fontWeightBold};
  font-size: ${typography.fontSizeText}px;
`
