import React from 'react'
import Todo from './Todo'

function TodoList({todos, setTodos, filtered}) {
  return (
    <>

        <div className="todo-container">
      <ul className="todo-list">
         {filtered.map(todo => (
          <Todo 
          todo={todo}
          key={todo.id} 
          text={todo.text} 
          todos={todos} 
          setTodos={setTodos}
           />
         ))}
      </ul>
    </div>
    
    </>
  )
}

export default TodoList
