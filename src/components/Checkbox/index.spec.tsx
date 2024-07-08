import Checkbox from '@/components/Checkbox/index'
import { describe, expect, it, vi } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Checkbox', () => {
  it('Render Checkbox', () => {
    const { container, getByTestId, getByText } = render(
      <Checkbox
        dataTestId="TestId"
        label="Checkbox"
        checked={false}
        onChange={() => {}}
      />,
    )

    const checkboxInput = getByTestId('TestId') as HTMLInputElement

    expect(container.firstChild).toHaveTextContent('Checkbox')
    expect(getByText('Checkbox')).toBeInTheDocument()
    expect(checkboxInput.checked).toBeFalsy()
  })

  it('onChange ', async () => {
    const changeMock = vi.fn()
    const { getByTestId } = render(
      <Checkbox
        dataTestId="TestId"
        label="Checkbox"
        checked={false}
        onChange={changeMock}
      />,
    )

    await userEvent.click(getByTestId('TestId'))
    expect(changeMock).toBeCalled()
  })
})
