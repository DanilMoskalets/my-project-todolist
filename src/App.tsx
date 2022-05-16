import React, {ChangeEvent, FormEvent, useState} from 'react';
import './App.css';
import TodoList from './components/TodoList';
import {AddItemForm} from "./components/AddItemForm";
import {v1} from 'uuid';
import todoList from "./components/TodoList";
import { Paper,Container,Grid } from '@mui/material';


export type tasksType = {
    text: string,
    id: string
    isDone: boolean
}

export type filterValueType = 'all' | 'active' | 'completed'

export type todoListType = {
    id: string
    title: string
    filter: filterValueType
}
export type taskStateType = {
    [todoListID: string]: Array<tasksType>
}

const App = () => {
    const todoListID_1 = v1()
    const todoListID_2 = v1()
    const todoListID_3 = v1()

    const [todoList, setTodoList] = useState<todoListType[]>([
        {id: todoListID_1, title: 'Первый', filter: 'all'},
        {id: todoListID_2, title: 'Второй', filter: 'all'},
        {id: todoListID_3, title: 'Третий', filter: 'all'},
    ])
    const [tasks, setTasks] = useState<taskStateType>({
        [todoListID_1]: [
            {text: 'REACT', id: v1(), isDone: true},
            {text: 'REACTTTTTTT', id: v1(), isDone: true}
        ],
        [todoListID_2]: [
            {text: 'JS', id: v1(), isDone: true},
            {text: 'JSSSSS', id: v1(), isDone: true}
        ],
        [todoListID_3]: [
            {text: 'VUE', id: v1(), isDone: true},
            {text: 'VUEEEEEE', id: v1(), isDone: true}
        ]
    })


    const addTodoList = (title: string) => {
        const newTodoListId = v1()
        const newTodoList: todoListType = {id: newTodoListId, title, filter: 'all'}
        setTodoList([...todoList, newTodoList])
        setTasks({...tasks, [newTodoListId]: []})
    }



    const addTask = (text: string, todoListID: string) => {
      const newTask: tasksType = {id: v1(), text, isDone: false}
        setTasks({...tasks, [todoListID]: [newTask, ...tasks[todoListID]]})
    }



    const removeTask = (taskID: string,todoListId: string) => {
        setTasks({
            ...tasks,
            [todoListId]: tasks[todoListId].filter(f => f.id !== taskID)
        })

    }

    const editTask = (text: string, taskID: string, todoListID: string) => {
        setTasks({
            ...tasks,
            [todoListID]: tasks[todoListID].map(t => t.id === taskID ? {
                ...t,
                text
            } : t)
        })
    }

    const changeTaskStatus = (isDone: boolean, taskID: string, todoListID: string) => {
        setTasks({
            ...tasks,
            [todoListID]: tasks[todoListID].map(t => t.id === taskID ? {
                ...t,
                isDone
            } : t)
        })
        console.log(tasks[todoListID_1])
    }


// const changeFilter = (filter: filterValueType, tID: string) => {
//     const newTodoListFilter = tasks.map(tl => tl.id === )
// }

const filteredTodoList = (todoList: todoListType) => {
    switch (todoList.filter) {
        case "active":
            return tasks[todoList.id].filter(t => !t.isDone)
        case "completed":
            return tasks[todoList.id].filter(t => t.isDone)
        default:
            return tasks[todoList.id]
    }
}



const todoListMap = todoList.map(tl => {
    const tasksForRender = filteredTodoList(tl)

    return (
        <Grid item  style={{ padding: '20px', marginTop: '60px' }} key={tl.id}>
        <Paper elevation={8} className={'todoList'}  style={{padding: '10px'}}>
        <TodoList
            id={tl.id}
            title={tl.title}
            tasks={tasksForRender}
            addTask={addTask}
            removeTask={removeTask}
            editTask={editTask}
            changeTaskStatus={changeTaskStatus}
            filter={tl.filter}
        />
        </Paper>
        </Grid>

            )
})

return (
    <div className="App">
        <Container fixed>
            <Grid container style={{padding: '20px', }} >
                <AddItemForm addItem={addTodoList}/>
            </Grid>
            <Grid container spacing={10}  style={{padding: '0px', }}>
                {todoListMap}
            </Grid>
        </Container>
    </div>
)
}

export default App;
// const addTask = (title: string, todoListID: string) => {
//     const newTask = {text: title, id: v1(), isDone: false}
//     setTasks({[todoListID]: [...tasks[todoListID], newTask]})
// }


// const addTask = (text: string, todoListID: string) => {
//     const newTask: tasksType = {id: v1(), text, isDone: false}
//
//     setTasks({...tasks, [todoListID]: [newTask, ...tasks[todoListID]]})
// }