import Todos from '@/components/Todos'
import { TODO_LIST } from '@/utils/constant.ts'

function App() {
  return (
    <section className="App">
      <h1 className="title">todos</h1>
      <Todos todosList={TODO_LIST} />
    </section>
  )
}

export default App
