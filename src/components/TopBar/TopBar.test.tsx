import { render, screen } from '@testing-library/react'
import TopBar from '.'

describe('TopBar component test', () => {
  test('TopBar displays buttons', () => {
    render(<TopBar />)
    const element = screen.getByLabelText('close-terminal')
    expect(element).toBeInTheDocument()
  })
})
