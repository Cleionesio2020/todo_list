import { useContext } from "react"
import { TodoContext } from "./context/TodoContext"

const TodoItem = () => {
    const { dispatch, state } = useContext(TodoContext);

    return (
        <div className="items">
            {state.todos.map(todo => (
                <div className="itens-list" key={todo.id}>
                 <div style={ todo.done? {   textDecoration:'line-through'}:{}}> {todo.task}</div> 
                 <div className="btn-acao"> 
                 <button onClick={() => dispatch({ type: "TOGLE_TODO", payload: todo.id })}>&#10004;</button>
                 <button onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo.id })}  style={{color:'red'}}>&#10008;</button>
                   
                </div>
                </div>
            ))}
        </div>
    )

}
export default TodoItem