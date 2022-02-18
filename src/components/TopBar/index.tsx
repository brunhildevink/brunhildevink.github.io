import React from 'react'
import styled from 'styled-components'

import { MenuButton, Icons } from '..'
import { breakpoints, colors, typography } from '../../styles'

const TopBar: React.FC = () => {
  return (
    <Container id="top-bar">
      <ButtonContainer>
        <MenuButton ariaLabel="close-terminal" color={colors.menuRed} icon={Icons.Expand} />
        <MenuButton ariaLabel="minimize-terminal" color={colors.menuYellow} icon={Icons.Expand} />
        <MenuButton ariaLabel="expand-terminal" color={colors.menuGreen} icon={Icons.Expand} />
      </ButtonContainer>

      <Title>iTerm</Title>
    </Container>
  )
}

export default TopBar

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  width: 100%;
  height: 24px;
  background: ${colors.lightGrey};
  border: 1px solid ${colors.ashGrey};
  border-bottom: 0px transparent;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  @media ${breakpoints.md} {
    cursor: grab;
  }
`

const ButtonContainer = styled.div`
  margin-left: 8px;
`

const Title = styled.p`
  text-align: center;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  font-weight: ${typography.fontWeightBold};
  color: ${colors.white};
  font-size: ${typography.fontSizeLabel}px;
  user-select: none;
  pointer-events: none;
`
