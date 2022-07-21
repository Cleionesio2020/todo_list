import { ITodo, InitialState } from "../models/TodoModell";

export type Action =
    | { type: "ADD_TODO", payload: ITodo }
    | { type: "REMOVE_TODO", payload: number }
    | { type: "TOGLE_TODO", payload: number };

function contar(task: ITodo[]): number {
    const list = task.filter(t => (
        !t.done
    ))
    return list.length
}

export const Reducer = (state: InitialState, action: Action) => {
    switch (action.type) {
        case "ADD_TODO":
            const stateTemp = {
                ...state,
                todos: [...state.todos, action.payload],
                totaltaskPending: contar(state.todos)
            }

            return {
                ...stateTemp,
                totaltaskPending: contar(stateTemp.todos)
            }

        case "REMOVE_TODO":
            const stateTemp2 = {
                ...state,
                todos: state.todos.filter(todo => (
                    todo.id !== action.payload
                )),
            }
            return {
                ...stateTemp2,
                totaltaskPending: contar(stateTemp2.todos)
            }
        case "TOGLE_TODO":
            const stateTemp3 = {
                ...state,
                todos: state.todos.map(todo => (
                    todo.id === action.payload ? { ...todo, done: !todo.done } : todo
                )),
            }
            return {
                ...stateTemp3,
                totaltaskPending: contar(stateTemp3.todos)
            }
        default:
            return state
    }
} 