import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App test', () => {
  test('App displays "app"', async () => {
    render(<App />)
    const element = await screen.getByText('App')
    expect(element).toBeInTheDocument()
  })
})
