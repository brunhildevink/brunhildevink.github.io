import { act, render, screen } from '@testing-library/react'

import ResponseText from '.'
import { OutputType } from '../../types'

describe('ResponseText test', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  test('ResponseText prop "text" equals "test" when given "test"', () => {
    render(<ResponseText color="white" type={OutputType.OUTPUT} text="test" />)
    const element = screen.getByText('test')
    expect(element).toBeInTheDocument()
  })

  test('ResponseText should load in after 500ms when prop is given a value of "500"', async () => {
    const delay = 500
    render(<ResponseText color="white" delay={delay} type={OutputType.OUTPUT} text="test" />)
    act(() => {
      jest.advanceTimersByTime(500)
    })
    const element = screen.getByText('test')
    expect(element).toBeInTheDocument()
  })
})
