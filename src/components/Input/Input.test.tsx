import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Input from '.'

describe('Input test', () => {
  test('Input onSubmit fires when enter was pressed', () => {
    const mockFunction = jest.fn()

    render(<Input onSubmit={mockFunction} />)
    const element = screen.getByLabelText('terminal input field')
    userEvent.type(element, 'test{enter}')
    expect(mockFunction).toHaveBeenCalled()
  })

  test('Input onSubmit does not fire when enter and shift was pressed simultaneously', () => {
    const mockFunction = jest.fn()

    render(<Input onSubmit={mockFunction} />)
    screen.getByLabelText('terminal input field')
    userEvent.keyboard('{shift},{enter}')
    expect(mockFunction).not.toHaveBeenCalled()
  })
})
