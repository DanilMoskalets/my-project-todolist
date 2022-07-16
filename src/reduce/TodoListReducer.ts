import {todoListType} from "../App";
import {v1} from "uuid";


export type AddTodoListAT = {
    type: 'ADD-TODOLIST'
    title: string
}

export type removeTodoListAT = {
    type: 'REMOVE-TODOLIST'
    todoListID: string
}

export type ActionType = AddTodoListAT | removeTodoListAT

export const TodoListReducer = (todoLists: todoListType[], action: ActionType) => {
    switch (action.type) {
        case "ADD-TODOLIST":
            const newTodoListId = v1()
            const newTodoList: todoListType = {id: newTodoListId, title: action.title, filter: 'all'}
            return [...todoLists, newTodoList]
        case "REMOVE-TODOLIST":
            return todoLists.filter( tl =>  tl.id !== action.todoListID)
        default:
            return todoLists
    }
};

