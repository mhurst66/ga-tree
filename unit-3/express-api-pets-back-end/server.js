const dotenv = require('dotenv')
dotenv.config()
const express = require('express')

const cors = require('cors')

const app = express()
const mongoose = require('mongoose')


const petRouter = require('./controllers/pets.js')

app.use(cors())
// app.use(cors({ origin: 'http://localhost:5173' }))

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`)
})

app.use(express.json())

app.use('/pets', petRouter)









app.listen(3000, () => {
  console.log('The express app is ready!')
})
