/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render, screen } from '@testing-library/react'
import Icon from '.'

describe('Icon test', () => {
  test('Icon loads', () => {
    render(<Icon.Expand title="test" />)
    const element = screen.getByText('test')
    expect(element).toBeInTheDocument()
  })

  test('Icon width equals "12" when prop width equals "12"', () => {
    const { container } = render(<Icon.Expand width={12} />)
    const element = container.querySelector('svg')
    expect(element).toHaveStyle('width: 12px')
    expect(element).toBeInTheDocument()
  })

  test('Icon width and height equals "12" when prop width and height equals "12"', () => {
    const { container } = render(<Icon.Expand width={12} height={12} />)
    const element = container.querySelector('svg')
    expect(element).toHaveStyle('width: 12px')
    expect(element).toBeInTheDocument()
  })

  test('Icon width equals "20" when prop width and height is not provided', () => {
    const { container } = render(<Icon.Expand />)
    const element = container.querySelector('svg')
    expect(element).toHaveStyle('width: 20px')
    expect(element).toBeInTheDocument()
  })
})
