import { act, render, screen } from '@testing-library/react'

import Output from '.'
import { OutputType } from '../../types'

describe('Output component test', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  test('Output prop "text" equals "test" when given "test"', () => {
    render(<Output type={OutputType.OUTPUT} text="test" />)
    const element = screen.getByText('test')
    expect(element).toBeInTheDocument()
  })

  test('Output should load in after 500ms when prop is given a value of "500"', async () => {
    const delay = 500
    render(<Output color="white" delay={delay} type={OutputType.OUTPUT} text="test" />)
    act(() => {
      jest.advanceTimersByTime(500)
    })
    const element = screen.getByText('test')
    expect(element).toBeInTheDocument()
  })

  test('Output should display Input type component when prop "type" is given a value of "INPUT"', async () => {
    render(<Output color="white" type={OutputType.INPUT} text="test" />)
    const element = screen.getByText('~')
    expect(element).toBeInTheDocument()
  })
})
