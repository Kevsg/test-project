const express = require('express');
const bodyParser = require('body-parser');
const { TodoList } = require('./todo');

const app = express()
const port = 3000
const todoList = new TodoList();

app.use(bodyParser.json())

app.get('/todos', async (req, res) => {
    const response = todoList.getTodos();
    res.json(response);
});

app.get('/todos/:id', async (req, res) => {
    const response = todoList.getTodoById(req.params.id);
    if (!response) {
        res.status(404).send(`Todo with id: ${req.params.id} not found!`)
        return
    }
    res.json(response);
});

app.post('/todos', async (req, res) => {
    const { title, description, completed } = req.body;
    const response = todoList.createNewTodo(title, description, completed);
    if (!response) {
        res.status(400).send(`Cannot create todo with the request provided!`)
        return
    }
    return res.status(200).json(response);
});

app.put('/todos/:id', async (req, res) => {
    const { id } = req.params
    const { title, description, completed } = req.body;
    const response = todoList.updateTodoById(id, title, description, completed);
    if (!response) {
        res.status(400).send(`Cannot update todo id: ${id} with the request provided!`)
        return
    }
    return res.status(200).json(response);
});

app.delete('/todos/:id', async (req, res) => {
    const response = todoList.deleteTodoById(req.params.id);
    if (!response) {
        res.status(400).send(`Cannot delete todo id: ${req.params.id}!`)
        return
    }
    return res.status(200).send();
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})