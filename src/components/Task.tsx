import React, {ChangeEvent, FC, useState} from 'react';
import {tasksType} from "../App";
import { EditableForm } from './EditableForm';

type TaskTypeProps = {
    tasks: tasksType
    removeTask: (id: string) => void
    editTask: (newTitle: string, tId: string) => void
    changeTaskStatus: (isDone: boolean, tID: string) => void
}

const Task = (props: TaskTypeProps) => {
    const [isDone, setIsDone] = useState(false)

    const handleRemoveTask = () => {
        props.removeTask(props.tasks.id)
    }
    const handleEditTask = (newTitle: string) => {
        props.editTask(newTitle, props.tasks.id)
    }

    const onChangeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setIsDone(e.target.checked)
        props.changeTaskStatus(isDone, props.tasks.id)
    }

    return (
        <div>

                    <input type='checkbox'   checked={isDone} onChange={onChangeTaskStatus}/>
                    <EditableForm  editTask={handleEditTask} title={props.tasks.text}/>
                    <button type='button' onClick={handleRemoveTask}>Удалить</button>

        </div>
    );
};

export default Task;