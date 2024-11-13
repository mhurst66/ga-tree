// models/todo.js
const mongoose = require('mongoose');

// Subdocuments
const subtaskSchema = new mongoose.Schema({
    text: String,
    isComplete: Boolean,
});

// Subdocuments do not have to be lists
// const addressSchema = new mongoose.Schema({
//     street: String,
//     city: String,
// })

// Model
const todoSchema = new mongoose.Schema({
  text: String,
  isComplete: Boolean,
  subtasks: [subtaskSchema],
//   address: addressSchema <--- can be a single field (ie can just be an object field)
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
