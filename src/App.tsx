import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import styled, { createGlobalStyle } from 'styled-components'

import { Home } from './pages'
import { colors } from './styles'
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
    background: ${colors.black};
    height: 100vh;

    * {
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
    }
  }
`
