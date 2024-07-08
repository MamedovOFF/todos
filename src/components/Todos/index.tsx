import { useState } from 'react'
import type { ITodo } from '@/types'
import TodoList from '@/components/Todos/components/TodoList'
import TodosForm from '@/components/Todos/components/TodosForm'

import style from './style.module.scss'

function Todos({ todosList }: { todosList: ITodo[] }) {
  const [todos, setTodos] = useState<ITodo[]>(todosList)
  const [showList, setShowList] = useState(false)

  return (
    <article className={style.todos}>
      <TodosForm
        setTodos={setTodos}
        handleShow={() => setShowList(!showList)}
        show={showList}
      />
      <TodoList todos={todos} setTodos={setTodos} showList={showList} />
    </article>
  )
}

export default Todos
