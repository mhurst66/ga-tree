console.log("Hello World, It's Monday!!!")
// javascript objects need a key and a value
// key must be a string or a symbol
// const someObject = {
//     3: 'some value'
// }

// {
//     "3": "some value"
// }
// value can be complex data types
// when functions are bound with object they become METHODS

// const someObject = {
//     3: 'some value',
//     someMethod: () => {console.log('hello world')}
// }

// const someFn = () => {
//     console.log('some fn')
// }
// KEY VALUE PAIRS ARE CALLED DICTIONARYS
//OBJECT ORIENTED PROGRAMMING
//FOCUSES ON ORGANIZING CODE AROUND OBJECTS
//and using objects to organize code rather than just variables

// const catName = 'Chippy'
// const dogName = 'Scout'
// const fishSwim = () => {
//     console.log('swim')
// }

// const cat = {
//     name: 'Chippy'
//     action: () => {console.log('meow')}
// }

// const dog = {
//     name: 'Scout'
//     action: () => {console.log('woof')}
// }

// objects examples
// login account form
// name age email payment methods
// all contained in 1 object
// WITH OTHER OBJECTS INSIDE FOR ALL THE EXTRA STUFF NEEDED FOR PAYMENT METHODS ETC

// const myName = 'Hunter'
// console(myName.toUpperCase())

// methods are also contained in javascript with primitive data types like .toUpperCase
// this is an "under the hood" method
// wherien javascript understands that "this is a function"
// but it functions like and OBJECT
// const someArray = [1, 2, 3, 4, 5]
// const someObject = {
//     one: 1,
//     two: 2,
//     three: 3
// }
// An array will always hold the same values in the same order in the same memory spot
// An object's key(s) are stored separtely in memory so when an object is populated it could populate the keys in a different order

// INITIALIZE OBJECTS

// const music = {
//     console.log('both valid objects')
// }

// let musicThatChanges = {
//     console.log('use this if variables need to be reassigned')
// }
// KEYS ARE CHANGED SEPARTELY
// BUT CONST IS A SAFER CHOICE
// if variable needs to be changed later code will throw an error and then you'll know youre changing a variable

// const music = {
//     someKey: 'some value',
//     someArray: [1, 2, 3, 4, 5],
//     someNumber: 12,
//     someOtherObjects: {
//         somekey: 1,
//         someNestedObject: {
//             someNestedArray: [
//                 {
//                     key1: 1
//                 }
//             ]
//         },
//     },
//     lastKey: 'last value',
//     "this key has spaces": 'still valid'
// }
// trailing commas (or the last comma is not needed but is allowed in the syntax)
// console.log(music)
// NOTE: Ojects justNeed = {someKey: 'somevalue',someArray: [1,2,3,4]}
// but a BEST practice is indented out

//DOT NOTATION
//because javascript makes all objects strings javascript can do something cool

// const someArrayInMusic = music.someArray
// console.log(someArrayInMusic)

// // dot notation accesses someArray in the music object

// // find key1 with dot notation
// // *rememeber to access array elements 0 is 1
// // in someNestedArray there is 1 element THAT IS AN ENTIRE OBJECT
// const findKey1 = music.someOtherObjects.someNestedObject.someNestedArray[0]
// console.log(findKey1)

// const accessedWithSpaces = music["this key has spaces"]
// console.log(accessedWithSpaces)
// Keys with spaces are valid they just need to be declared with []
// ALL OBJECT KEYS CAN BE ACCESSED WITH []
// But must be declared as strings unless they are a variable
//const someKey = 'variable'
// const accessedWithSpaces = music["lastKey"]
// console.log(accessedWithSpaces)
// const accessedWithSpaces = music[someKey]
// console.log(accessedWithSpaces)

// SIMPLE CHANGES WITH OBJECTS
// USE DOT NOTATION OR [] TO GRAB KEYS, REPLACE THEM, AND ADD THEM

// const someOtherFn = () => {
//     let someVar = 0
// }
// console.log(someVar)
// This wont work because someVar is ONLY DEFINED WITHIN THE FUNCTION
// AKA SCOPED TO THE FUNCTION

