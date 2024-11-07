// import express
const express = require('express')
const morgan = require('morgan')

// create our express application object
const app = express()

// Use Morgan middleware with the 'dev' option for concise output
app.use(morgan('dev'))

// our routes
app.get('/', (req, res) => {
    res.send('<h1>Hello Express!<h1>')
})

app.get('/somedata', (req, res) => {
    res.send('Somedata / hello in app.get')
})

// req.query
// a query is a key-value
// seperated with an =, and added to the URL with a ?
// these values are stored in a seperated object from req.params
// stored in the object req.query
// ?someKey=someValue
// & = and
// %20 = a space
app.get('/hello', (req, res) => {
    // Accessing query parameters from the request
    console.log(req.query)
    const name = req.query.name
    const age = req.query.age

    // Using the query parameters to customize the response
    res.send(`Hello there, ${name}! I hear you are ${age} years old!`)
})


app.get('/greet/:name', (req, res) => {
    res.send(`Hello, ${req.params.name}`)
})

// MULTIPLE PARAMATERS
// ex: make a route that takes 2 parameters and
// send them back concactenated
app.get('/concat/:param1/:param2', (req, res) => {
    console.log(req.params)
    const concactenated = req.params.param1 + req.params.param2
    res.send(concactenated)
})

app.get('/:itemNumber', (req, res) => {
    // Accessing the parameter
    console.log(req.params.itemNumber)  // Output could be 123, 456, etc.
  
    // Sending a response with the parameter
    res.send(`<h1>Item ${req.params.itemNumber}</h1>`)
  })

// listen on port3000 for requests
app.listen(3000, () => {
    console.log('Listening on port3000')
})
