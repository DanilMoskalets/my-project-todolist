import React, {useState, FormEvent} from 'react';

type FormTypeProps = {
    addTask: (title: string) => void
}

export const AddTaskForm = (props: FormTypeProps) => {
    const [title, setTitle] = useState('')


    const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    const OnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const handleAddTask = () => {
        props.addTask(title)
        setTitle('')
    }

    return (
        <div>
            <form onSubmit={handleSubmitForm}>
                <input
                    type="text"
                    onChange={OnChangeInput}
                    value={title}
                />
                <button type='submit' onClick={handleAddTask}>Добавить</button>
            </form>
        </div>
    );
};


