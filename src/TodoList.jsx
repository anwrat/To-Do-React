import { TodoItem } from "./TodoItem"

export function TodoList({todos,toggletodo,deletetodo}){
    return(
        <ul className='list'>
            {todos.length==0 && "No Todos"}
            {todos.map(todo=>{
            return(
                <TodoItem
                    {...todo} 
                    key={todo.id} 
                    toggletodo={toggletodo} 
                    deletetodo={deletetodo}
                />
            )
            })}
        </ul>
    )
}