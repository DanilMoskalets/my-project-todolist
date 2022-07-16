import axios from "axios";

const settings = {
    witchCredentials: true,
    headers: {
        'API-KEY': '68c28a1d-c604-4da0-9181-991d0fefe37f'
    }
}

const todoListApi = {
    getTodoList() {
        const promise = axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)
        return promise
    },

    postTodoList() {
        const prosime = axios.post('https://social-network.samuraijs.com/api/1.1/todo-lists', {title: 'Bla'}, settings)
        return prosime
    }

}


export default todoListApi