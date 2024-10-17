// server.js

const express = require('express')
const app = express()

const inventory = [
    { name: 'Candle', qty: 4 },
    { name: 'Cheese', qty: 10 },
    { name: 'Phone', qty: 1 },
    { name: 'Tent', qty: 0 },
    { name: 'Torch', qty: 5 }
]

app.get('/', (req, res) => {
    res.render('home.ejs', { 
      msg: 'Here is your inventory',
      player: {
        name: "Matt"
      },
      inventory: inventory,
    })
})

app.get('/:itemId', (req, res) => {
    // console.log(req.params)
    const index = req.params.itemId

    res.render('show.ejs', {
        item: inventory[index]
    })
})
  
  












app.listen(3000, () => {
  console.log('Listening on port 3000')
})

// Notes on EJS
// https://ejs.co/#docs
// manual for EJS
// Model-View-Controller
// https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller
// https://developer.mozilla.org/en-US/docs/Glossary/MVC/model-view-controller-light-blue.png
// traditional used for graphical user interfaces (GUI) but is now is used a lot in web applications
// RESTful routes
// https://pages.git.generalassemb.ly/modular-curriculum-all-courses/restful-routing/restful-routing-conventions/