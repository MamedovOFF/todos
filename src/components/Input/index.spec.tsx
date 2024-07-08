import Input from '@/components/Input/index'
import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Input', () => {
  it('Render Input', async () => {
    const { getByRole } = render(
      <Input placeholder="input" value="Hello World" />,
    )
    const input = getByRole('textbox')
    expect(input).toHaveValue('Hello World')
  })

  it('onChange Input', async () => {
    const { getByRole } = render(<Input placeholder="input" />)
    const input = getByRole('textbox')
    await userEvent.type(input, 'Hello World')
    expect(input).toHaveValue('Hello World')
  })
})