// const pets = {
//     dog: 'Spike',
//     cat: 'Chippy',
//     mouse: 'Jerry',
//     count() {
//         for(let i = 0; i < 10; i++) {
//             console.log(i + 1)
//         }
//     },
//     countBackwards: () => {
//         for(let i = 0; i < 10; i++) {
//             console.log(10 - i)
//         }
//     },
//     changeCatName: function(newName) {
//         this.cat = newName
//         // this is a method to change a value of key within the same object
//         // arrow functions do not have a 'this' keyword
//     }
// }

// pets.mouse = 'Jerry 2.0'
// // console.log(pets)

// pets.bird = 'Zazoo'
// // console.log(pets)

// pets['bird'] = 'Zazoo 2.0'
// // console.log(pets)

// pets.bird = [pets.bird, 'Bird 1', 'Bird 2', 'Bird 3']
// // console.log(pets)

// pets.bird[1] = 'Blue'
// // console.log(pets)

// pets.birds = pets.bird
// console.log(pets)
// delete pets.bird
// console.log(pets)

// INVOKING OBJECT METHODS
// will not do anything without ()
// because METHODS ARE FUNCTIONS
// pets.count()
// pets['countBackwards']()

// pets.changeCatName('Spot')
// console.log(pets)

// JAVASCRIPT STATIC METHODS
// Object.values() static method returns an array of a given object's own enumerable string-keyword property values

// const myInfo = {
//     firstName: 'Hunter',
//     lastName: 'Wallen',
//     SSN: "wouldnt you like to know",
//     DOB: 'old enough'
// }

// // const values = Object.values(myInfo)
// // console.log(values)
// // in a big object the values may not come back in the same order

// // const findKeyForValue = (obj, val) => {
// //     const keys = Object.keys(obj)
// //     for(let i = 0; i < keys.length; i ++) {
// //         if(obj[keys[i]] === val) {
// //             return keys[i]
// //         }
// //     }
// // }
// // console.log(findKeyForValue(myInfo, 'Wallen'))

// const entries = Object.entries(myInfo)
// // console.log(entries[0])
// for(let entry of entries) {
//     if(entry[1] === 'Wallen') {
//         console.log(entry[0])
//     }
// }

const complexObj = {
    someKey: 'some value',
    someArray: [1, 2, 3, 4],
    someNumber: 12,
    someOtherObjects: {
        somekey: 1,
        someNestedObject: {
            someNestedArray: [
                {
                    key1: 1
                },
                () => {
                    console.log('here')
                }
            ]
        },
    },
    lastKey: 'last value',
    "this key has spaces": 'still valid'
}
// REMEMBER TO INVOKE THE FUNCTION YOU NEED ()
// complexObj.someOtherObjects.someNestedObject.someNestedArray[1]()

// examples of how to print the array
// const arrToIterateOn = complexObj.someArray
// console.log(arrToIterateOn)
// // for(let i = 0; i < arrToIterateOn.length; i ++) {
// //     console.log(arrToIterateOn[i])
// // }
// for(let el of arrToIterateOn) {
//     console.log(el)
// }


const user256 = {
    name: 'Hunter Wallen',
    address: '12345 Some rd, Some Town, CO 80000',
    deliveryAddresses: [
        '8888 Some rd, Some Town, CO 80000',
        '2234 Some rd, Some Town, CO 80000',
        '9999 Some rd, Some Town, CO 80000',
    ],
    paymentMethods: [
        {
            ccNum: '9999 0000 8888 7777',
            expDate: '07/99',
            secCode: '896',
            billingZip: '80000'
        },
        {
            ccNum: '9999 9999 9999 9999',
            expDate: '07/19',
            secCode: '271',
            billingZip: '80000'
        },
    ],
    wishLists: [
        {
            title: 'Birthday',
            items: [
                {
                    name: "Rooftop Tent",
                    price: '3750',
                    description: 'iKamper'
                },
                {
                    name: "Raptor R",
                    price: 113000.00,
                    description: '2024 Raptor R'
                },
                {
                    name: "Propane Firepit",
                    price: 250.00,
                    description: 'With an off switch!'
                }
            ]
        }
    ]
}

const listWishListItems = (user, listName) => {
    const wishLists = user.wishLists
    for(list of wishLists) {
        if(list.title === listName) {
            for(item of list.items) {
                console.log(item)
            }
        }
    }
}

listWishListItems(user256, 'Birthday')