import { render, screen } from '@testing-library/react'
import ResponseText from '.'

describe('ResponseText test', () => {
  test('ResponseText prop "text" equals "test" when given "test"', () => {
    render(<ResponseText text="test" color="white" />)
    const element = screen.getByText('test')
    expect(element).toBeInTheDocument()
  })

  test('ResponseText should load in after 3000ms when prop is given a value of "3000"', async () => {
    const delay = 3000
    render(<ResponseText text="test" color="white" delay={delay} />)
    await new Promise((r) => setTimeout(r, delay))
    const element = screen.getByText('test')
    expect(element).toBeInTheDocument()
  })
})
