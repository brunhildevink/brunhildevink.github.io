import React from 'react'
import styled from 'styled-components'

import { colors, font } from '../../styles'

const Home: React.FC = () => {
  return <Container>welcome</Container>
}

export default Home

const Container = styled.div`
  font-family: ${font};
  background: ${colors.grey};
  height: 100%;
`