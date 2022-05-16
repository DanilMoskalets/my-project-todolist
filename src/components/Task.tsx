import React, {ChangeEvent, FC, useState} from 'react';
import {tasksType} from "../App";
import { EditableForm } from './EditableForm';

type TaskTypeProps = {
    task: tasksType
    removeTask: (id: string) => void
    editTask: (newTitle: string, tId: string) => void
    changeTaskStatus: (isDone: boolean, tID: string) => void
    isDone: boolean
}

const Task = (props: TaskTypeProps) => {


    const handleRemoveTask = () => {
        props.removeTask(props.task.id)
    }
    const handleEditTask = (newTitle: string) => {
        props.editTask(newTitle, props.task.id)
    }

    const onChangeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
        props.changeTaskStatus(e.target.checked, props.task.id)
    }

    return (
        <div>

                    <input type='checkbox'   checked={props.isDone} onChange={onChangeTaskStatus}/>
                    <EditableForm  editTask={handleEditTask} title={props.task.text}/>
                    <button type='button' onClick={handleRemoveTask}>Удалить</button>

        </div>
    );
};

export default Task;