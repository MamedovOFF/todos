import type { Dispatch, FormEventHandler, SetStateAction } from 'react'
import { useState } from 'react'
import type { ITodo } from '@/types'
import Input from '@/components/Input'
import Button from '@/components/Button'
import style from './style.module.scss'

interface CreateTodoProps {
  setTodos: Dispatch<SetStateAction<ITodo[]>>
  handleShow: () => void
  show: boolean
}

function TodosForm({ setTodos, handleShow, show }: CreateTodoProps) {
  const [body, setBody] = useState('')

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    setTodos((prevState) => {
      const newTodo = {
        body: body,
        complete: false,
        id: new Date().getTime(),
      }
      return [...prevState, newTodo]
    })
    setBody('')
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <Button onClick={handleShow} type="button">
        <i className={`${style.arrow} ${show && style.open}`}></i>
      </Button>
      <Input
        required
        placeholder="What needs to be done?"
        value={body}
        onChange={(event) => {
          setBody(event.target.value)
        }}
      />
    </form>
  )
}

export default TodosForm
