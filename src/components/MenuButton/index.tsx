import React from 'react'
import styled from 'styled-components'

import { SvgProps } from '../Icon'

interface Props {
  ariaLabel: string
  color: string
  icon: React.ComponentType<SvgProps>
}

const MenuButton: React.FC<Props> = ({ ariaLabel, color, icon: Icon }) => {
  return (
    <Button color={color} aria-label={ariaLabel}>
      {/* <Icon ariaHidden="true" /> */}
    </Button>
  )
}

export default MenuButton

const Button = styled.button<{ color: string }>`
  background: ${({ color }) => color};
  border-radius: 50%;
  height: 12px;
  width: 12px;
  cursor: pointer;
  border: none;
  margin-right: 8px;
`
