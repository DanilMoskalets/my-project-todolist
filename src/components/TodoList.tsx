import React from 'react';
import {tasksType} from "../App";
import Task from "./Task";

type TodoListPropsType = {
    tasks: tasksType
    removeTask: (id: string) => void
    editTask: (newTitle: string, tId: string) => void
    changeTaskStatus: (isDone: boolean, tID: string) => void
}

const TodoList = (props: TodoListPropsType) => {

    const handleRemoveTask = (id: string) => {
        props.removeTask(id)
    }

    const handleEditTask = (newTitle: string, tID: string) => {
        props.editTask(newTitle, tID)
    }

    const handleChangeTaskStatus = (isDone: boolean, tId: string) => {
        props.changeTaskStatus(isDone, tId)
    }

    return (
        <div>
            <Task
                tasks={props.tasks}
                removeTask={handleRemoveTask}
                editTask={handleEditTask}
                changeTaskStatus={handleChangeTaskStatus}
            />


        </div>
    )

};

export default TodoList;