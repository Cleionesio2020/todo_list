export interface ITodo{
    id:number;
    task:string;
    done:boolean
}

export interface InitialState {
    todos: ITodo[]
    totaltaskPending:number
}