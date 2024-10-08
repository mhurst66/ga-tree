// const fs = require('fs');

// fs.writeFile('./hello.txt', 'hello, friend', () => {
//     console.log('done creating file');
// });

const validator = require('validator');

console.log(validator.isEmail('test@example.com')); // Expected: true
console.log(validator.isEmail('not-an-email')); // Expected: false