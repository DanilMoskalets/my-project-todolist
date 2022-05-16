import React, {FC} from 'react';
import {filterValueType, taskStateType, tasksType, todoListType} from "../App";
import Task from "./Task";
import {AddItemForm} from "./AddItemForm";

type TodoListPropsType = {
    tasks: tasksType[]
    title: string
    id: string
    addTask:(text: string, todoListID: string) => void
    removeTask: (tID: string,id: string) => void
    editTask: (newTitle: string, taskId: string, todoListID: string) => void
    changeTaskStatus: (isDone: boolean, taskID: string, todoListID: string) => void
    filter: filterValueType
}

const TodoList: FC<TodoListPropsType> = ({
                                             id,
                                             tasks,
                                             removeTask,
                                             editTask,
                                             changeTaskStatus,
                                             title,
                                             addTask,
                                             ...props
                                         }) => {

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

    const handleFilter = (filterValue: string) => {

    }

    return (
        <div>
            <h4>{title}</h4>
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