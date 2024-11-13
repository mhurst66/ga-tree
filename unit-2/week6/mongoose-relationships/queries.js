/*------------------------------ Starter Code ------------------------------*/

const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
const Todo = require('./models/todo.js');

const connect = async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');
  await runQueries()

  await mongoose.disconnect();
  console.log('Disconnected from MongoDB');
  process.exit();
};

connect()

/*----------------------------- Query Functions -----------------------------*/

const createTodo = async () => {
  const todoData = {
    text: "learn React",
    isComplete: false,
  };
  const todo = await Todo.create(todoData);
  console.log("New todo:", todo);
};

const findTodos = async () => {
  const todos = await Todo.find({});
  console.log("All todos:", todos);
//   return todos
};

const createSubtask = async () => {
    // Assume that the todo we want to create a sub-task for has the following id:
    const todoId = "6733eabc8027e6a92eeee58b";
    // Look up the todo by id, assign the returned object to `todo`
    const todo = await Todo.findById(todoId);
  
    const subtaskData = {
      text: "Learn how props work",
      isComplete: false,
    };
  
    // Push the new sub-task data into the subtasks array on the todo:
    const subtask = todo.subtasks.push(subtaskData);
    // Save the parent document:
    await todo.save();
    console.log("Modified todo:", todo);
};

/*------------------------------- Run Queries -------------------------------*/

const runQueries = async () => {
  console.log('Queries running.');
//   await createTodo()
  await createSubtask()
};
  