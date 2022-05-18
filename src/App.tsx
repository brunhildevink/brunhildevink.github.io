import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

import { Home } from './pages'
import image from './assets/images/background.png'
import './styles/reset.css'

const App: React.FC = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div``

const GlobalStyle = createGlobalStyle`
  body {
    background: url(${image}) center center no-repeat;
    background-size: cover;
    height: 100vh;

    * {
      box-sizing: border-box;
    }
  }

  .no-select {
    user-select: none;
  }
  
`
