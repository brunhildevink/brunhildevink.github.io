import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

import { Home } from './pages'
import './styles/reset.css'

const App: React.FC = () => {
  return (
    <Wrapper>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Wrapper>
  )
}

export default App

const Wrapper = styled.div`
  height: 100vh;
`
