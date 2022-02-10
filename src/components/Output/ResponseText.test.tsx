import { render, screen } from '@testing-library/react'

import ResponseText from '.'
import { OutputType } from '../../types'

describe('ResponseText test', () => {
  test('ResponseText prop "text" equals "test" when given "test"', () => {
    render(<ResponseText color="white" type={OutputType.OUTPUT} text="test" />)
    const element = screen.getByText('test')
    expect(element).toBeInTheDocument()
  })

  test('ResponseText should load in after 3000ms when prop is given a value of "3000"', async () => {
    const delay = 3000
    render(<ResponseText color="white" delay={delay} type={OutputType.OUTPUT} text="test" />)
    await new Promise((r) => setTimeout(r, delay))
    const element = screen.getByText('test')
    expect(element).toBeInTheDocument()
  })
})
