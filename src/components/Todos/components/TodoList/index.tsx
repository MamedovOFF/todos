import type { Dispatch, SetStateAction } from 'react'
import { useState } from 'react'
import type { ITodo } from '@/types'
import Button from '@/components/Button'
import Todo from '@/components/Todos/components/Todo'
import type { filters } from '@/components/Todos/components/TodoList/utils.ts'
import { FILTER_MAP } from '@/components/Todos/components/TodoList/utils.ts'

import style from './style.module.scss'

interface TodoActionProps {
  todos: ITodo[]
  setFilters: Dispatch<SetStateAction<filters>>
  filters: filters
  handleRemoveCompleted: () => void
}

function TodoAction({
  todos,
  filters,
  setFilters,
  handleRemoveCompleted,
}: TodoActionProps) {
  const itemsLeft = todos.filter(FILTER_MAP['ACTIVE']).length

  return (
    <div className={style.actions}>
      {todos.length ? (
        <span>{itemsLeft ? `${itemsLeft} items left` : 'All items done'}</span>
      ) : (
        <span>Nothing</span>
      )}
      <div className={style.tabs}>
        <Button active={filters === 'ALL'} onClick={() => setFilters('ALL')}>
          All
        </Button>
        <Button
          active={filters === 'ACTIVE'}
          onClick={() => setFilters('ACTIVE')}
        >
          Active
        </Button>
        <Button
          active={filters === 'COMPLETE'}
          onClick={() => setFilters('COMPLETE')}
        >
          Complete
        </Button>
      </div>
      <Button onClick={handleRemoveCompleted}>Remove Completed</Button>
    </div>
  )
}

interface TodoListProps {
  todos: ITodo[]
  setTodos: Dispatch<SetStateAction<ITodo[]>>
  showList: boolean
}

function TodoList({ todos, setTodos, showList }: TodoListProps) {
  const [filters, setFilters] = useState<filters>('ALL')

  const filtersTodo = todos.filter(FILTER_MAP[filters])

  const handleCompleteTodo = (complete: boolean, id: number) => {
    setTodos((prevState) => {
      return prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, complete }
        }
        return todo
      })
    })
  }

  const handleRemoveCompleted = () => {
    setTodos((prevState) => {
      return prevState.filter(({ complete }) => !complete)
    })
  }

  return (
    <article className={`${style.list} ${showList && style.open}`}>
      <div className={style.wrapper}>
        {filtersTodo.length ? (
          filtersTodo.map((todo) => (
            <Todo key={todo.id} {...todo} onChange={handleCompleteTodo} />
          ))
        ) : (
          <div className={style.empty}>The list is empty</div>
        )}
        <TodoAction
          handleRemoveCompleted={handleRemoveCompleted}
          setFilters={setFilters}
          todos={todos}
          filters={filters}
        />
      </div>
    </article>
  )
}

export default TodoList
