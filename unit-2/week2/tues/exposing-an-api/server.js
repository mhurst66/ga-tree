const express = require('express');
const app = express();

// middleware to parse JSON data
app.use(express.json());

// routes and notes below

// JSON Object
// JSON is a format resembling JavaScript objects but with specific rules (like keys enclosed in double quotes)
// {
//     "name": "Kira Nerys",
//     "species": "Bajoran",
//     "rank": "Colonel",
//     "isOnDeepSpaceNine": true,
//     "numberOfMissions": 173,
//     "knownFor": ["Bajoran Militia Officer", "Resistance Fighter"],
//     "relationships": {
//       "closeFriend": "Odo",
//       "mentor": null
//     },
//     "quote": "I'm a soldier, Major. I'm not used to relaxing."
//  }

// API Calculator object

// To track our total
let total = 0;

app.get('/calculator', (req, res) => {
    res.json({total});
    // status 200 ok!
    res.status(200).json({total});
});

// incoming data from our calculator should folow this JSON structure
// {
//     "number": 5,
//     "operation": "add"
// }

app.post('/calculator', (req, res) => {
    const number = req.body.number;
    const operation = req.body.operation;

    if (typeof number !== 'number'){
        return res.status(400).json({error: 'Invalid number'})
    }

    if (operation === 'add') {
      total += number;
    } else if (operation === 'subtract') {
      total -= number;
    } else if (operation === 'multiply') {
      total *= number;
    } else if (operation === 'divide') {
      total /= number;
    } else {
      // status 400 bad request!
      return res.status(400).json({error: 'Invalid operation'});
    }
  
    // status 200 ok! 
    res.status(200).json({total});
  });

  app.delete('/calculator', (req, res) => {
    total = 0

    // status 204 no content
    res.status(200).json({total});
  });



app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
