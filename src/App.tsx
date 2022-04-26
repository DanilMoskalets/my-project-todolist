import React, {ChangeEvent, FormEvent, useState} from 'react';
import './App.css';
import TodoList from './components/TodoList';
import {AddTaskForm} from "./components/AddTaskForm";
import { v1 } from 'uuid';

export type tasksType = {
    text: string,
    id: string
    isDone: boolean
}
export type todoListType = {
    id: string
    title: string
    filter: filterValueType
}

export type filterValueType = "all" | 'active'| 'completed'

const App = () => {
    const [tasks, setTasks] = useState<tasksType[]>([])

    const addTask = (title: string) => {
        const newTask = {text: title, id: v1(), isDone: false}
        setTasks([newTask, ...tasks])
    }

    const removeTask = (tId: string) => {
        setTasks(tasks.filter(f => f.id !== tId))
    }

    const editTask = (newTitle: string, tId: string) => {
        setTasks(tasks =>
            tasks.map(tasks => {
                if(tasks.id === tId){
                    return { ...tasks, text: newTitle}
                }

                return tasks
            })
        )
    }

    const changeTaskStatus = (isDone: boolean, tId: string) => {
        setTasks(tasks =>
            tasks.map(tasks => {
                if(tasks.id === tId){
                    return { ...tasks, isDone}
                }
                return tasks
            })
        )
    }

    const todoListMap = tasks.map(t => {
            return (
                <TodoList
                    key={t.id}
                    tasks={t}
                    removeTask={removeTask}
                    editTask={editTask}
                    changeTaskStatus={changeTaskStatus}
                />)
        })




    return (
        <div className="App">
            <AddTaskForm addTask={addTask}/>
            {todoListMap}

            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    );
}

export default App;
