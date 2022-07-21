import { useContext } from 'react';
import { TodoContext } from './context/TodoContext';
import FormTodo from './FormTodo';
import TodoItem from './TodoItem';

function App() {
  const { state } = useContext(TodoContext)

  return (
    <div className="container">
        <h4>Todo List, typeScript, Context Api, useReducer, React v 18.0 </h4>
      <FormTodo />

      <div className="list-todo">

        <TodoItem />

        <p>👉 pending: {state.totaltaskPending}</p>
      </div>

    </div>
  );
}

export default App;
