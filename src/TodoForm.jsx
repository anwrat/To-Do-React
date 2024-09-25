import { useState } from 'react'

export function TodoForm(props){
    props.onSubmit
    const [newItem,setNewItem]=useState("")

    function handleSubmit(e){
        e.preventDefault()//Prevent the page from refreshing on button click
        if(newItem=="")return
        props.onSubmit(newItem)
        setNewItem("") // Make the textfield empty after pressing add
      }

    return(
        <form onSubmit={handleSubmit}className='new-item-form'>
            <div className='form-row'>
            <label className='toplabel' htmlFor='item'>Item</label>
            <input placeholder='Write here' value={newItem} onChange={e=>setNewItem(e.target.value)}type="text" id="item"></input>
            </div>
            <button className='btn'>Add</button>
        </form>
    )
}