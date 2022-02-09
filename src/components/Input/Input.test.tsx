/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render } from '@testing-library/react'
import Input from '.'

describe('Input test', () => {
  test('Input loads', () => {
    const { container } = render(<Input />)
    const element = container.querySelector('textarea')
    expect(element).toBeInTheDocument()
  })
})
