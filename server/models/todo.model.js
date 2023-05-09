const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [3, 'Must be at least 3 characters']
    }
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;