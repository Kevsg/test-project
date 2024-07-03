const { v4: uuidv4 } = require('uuid');

class TodoList {
    constructor() {
        this.todos = [
            {
                id: uuidv4(),
                title: "First Todo",
                description: "First Todo Description",
                completed: false
            }
        ]
    }

    getTodos() {
        return this.todos
    }

    getTodoById(id) {
        return this.todos.find((todo) => todo.id === id)
    }

    createNewTodo(title, description, completed) {
        if (!title || !description) {
            return null
        }
        const newTodo = {
            id: uuidv4(),
            title,
            description,
            completed: completed || false
        }
        this.todos.push(newTodo)
        return newTodo;
    }

    updateTodoById(id, title, description, completed) {
        const todoIndex = this.todos.findIndex((todo) => todo.id === id);
        if (todoIndex === -1) {
            return null
        }
        const oldTodo = this.todos[todoIndex];
        const updateTodo = {
            id: oldTodo.id,
            title: title ? title : oldTodo.title,
            description: description ? description : oldTodo.description,
            completed: completed ? completed : oldTodo.completed
        }
        this.todos[todoIndex] = updateTodo
        return updateTodo
    }

    deleteTodoById(id) {
        const todoIndex = this.todos.findIndex((todo) => todo.id === id);
        if (todoIndex === -1) {
            return null
        }
        this.todos.splice(todoIndex, 1)
        return true
    }
}

module.exports = { TodoList }