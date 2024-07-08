import Button from '@/components/Button/index'
import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'

describe('Button', () => {
  it('Render Button with text', () => {
    const { container } = render(<Button>Button</Button>)

    expect(container.firstChild).toHaveClass('button')
    expect(container.firstChild).toHaveTextContent('Button')
    expect(screen.getByText('Button')).toBeInTheDocument()
  })
  it('Render Button with active class', () => {
    const { container } = render(<Button active>Button</Button>)

    expect(container.firstChild).toHaveClass('button')
    expect(container.firstChild).toHaveTextContent('Button')
    expect(container.firstChild).toHaveClass('active')
  })
})
