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
          image="https://cdn1.iconfinder.com/data/icons/ionicons-fill-vol-2/512/terminal-256.png"
          onClick={() => window.open('http://google.com')}
        />
        <DockItem
          image="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-512.png"
          onClick={() => window.open('https://github.com/brunhildevink')}
        />
        <DockItem
          image="https://cdn2.iconfinder.com/data/icons/threads-by-instagram/24/x-logo-twitter-new-brand-contained-512.png"
          onClick={() => window.open('https://twitter.com/bruunke')}
        />
        <DockItem
          image="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/84_Dev_logo_logos-256.png"
          onClick={() => window.open('https://dev.to/brunhildevink')}
        />
      </Dock>
    </Container>
  )
}

export default Home

const Container = styled.div`
  font-family: ${font};
`
