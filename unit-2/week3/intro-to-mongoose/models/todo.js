const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    // WHAT TYPES WE CAN USE FOR OUR SCHEMA?? https://mongoosejs.com/docs/schematypes.html#what-is-a-schematype
    text: String,
    isComplete: Boolean,
})

// TO CREATE A TOOD OBJECT MODEL USING OUR SCHEMA ABOVE
const Todo = mongoose.model('Todo', todoSchema)
// This is also translating the model's name intto a corresponding MongoDB collection name

module.exports = Todo