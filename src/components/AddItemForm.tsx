import { TextField } from '@mui/material';
import React, {useState, FormEvent, ChangeEvent, KeyboardEvent} from 'react';

type FormTypeProps = {
    addItem: (title: string) => void
}

export const AddItemForm = (props: FormTypeProps) => {

    const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<boolean | string>(false)

    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(false)
        if(e.charCode === 13){
            addItem()
        }
    }

    const addItem = () => {
        if(title.trim() !== ''){
            props.addItem(title)
            setTitle('')
        }else{
            setError('title is required')
        }
    }



    return (
        <div>
            <TextField
                value={title}
                label={'Type value'}
                onChange={onChangeSetTitle}
                onKeyPress={onKeyPressAddTask}
                variant = 'outlined'
                error={!!error}
                helperText={error}
            />
            {/*<input*/}
            {/*    value={title}*/}
            {/*    onChange={onChangeSetTitle} //input.value*/}
            {/*    onKeyPress={onKeyPressAddTask}*/}
            {/*    className={error ? "error" : ""}*/}
            {/*/>*/}
            <button onClick={addItem}>+</button>
        </div>
    );
};












// export const AddItemForm = (props: FormTypeProps) => {
//     const [title, setTitle] = useState('')
//
//
//     const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault()
//     }
//
//     const OnChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setTitle(e.currentTarget.value)
//     }
//
//     const handleAddTodoList = () => {
//         props.addItem(title)
//         setTitle('')
//     }
//
//     return (
//         <div>
//             <form className={'form'} onSubmit={handleSubmitForm}>
//                 <input
//                     type="text"
//                     onChange={OnChangeInput}
//                     value={title}
//                 />
//                 <button type='submit' onClick={handleAddTodoList}>Добавить</button>
//             </form>
//         </div>
//     );
// };
//
//
