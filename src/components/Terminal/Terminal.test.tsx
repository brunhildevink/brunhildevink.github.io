import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Terminal from '.'

describe('Terminal component test', () => {
  test('Terminal handles input responses', () => {
    render(<Terminal />)
    const inputElement = screen.getByLabelText('terminal input field')
    userEvent.type(inputElement, 'test input{enter}')
    expect(screen.getByText('test input')).toBeInTheDocument()
  })
})
