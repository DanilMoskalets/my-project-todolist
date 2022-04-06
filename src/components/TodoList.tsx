import React from 'react';
import {tasksType} from "../App";
import Task from "./Task";

type TodoListPropsType = {
    tasks: tasksType
    removeTask: (id: string) => void
}

const TodoList = (props: TodoListPropsType) => {

    const handleRemoveTask = (id: string) => {
        props.removeTask(id)
    }

    return (
        <div>
            <Task
                tasks={props.tasks}
                removeTask={handleRemoveTask}
            />
            {/*{props.tasks.text}*/}

        </div>
    )

};

export default TodoList;