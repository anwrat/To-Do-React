import { useState } from 'react'
import './styles.css'

export default function App(){
  const [newItem,setNewItem]=useState("")
  const [todos,setTodos]=useState([])

  function handleSubmit(e){
    e.preventDefault()//Prevent the page from refreshing on button click
    setTodos(currentTodos=>{
      return[
        ...currentTodos,
        {id:crypto.randomUUID(),//Create new unique id for every item
          title:newItem,
          completed:false}
      ]
    })
    setNewItem("") // Make the textfield empty after pressing add
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
    <form onSubmit={handleSubmit}className='new-item-form'>
      <div className='form-row'>
        <label className='toplabel' htmlFor='item'>Item</label>
        <input value={newItem} onChange={e=>setNewItem(e.target.value)}type="text" id="item"></input>
      </div>
      <button className='btn'>Add</button>
    </form>
      <h1 className='header'>Item List</h1>
      <ul className='list'>
        {todos.length==0 && "No Todos"}
        {todos.map(todo=>{
          return(<li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} onChange={e=>toggletodo(todo.id,e.target.checked)}/>{todo.title}
            </label>
            <button onClick={()=>deletetodo(todo.id)} className="btn btn-danger">Delete</button>
          </li>
          )
        })}
      </ul>
  </>
  )
}