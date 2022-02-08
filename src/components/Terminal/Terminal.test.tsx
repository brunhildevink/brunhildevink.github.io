/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render } from '@testing-library/react'
import Terminal from '.'

describe('Terminal test', () => {
  test('Terminal loads', () => {
    const { container } = render(<Terminal />)
    const element = container.querySelector('div')
    expect(element).toBeInTheDocument()
  })
})
