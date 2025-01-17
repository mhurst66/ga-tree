const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

const saltRounds = 12


router.post('/sign-up', async (req, res) => {
    try {
        const userInDatabase = await User.findOne({ username: req.body.username })
        
        if (userInDatabase) {
            return res.status(409).json({err:'Username already taken.'})
        }

        const user = await User.create({
            username: req.body.username,
            hashedPassword: bcrypt.hashSync(req.body.password, saltRounds)
        })

        const payload = { username: user.username, _id: user._id}

        const token =jwt.sign({ payload }, process.env.JWT_SECRET)
        
        res.status(201).json({ token })

    } catch (err) {
        res.status(500).json({ err: err.message })
    }

});

router.post('/sign-in', async (req, res) => {
    try {
      // Look up the user by their username in the database
      const user = await User.findOne({ username: req.body.username })
      // If the user doesn't exist, return a 401 status code with a message
      if (!user) {
        return res.status(401).json({ err: 'Invalid credentials.' })
      }
      const isPasswordCorrect = bcrypt.compareSync(
        req.body.password, user.hashedPassword
      )
      if (!isPasswordCorrect) {
        return res.status(401).json({ err: 'Invalid credentials.' })
      }
  
      // Construct the payload
      const payload = { username: user.username, _id: user._id }
  
      // Create the token, attaching the payload
      const token = jwt.sign({ payload }, process.env.JWT_SECRET)
  
      // Send the token instead of the message
      res.status(200).json({ token })
    } catch (err) {
      res.status(500).json({ err: err.message })
    }
});
  
  



module.exports = router;
