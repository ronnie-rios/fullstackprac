const Todo = require('../models/todo.model');

//helper func to find 1
const findOne = async id => {
    const foundTodo = await Todo.findById(id);
    return foundTodo;
}

module.exports.getAllPets = async (req, res) => {
    try {
        const todos = await Todo.find();
        return res.json(todos);
    } catch (error) {
        res.status(400).json({
            error: error,
            message: 'error getting all'
        })
    }
}

module.exports.getOnePet = async (req, res) => {
    try {
        const id = req.params.id;
        const todo = await findOne(id);
        return res.json(todo);
    } catch (error) {
        return res.status(404).json({
            message: 'todo not found'
        })
    }
}

module.exports.createTodo = async (req, res) => {
    try {
        const newTodo = await Todo.create(req.body);
        return res.json(newTodo);
    } catch (error) {
        //using the built in validators
        res.status(422).json({ message: error.message })
    }
}

module.exports.deleteTodo = async (req, res) => {
    try {
        const id = req.params.id
        const deleted = await Todo.deleteOne({ _id: id });
        return res.json({ message: 'Completed' });
    } catch (error) {
        res.status(404).json({ message: 'Not found'})
    }
}