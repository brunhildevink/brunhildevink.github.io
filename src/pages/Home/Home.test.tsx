import { render, screen } from '@testing-library/react'
import Home from './index'

describe('Home test', () => {
  test('Home displays "welcome"', () => {
    render(<Home />)
    const element = screen.getByText('welcome')
    expect(element).toBeInTheDocument()
  })
})
