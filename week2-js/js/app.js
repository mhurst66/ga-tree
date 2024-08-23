console.log("Arrays!!!!")
// ARRAYS

// Array is a data type in Javascript*
// * not really

//technically  its a data structure

// IT'S a LIST

// you can declare an array

// const arr = [] // don't call an array "array" or "Array"

// console.log(arr)

// Array's contain ELEMENTS, separated by commas

// an ELEMENT in an array can be ANY DATA TYPE AT ALL (num, str, bool, null, obj, func, arr, whatever)
// in practice, all elements in an array are usually the same data type
// but they do not have to be

// delcare an array of strings
// const list = ['chair', 'table', 'candle', 'couch', 'dresser']
// or we can use numbers
const squares = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// ARRAY NAMES SHOUlD almost ALWAYS BE PLURAL

// you can check anything's data type with typeof ***operator***
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof


// uh oh...
// console.log(typeof list) // arays are not actually a data type in JS

// BUT if you want to check if something is an array use Array.isArray()
// console.log(Array.isArray(list)) // returns a true or false value

const faveFoods = ['nachos', 'wings', 'sushi', 'ramen', 'pizza', 'hotdog', 'tacos']

console.log(faveFoods)

const list = ['chair', 'table', 'candle', 'couch', 'dresser']

// ACCESS ELEMENTS

// all array elements have an INDEX number that can be used to acces their elements

// INDEX NUMBERS START 0

// to access elements in an array, use square brackets [] containing the index number after the name

// e.g. access "candle" in our list array:
console.log(list[2])

// print chair from out list array (the first element)
console.log(list[0])

const ghostBusters = [
    "Venkman",
    "Spengler",
    "Stantz",
    "Zeddermore",
    "Melnitz",
    "Barrett",
    "Tully"
  ]

// access the 3rd element from the ghostBusters array
console.log(ghostBusters[2])

// access the 4th element from the ghostBusters array
console.log(ghostBusters[3])

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

console.log(ghostBusters.indexOf("Tully"))
console.log(ghostBusters[6])

// ARRAY LENGTH .length

// there is a .length property on all arrays automatically
// that will tell you how many elements are in that array
// just add .length to the end of the variable name

console.log(faveFoods.length)
console.log(ghostBusters.length)

console.log([1,2,null, Infinity, "hello", false].length)

// you can also USE AND EXPRESSION WHOSE VALUE IS A NUMBER as an array index
// an expression that evaluated to a value is == the value

// ex without harcoding 6, print the last element of the ghostBusters array

const final = ghostBusters.length - 1
console.log(final)
console.log(ghostBusters[final])

console.log(ghostBusters[ghostBusters.length-1])

// CHANGING ELEMENTS IN A ARRAY

const veggies = ['red pepper', 'leek', 'cauliflower', 'pumpkin']

// you can change an element by accessing it and using assignment operator =

// to change leek to spinach
veggies[1] = 'spinach'
console.log(veggies)

// veggies = [] cannot assign to a constant variable

// ex -- without using 3, change the last element in the veggies array to broccoli

const last = veggies.length-1
console.log(last)
veggies[last] = 'broccoli'
console.log(veggies)

// ex -- change the third element to null and console.log() the entire array to confirm
const numbers = [21, 18, 5, 3, 2, 1]
numbers[2] = null
console.log(numbers)

// remember you can use ANY expression to access elements
// LIST has 6 elements
console.log(list.length)
console.log(list[2 * 2])

// think: if my list has an even # of elements, how do I access the one to the right of the middle
// hint: can write an expression to calculate that value?
console.log(list[list.length / 2])
console.log(list.length - length)


// iterating

// using a loop to access the elements in an array in order is called iterating

const kitchenSink = ['dirty spoon', 'sponge', 'messy plate', 'soap', 'water']

// lets print every item in the array using a loop

// inside this loop
// i is 0, then 1, then 2, then 3, then 4, then the loop stops

for (let i = 0; i < kitchenSink.length; i++) {
  console.log(kitchenSink[i])
}

// for of ...
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of
for (let element of kitchenSink) {
  console.log(element)
}

// for each
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
kitchenSink.forEach((element) => {
    console.log(element)
})

// terminology -- you ITERATE "OVER" an ARRAY (or through them sometimes)

// There are a bunch of AWESEOME Array methods you can use
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// .push(element) -- adds an element to the end of the array
kitchenSink.push("faucet")
console.log(kitchenSink)

kitchenSink.push("bowl", "cup", "rag")
console.log(kitchenSink)

// .pop() -- removes an element from the end of the array
kitchenSink.pop()
console.log(kitchenSink)

// .shift() -- removes an element from the beginning of the array
kitchenSink.shift()
console.log(kitchenSink)

// .unshift(element) -- adds an element to the beginning of the array
kitchenSink.unshift("mug")
console.log(kitchenSink)

// .splice(index to start removing, how many to remove)
const returnedFromSplice = kitchenSink.splice(4, 2)
console.log(kitchenSink)
console.log(returnedFromSplice)

// // .indexOf(element you are looking for)
const theIndex = kitchenSink.indexOf('soap')
console.log(theIndex)

// MULTI - DIMENSIONAL ARRAYS

// Arrays can contain other arrays as elements

const pairs = [['Snoopy', 'Linus'], ['Peppermint Patty', 'Woodstock']]
console.log(pairs.length)

// print "Peppermint Patty"
console.log(pairs[1][0])
// pairs[1] is an array, so pairs[1][0] is an element in that array

// Two dimensional array are SUPER useful for modeling grid like data
// e.g. tic tac toe game layout

const grid = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
]





