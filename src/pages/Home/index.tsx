import React from 'react'
import styled from 'styled-components'

import { Terminal } from '../../components'
import { colors, font } from '../../styles'

const Home: React.FC = () => {
  return (
    <Container>
      <Terminal />
    </Container>
  )
}

export default Home

const Container = styled.div`
  font-family: ${font};
`
