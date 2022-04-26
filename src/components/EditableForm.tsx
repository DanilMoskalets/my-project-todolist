import React, {ChangeEvent, KeyboardEvent ,useState } from 'react';
import {tasksType} from "../App";

type EditableFormTypeProps = {
    title: string
    editTask: (newTitle: string) => void
}

export const EditableForm = (props: EditableFormTypeProps) => {
    const [editMode, serEditMode] = useState(false)
    const [userText, setUserText] = useState(props.title)


    const onChangeSetUserText = (e: ChangeEvent<HTMLInputElement>) => {
        setUserText(e.currentTarget.value)
    }
    const onEditMode = () => {
        serEditMode(true)
    }

    const offEditMode = () => {
        props.editTask(userText)
        serEditMode(false)
    }

    const onKeyPressEditTask = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter')
        offEditMode()
    }

    return (
        <>
            { editMode ?
                <input
                    type='text'
                    value={ userText }
                    onChange={onChangeSetUserText}
                    autoFocus={true}
                    onBlur={offEditMode}
                    onKeyPress={onKeyPressEditTask}
                />
                :
                <span onDoubleClick={onEditMode}> {props.title} </span>
            }
        </>
    );
};

