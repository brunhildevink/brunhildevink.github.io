import React from 'react'
import styled from 'styled-components'

import { Dock, DockItem, Terminal } from '../../components'
import { font } from '../../styles'

const Home: React.FC = () => {
  return (
    <Container>
      <Terminal />
      <Dock>
        <DockItem
          image="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Linkedin2_svg-512.png"
          onClick={() => window.open('https://www.linkedin.com/in/brunhilde-vink/')}
        />
        <DockItem
          image="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/terminal-512.png"
          onClick={() => window.open('http://google.com')}
          showDot
        />
        <DockItem
          image="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-512.png"
          onClick={() => window.open('https://github.com/brunhildevink')}
        />
      </Dock>
    </Container>
  )
}

export default Home

const Container = styled.div`
  font-family: ${font};
`
