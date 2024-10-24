/*------------------------------- Starter Code -------------------------------*/

require('dotenv').config();
const mongoose = require('mongoose');

// queries.js
const Todo = require('./models/todo.js');


const connect = async () => {
  // Connect to MongoDB using the MONGODB_URI specified in our .env file.
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB');

  // Call the runQueries function, which will eventually hold functions to work
  // with data in our db.
  await runQueries()

  // Disconnect our app from MongoDB after our queries run.
  await mongoose.disconnect();
  console.log('Disconnected from MongoDB');

  // Close our app, bringing us back to the command line.
  process.exit();
};

const runQueries = async () => {
  console.log('Queries running.')
    // The functions calls to run queries in our db will go here as we write them.
    // await createTodo()
    // await findTodos()
    await findByIdTodo()
    // await findOneTodo()
    // await updateTodo()
    // await deleteTodo()
};

connect()
/*------------------------------ Query Functions -----------------------------*/
// https://mongoosejs.com/docs/api/query.html

// CREATE
const createTodo = async () => {

    const todoData = {
        text: "Learn JS",
        isComplete: false,
    }

    const todo = await Todo.create(todoData)
    console.log("New Todo:", todo)
}

// READ
// similar to something we would do for our index route (ALL TODOS)
const findTodos = async () => {
    const todos = await Todo.find({})
    console.log("All todos:", todos)
}

// example to find one specific todo
const findByIdTodo = async () => {
    // need an id , we can copy from terminal
    const id = "671ad300977af7ce8b97ff6e"
    const todo = await Todo.findById(id)
    console.log("One todo:", todo)
}

// findOne()
const findOneTodo = async () => {
    const todo = await Todo.findOne({ text: "Learn JS",})

    console.log("findOne():", todo)
}

// UPDATE
const updateTodo = async () => {
    const id = "671ad300977af7ce8b97ff6e"
    const updatedTodo = await Todo.findByIdAndUpdate(
        id,
        { isComplete: true },
        { new: true },
    )
    console.log("Updated Todo:", updatedTodo)
}

// DELETE
const deleteTodo = async () => {
    const id = "671ad300977af7ce8b97ff6e"
    const removedTodo = await Todo.findByIdAndDelete(id)
    console.log('Removed todo:', removedTodo)
}
