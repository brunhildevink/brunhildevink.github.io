import { render, screen } from '@testing-library/react'
import MenuButton from '.'
import { Icons } from '..'

describe('MenuButton component test', () => {
  test('MenuButton color equals red when prop color equals "red"', () => {
    render(<MenuButton color="red" ariaLabel="test" icon={Icons.Expand} />)
    const element = screen.getByLabelText('test')
    expect(element).toHaveStyle('background: red')
  })

  test('MenuButton aria-label equals "test" when prop ariaLabel equals "test"', () => {
    render(<MenuButton color="red" ariaLabel="test" icon={Icons.Expand} />)
    const element = screen.getByLabelText('test')
    expect(element).toBeInTheDocument()
  })
})
