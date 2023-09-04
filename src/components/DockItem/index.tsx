import React from 'react'
import styled from 'styled-components'

import { colors } from '../../styles'

interface Props {
  image: string
  showBackground?: boolean
  showDot?: boolean
  onClick?: () => void
}

const MenuItem: React.FC<Props> = ({ image, showBackground = true, showDot = false, onClick }) => (
  <Wrapper>
    <Container onClick={onClick} showBackground={showBackground} showDot={showDot}>
      <Image src={image} />
    </Container>
  </Wrapper>
)

export default MenuItem

const Wrapper = styled.div`
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: wrap column;
`

const Container = styled.button<{ showBackground: boolean; showDot: boolean }>`
  width: 60px;
  height: 60px;
  border-radius: 14px;
  position: relative;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  border: none;

  &:hover {
    width: 67px;
    height: 67px;
  }

  ${({ showBackground }) =>
    showBackground &&
    `
    background: ${colors.white};
    padding: 4px;
      
  `}

  ${({ showDot }) =>
    showDot &&
    `
      :after {
        content: '';
        display: block;
        height: 4px;
        width: 4px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        position: absolute;
        bottom: -16px;
        left: 50%;
        transform: translateX(-50%);
      }
  `}
`

const Image = styled.div<{ src: string }>`
  border-radius: 14px;
  background: url(${({ src }) => src}) no-repeat center center;
  background-size: 60%;
  height: 100%;
`
