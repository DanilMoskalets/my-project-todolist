import React, {FC} from 'react';
import {filterValueType, tasksType} from "../App";
import Task from "./Task";
import {AddItemForm} from "./AddItemForm";
import {EditableForm} from "./EditableForm";

type TodoListPropsType = {
    tasks: tasksType[]
    title: string
    removeTodoList: (todoListID: string) => void
    editTodoListTitle: (text: string, todoListID: string) => void
    id: string
    addTask:(text: string, todoListID: string) => void
    removeTask: (tID: string,id: string) => void
    editTask: (newTitle: string, taskId: string, todoListID: string) => void
    changeTaskStatus: (isDone: boolean, taskID: string, todoListID: string) => void
    filter: filterValueType
    changeFilter: (filter: filterValueType, todoListID: string) => void
}

const TodoList: FC<TodoListPropsType> = ({
                                             id,
                                             tasks,
                                             removeTask,
                                             editTask,
                                             changeTaskStatus,
                                             title,
                                             addTask,
                                             changeFilter,
                                             editTodoListTitle,
                                             removeTodoList,
                                             ...props
                                         }) => {

    const handleEditTodoListTitle = (newTitle: string) => {
        editTodoListTitle(newTitle, id)
    }

    const handleAddTask = (text: string) => {
        addTask(text, id )
    }

    const handleRemoveTask = (tID: string) => {
        removeTask(tID, id)
    }

    const handleEditTask = (newTitle: string, taskID: string) => {
        editTask(newTitle, taskID, id)
    }

    const handleChangeTaskStatus = (isDone: boolean, tId: string) => {
        changeTaskStatus(isDone, tId, id)
    }

    const handleFilter = (filterValue: filterValueType) => {
        changeFilter(filterValue, id)
    }

    return (

        <div>
            <span onClick={() => {removeTodoList(id)}}>X</span>

            <EditableForm  editTask={handleEditTodoListTitle} title={title}/>
            <AddItemForm addItem={handleAddTask}/>
            {
                tasks.map((t) => (
                    <Task
                        key={t.id}
                        task={t}
                        removeTask={handleRemoveTask}
                        editTask={handleEditTask}
                        changeTaskStatus={handleChangeTaskStatus}
                        isDone={t.isDone}
                    />
                ))
            }

            <button onClick={() => handleFilter('all')} >All</button>
            <button onClick={() => handleFilter('active')}>Active</button>
            <button onClick={() => handleFilter('completed')}>Completed</button>

        </div>
    )

};

export default TodoList;