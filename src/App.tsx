import React, {ChangeEvent, FormEvent, useState} from 'react';
import './App.css';
import TodoList from './components/TodoList';
import {AddTaskForm} from "./components/AddTaskForm";
import task from "./components/Task";
import { v1 } from 'uuid';

export type tasksType = {
    text: string,
    id: string
    isDone: boolean
}

const App = () => {
    const [tasks, setTasks] = useState<tasksType[]>([])

    const addTask = (title: string) => {
        const newTask = {text: title, id: v1(), isDone: false}
        setTasks([newTask, ...tasks])
    }

    const removeTask = (tId: string) => {
        setTasks(tasks.filter(f => f.id !== tId))
    }

    const todoListMap = tasks.map(t => {
            return (
                <TodoList
                    key={t.id}
                    tasks={t}
                    removeTask={removeTask}
                />)
        })

    return (
        <div className="App">
            <AddTaskForm addTask={addTask}/>
            {todoListMap}

        </div>
    );
}

export default App;
