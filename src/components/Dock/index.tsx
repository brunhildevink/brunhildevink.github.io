import React from 'react'
import styled from 'styled-components'

import { colors } from '../../styles'

interface Props {
  children: JSX.Element[]
}

const Menu: React.FC<Props> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>
}

export default Menu

const Wrapper = styled.span`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 80px;
  grid-template-rows: 1fr;
  background: rgba(0, 0, 0, 0.2);
  height: 92px;
  min-width: 200px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 24px;
  border: 1px solid ${colors.ashGrey};
  backdrop-filter: blur(1em);
  padding-bottom: 8px;
`
