import { act, render, screen } from '@testing-library/react'

import Output from '.'

describe('Output component test', () => {
  const mockFunction = () => null

  beforeAll(() => {
    jest.useFakeTimers()
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  test('Output prop "text" equals "test" when given "test"', () => {
    render(<Output type="SYSTEM" text="test" updateScrollTop={mockFunction} />)
    const element = screen.getByText('test')
    expect(element).toBeInTheDocument()
  })

  test('Output should load in after 500ms when prop is given a value of "500"', async () => {
    const delay = 500
    render(<Output color="white" delay={delay} type="SYSTEM" text="test" updateScrollTop={mockFunction} />)
    act(() => {
      jest.advanceTimersByTime(500)
    })
    const element = screen.getByText('test')
    expect(element).toBeInTheDocument()
  })

  test('Output should display Input type component when prop "type" is given a value of "USER"', async () => {
    render(<Output color="white" type="USER" text="test" updateScrollTop={mockFunction} />)
    const element = screen.getByText('~')
    expect(element).toBeInTheDocument()
  })

  test('Output should handle callback when prop "callback" is provided', async () => {
    const mockFunction = jest.fn()
    render(<Output callback={mockFunction} color="white" text="test" updateScrollTop={mockFunction} />)
    expect(mockFunction).toHaveBeenCalled()
  })
})
