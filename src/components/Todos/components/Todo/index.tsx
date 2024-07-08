import Checkbox from '@/components/Checkbox'
import style from './style.module.scss'

export interface TodoProps {
  complete: boolean
  body: string
  id: number
  onChange: (complete: boolean, id: number) => void
}

function Todo({ body, complete, onChange, id }: TodoProps) {
  return (
    <article className={style.todo}>
      <Checkbox
        dataTestId={String(id)}
        label={body}
        checked={complete}
        onChange={() => onChange(!complete, id)}
      />
    </article>
  )
}

export default Todo
