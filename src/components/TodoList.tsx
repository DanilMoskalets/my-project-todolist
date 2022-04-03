import React from 'react';

type TodoListPropsType = {
    tasks: string
}

const  TodoList = (props: TodoListPropsType) => {
    return (
        <div>
            {props.tasks}
        </div>
    );
};

export default TodoList;