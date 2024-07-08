import Todos from '@/components/Todos'
import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const todoList = [
  {
    body: 'Купить хлеб',
    complete: true,
    id: 1,
  },
  {
    body: 'Купить яйца',
    complete: false,
    id: 2,
  },
]

describe('Todos', () => {
  it('Todos render', () => {
    const { getByRole } = render(<Todos todosList={todoList} />)
    const input = getByRole('textbox')
    expect(input).toBeInTheDocument()
    expect(getByRole('checkbox', { name: /купить хлеб/i })).toBeInTheDocument()
    expect(getByRole('checkbox', { name: /Купить яйца/i })).toBeInTheDocument()
    expect(getByRole('button', { name: /all/i })).toBeInTheDocument()
    expect(getByRole('button', { name: /all/i })).toHaveClass('active')
    expect(getByRole('button', { name: /active/i })).toBeInTheDocument()
    expect(
      getByRole('button', { name: /remove completed/i }),
    ).toBeInTheDocument()
  })

  it('Create Todo', async () => {
    const { getByRole } = render(<Todos todosList={todoList} />)
    const input = getByRole('textbox')
    await userEvent.type(input, 'Test Todo')
    await userEvent.keyboard('{enter}')
    expect(getByRole('checkbox', { name: /test todo/i })).toBeInTheDocument()
  })

  it('Remove Completed', async () => {
    const { getByRole, queryByRole } = render(<Todos todosList={todoList} />)
    const btnRemoveCompleted = getByRole('button', {
      name: /remove completed/i,
    })
    expect(getByRole('checkbox', { name: /купить хлеб/i })).toBeInTheDocument()
    await userEvent.click(btnRemoveCompleted)
    expect(
      queryByRole('checkbox', { name: /Купить хлеб/i }),
    ).not.toBeInTheDocument()
  })

  it('Show active', async () => {
    const { getByRole, queryByRole } = render(<Todos todosList={todoList} />)
    const btnActive = getByRole('button', {
      name: /active/i,
    })
    expect(getByRole('checkbox', { name: /купить хлеб/i })).toBeInTheDocument()
    expect(getByRole('checkbox', { name: /купить яйца/i })).toBeInTheDocument()
    await userEvent.click(btnActive)
    expect(getByRole('checkbox', { name: /купить яйца/i })).toBeInTheDocument()
    expect(
      queryByRole('checkbox', { name: /Купить хлеб/i }),
    ).not.toBeInTheDocument()
  })

  it('Show complete', async () => {
    const { getByRole, queryByRole } = render(<Todos todosList={todoList} />)

    const btnComplete = getByRole('button', {
      name: 'Complete',
    })

    expect(getByRole('checkbox', { name: /купить хлеб/i })).toBeInTheDocument()
    expect(getByRole('checkbox', { name: /купить яйца/i })).toBeInTheDocument()
    await userEvent.click(btnComplete)
    expect(getByRole('checkbox', { name: /купить хлеб/i })).toBeInTheDocument()
    expect(
      queryByRole('checkbox', { name: /купить яйца/i }),
    ).not.toBeInTheDocument()
  })
})
