import * as React from 'react';
import { InitialState, ITodo } from '../models/TodoModell';
import { Action, Reducer} from './Reducer';

type TodoContentProps={
    state:InitialState;
    dispatch:(Action:Action)=>void
   
}

export const TodoContext = React.createContext<TodoContentProps>({} as TodoContentProps)

const initialState:InitialState={
    todos: []
    ,totaltaskPending:0
}

type Props = {
    children?: React.ReactNode
};

const TodoContextProvider = ({ children }: Props) => {
   const [ state, dispatch ] = React.useReducer( Reducer, initialState );
   
   
    return (
        <TodoContext.Provider value={{
            state,
            dispatch
        }}>
            {children}
        </TodoContext.Provider>
    )

}

export default TodoContextProvider