import React from 'react'
import Counter from './features/counter/Counter'
import Counter2 from './features/counter/Counter2'
import Todolist from './features/Todo/Todolist'
import AddData from './features/Todo/AddData'

function App() {
  return (
    <div>
      {/* <Counter /> */}
      {/* <Counter2 /> */}
      <AddData />
      <Todolist />
    </div>
  )
}

export default App
