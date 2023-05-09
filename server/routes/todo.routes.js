const TodoController = require('../controller/todo.controller');

module.exports = app => {
    app.get('/todos', TodoController.getAllTodos);
    app.get('/todos/:id', TodoController.getOneTodo);
    app.post('/todo', TodoController.createTodo);
    app.delete('/todo/:id', TodoController.deleteTodo);
}