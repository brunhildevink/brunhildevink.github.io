import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import { font, typography } from '../../styles'

interface Props {
  color: string
  delay?: number
  text: string
}

const ResponseText: React.FC<Props> = ({ color, delay, text }) => {
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
    return <Container color={color}>{text}</Container>
  } else {
    return <></>
  }
}

export default ResponseText

const Container = styled.p<{ color: string }>`
  font-family: ${font};
  font-size: ${typography.fontSizeText}px;
  font-weight: ${typography.fontWeightMedium};
  color: ${({ color }) => color};
  margin-bottom: 12px;
`
