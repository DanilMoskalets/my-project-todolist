import React, { FC } from 'react';
import {tasksType} from "../App";

type TaskTypeProps = {
    tasks: tasksType
    removeTask: (id: string) => void
}

const Task = (props: TaskTypeProps) => {

    const handleRemoveTask = () => {
        props.removeTask(props.tasks.id)
    }

    return (
        <div>
            <button type='button' onClick={handleRemoveTask} >Удалить</button>
            {props.tasks.text }
            <input type='checkbox' checked={props.tasks.isDone} onChange = {() => {}} />
        </div>
    );
};

export default Task;