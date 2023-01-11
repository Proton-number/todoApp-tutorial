import { useState, useEffect } from 'react'
import './App.css'
import Form from './Components/Form'
import TodoList from './Components/TodoList'

function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  const [filtered, setFiltered] = useState([])


   const filterHandler = () => {
    switch(filter){

      case'completed': 
      setFiltered(todos.filter(todo => todo.completed === true));
      break;

      case'uncompleted': 
      setFiltered(todos.filter(todo => todo.completed === false));
      break;

      default:
       setFiltered(todos);
       break;
    }
   }


     useEffect(() => {
        filterHandler();
        saveLocalTodos();
     }, [todos, filter]);

  

  return (
    <div className="App">
     
     <header>
      <h2>Dacron's Todo List</h2>
     </header>

     <Form  
     todos={todos}  
     setTodos={setTodos} 
     inputText={inputText}
     setInputText={setInputText} 
     setFilter={setFilter}
     />

     <TodoList 
     todos={todos} 
     setTodos={setTodos}
     filtered={filtered}
     />

    </div>
  )
}

export default App
