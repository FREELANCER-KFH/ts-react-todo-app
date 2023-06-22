import { useState } from 'react'
import { Todos } from './components/Todos'

const mockTodos = [
  {
    id: '1',
    title: 'Iniciar el proyecto todo con react y typescript',
    completed: true
  },
  {
    id: '2',
    title: 'hacer la tarea de la universidad',
    completed: false
  },
  {
    id: '3',
    title: 'tomar los examenes finales de la universidad',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  return (
    <>
    <div className='todoapp'>
        <Todos todos={todos} />
    </div>
    </>
  )
}

export default App
