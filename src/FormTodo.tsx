import { useContext, useState } from 'react';
import { TodoContext } from './context/TodoContext';

function FormTodo() {
  const [todo, setTodo] = useState('')
  const id = Math.random();

  const { dispatch } = useContext(TodoContext)

  const handleSubmit = (event: any) => {
    event.preventDefault()
    if(todo?.length>3){
      dispatch({type:'ADD_TODO', payload:{ id: id, done: false, task: todo }})
      setTodo('')
    }
    

  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input type="text" 
        placeholder='seu todo aqui...'
        onChange={(e) => setTodo(e.target.value)}
        value={todo} />
        <button type='submit'>&#43;</button>
      </form>
    </div>
  );
}

export default FormTodo;
