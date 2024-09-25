import { useEffect, useState } from 'react'
import { TodoForm } from './TodoForm'
import './styles.css'
import { TodoList } from './TodoList'

export default function App(){
  const [todos,setTodos]=useState(()=>{
    const localvalue=localStorage.getItem("ITEMS")
    if(localvalue==null) return

    return JSON.parse(localvalue)
  })

  useEffect(()=>{
    localStorage.setItem("ITEMS",JSON.stringify(todos))
  },[todos])

  function addTodo(title){
        setTodos(currentTodos=>{
          return[
            ...currentTodos,
            {id:crypto.randomUUID(),//Create new unique id for every item
              title,
              completed:false}
          ]
        })
  }

  function toggletodo(id,completed){
    setTodos(currentTodos=>{
      return currentTodos.map(todo=>{
        if(todo.id==id){
          return{...todo,completed} //Creating a new state object to prevent mutation
        }
        return todo
      })
    })
  }

  function deletetodo(id){
    setTodos(currentTodos=>{
      return currentTodos.filter(todo=>todo.id!=id)
    })
  }
  return (
  <>{/*This is a fragment*/}
    <TodoForm onSubmit={addTodo}/>
    <h1 className='header'>Todo List</h1>
    <TodoList todos={todos} toggletodo={toggletodo} deletetodo={deletetodo}/>
  </>
  )
}