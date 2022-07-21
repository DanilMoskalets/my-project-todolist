import axios from "axios";


const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '68c28a1d-c604-4da0-9181-991d0fefe37f'
    }
}

export const todoListApi = {
    getTodoList() {
        const promise = axios.get(
            'https://social-network.samuraijs.com/api/1.1/todo-lists',
            settings)

        return promise
    },

    postTodoList(title: string) {
        const prosime = axios.post(
            'https://social-network.samuraijs.com/api/1.1/todo-lists',
            {title},
            settings)
        return prosime
    },

    deleteTodoList(todoListID: string) {
        const prosime = axios.post(
            `https://social-network.samuraijs.com/api/1.1/todo-lists/${todoListID}`,
            settings)
        return prosime
    },

    updateTodoList(title: string, todoListID: string) {
        const prosime =
            axios
                .post(
                    `https://social-network.samuraijs.com/api/1.1/todo-lists${todoListID}`,
                    {title},
                    settings)
        return prosime
    },

}
