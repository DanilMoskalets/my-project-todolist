import React, {ChangeEvent, useState} from 'react';
import './App.css';
import TodoList from './components/TodoList';



const App = () =>{
    const [tasks, setTasks]= useState('')

    
    const OnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTasks(e.currentTarget.value)
    }

  return (
    <div className="App">
      <div>
        <input
            type="text"
            onChange={OnChangeInput}
            value={tasks}

        />
        <button>Добавить</button>
      </div>

        <TodoList
        tasks={tasks}
        />

    </div>
  );
}

export default App;
