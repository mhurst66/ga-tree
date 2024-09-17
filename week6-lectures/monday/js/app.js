console.log("array methods")

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#instance_methods

const arr = ['Deja', 'Gore', 'Hunter']

// for (let i = 0; i < arr.length; i ++) {
//     // code to do stuff
//     console.log(arr[i])
// }

arr.forEach((name) => {
    console.log(name)
})

arr.forEach(function(name){
    console.log(name)
})

// Callback: is a function that is passed to another function as an argument

// Higher Order fuctions/method: is a function that takes another function as an argument or returns them as an output

// .forEach()
// runs the provided function code once, for each element
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

const friends = ['ross', 'rachel', 'joey', 'monica', 'phoebe', 'chandler']

// lets declare a callback function
const sendEmail = (name) => {
    console.log(`Sending email to ${name}`)
}

// Invoking the higher order array method by passing in "sendEmail" function as a callback
friends.forEach(sendEmail)

// why we are not calling the sendEmail function?
    // we just need to reference the function that the "forEach" method will run later

    // this is what the forEach produces:
    // sendEmail(friends[0])
    // sendEmail(friends[1])
    // sendEmail(friends[2])
    // sendEmail(friends[3])
    // sendEmail(friends[4])
    // sendEmail(friends[5])

// let coolStr = 'something'
// // string intrepolation
// console.log(`whatever we want here ${coolStr}`)
// // concatenation
// console.log("whatever we want here" + coolStr)

// Create a copy of the friends array, with all letters uppercased

// const friendsUpperCase = []

// friends.forEach((name) => {
//     const nameUpperCase = name.toUpperCase()
//     // then push to the array on line 57
//     friendsUpperCase.push(nameUpperCase)
// })

// console.log(friendsUpperCase)

// .map
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// It will create a new array from the source (friends) array "transforming" its values. The returned array is always the same length as the source.

// Create a copy of the friends array, with just the first letter uppercased
// Strings also have indexs so you can refence the first letter with name[0] or friends[0][0]

const friendsUpperCase = friends.map((name) => {
    // const firstLetterCap = name.charAt(0).toUpperCase()
    const firstLetterCap = name[0].toUpperCase()
    // 'R' + 'oss' .substring gives us the rest of the string after the choose index
    return firstLetterCap + name.substring(1)
})

console.log(friendsUpperCase)

const numbers = [
    15,
    18,
    3921,
    327,
    88,
    1235,
    1,
    55855,
    34,
    5,
    9,
    9019,
    156,
    874,
    76,
    444,
    12346
  ]

//   const squares = numbers.map((num) => num*num)
// if it stays on one line no curly braces

const squares = numbers.map((num) => {
    return num*num
    // multi line function
})

console.log(squares)

// .map() with index (optional), array (optional)
const arrFruits = ['apple', 'banana', 'orange']

const mappedFruits = arrFruits.map((element, index, array) => {
    return `element is: ${element} and the index is: ${index} and array is: ${array}`
})

console.log(mappedFruits)

// .filter()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// creates and returns a new array with elements that meet the condition inside the callback

// declare callback
const greaterThan100 = (num) => {
    if (num > 100) {
        return true
    } else {
        return false
    }
}
const greaterThan100Arr = numbers.filter(greaterThan100)

const greaterThan100Array = numbers.filter((num) => {
    return num > 100
})

console.log(greaterThan100Arr)
console.log(greaterThan100Array)

const states = [
    {
      name: "Alabama",
      capital: "Montgomery",
      lat: "32.361538",
      long: "-86.279118"
    },
    {
      name: "Alaska",
      capital: "Juneau",
      lat: "58.301935",
      long: "-134.419740"
    },
    {
      name: "Arizona",
      capital: "Phoenix",
      lat: "33.448457",
      long: "-112.073844"
    },
    {
      name: "Arkansas",
      capital: "Little Rock",
      lat: "34.736009",
      long: "-92.331122"
    },
    {
      name: "California",
      capital: "Sacramento",
      lat: "38.555605",
      long: "-121.468926"
    },
    {
      name: "Colorado",
      capital: "Denver",
      lat: "39.7391667",
      long: "-104.984167"
    },
    {
      name: "Connecticut",
      capital: "Hartford",
      lat: "41.767",
      long: "-72.677"
    },
    {
      name: "Delaware",
      capital: "Dover",
      lat: "39.161921",
      long: "-75.526755"
    },
    {
      name: "Florida",
      capital: "Tallahassee",
      lat: "30.4518",
      long: "-84.27277"
    },
    {
      name: "Georgia",
      capital: "Atlanta",
      lat: "33.76",
      long: "-84.39"
    },
    {
      name: "Hawaii",
      capital: "Honolulu",
      lat: "21.30895",
      long: "-157.826182"
    },
    {
      name: "Idaho",
      capital: "Boise",
      lat: "43.613739",
      long: "-116.237651"
    },
    {
      name: "Illinois",
      capital: "Springfield",
      lat: "39.783250",
      long: "-89.650373"
    },
    {
      name: "Indiana",
      capital: "Indianapolis",
      lat: "39.790942",
      long: "-86.147685"
    },
    {
      name: "Iowa",
      capital: "Des Moines",
      lat: "41.590939",
      long: "-93.620866"
    },
    {
      name: "Kansas",
      capital: "Topeka",
      lat: "39.04",
      long: "-95.69"
    },
    {
      name: "Kentucky",
      capital: "Frankfort",
      lat: "38.197274",
      long: "-84.86311"
    },
    {
      name: "Louisiana",
      capital: "Baton Rouge",
      lat: "30.45809",
      long: "-91.140229"
    },
    {
      name: "Maine",
      capital: "Augusta",
      lat: "44.323535",
      long: "-69.765261"
    },
    {
      name: "Maryland",
      capital: "Annapolis",
      lat: "38.972945",
      long: "-76.501157"
    },
    {
      name: "Massachusetts",
      capital: "Boston",
      lat: "42.2352",
      long: "-71.0275"
    },
    {
      name: "Michigan",
      capital: "Lansing",
      lat: "42.7335",
      long: "-84.5467"
    },
    {
      name: "Minnesota",
      capital: "Saint Paul",
      lat: "44.95",
      long: "-93.094"
    },
    {
      name: "Mississippi",
      capital: "Jackson",
      lat: "32.320",
      long: "-90.207"
    },
    {
      name: "Missouri",
      capital: "Jefferson City",
      lat: "38.572954",
      long: "-92.189283"
    },
    {
      name: "Montana",
      capital: "Helana",
      lat: "46.595805",
      long: "-112.027031"
    },
    {
      name: "Nebraska",
      capital: "Lincoln",
      lat: "40.809868",
      long: "-96.675345"
    },
    {
      name: "Nevada",
      capital: "Carson City",
      lat: "39.160949",
      long: "-119.753877"
    },
    {
      name: "New Hampshire",
      capital: "Concord",
      lat: "43.220093",
      long: "-71.549127"
    },
    {
      name: "New Jersey",
      capital: "Trenton",
      lat: "40.221741",
      long: "-74.756138"
    },
    {
      name: "New Mexico",
      capital: "Santa Fe",
      lat: "35.667231",
      long: "-105.964575"
    },
    {
      name: "New York",
      capital: "Albany",
      lat: "42.659829",
      long: "-73.781339"
    },
    {
      name: "North Carolina",
      capital: "Raleigh",
      lat: "35.771",
      long: "-78.638"
    },
    {
      name: "North Dakota",
      capital: "Bismarck",
      lat: "48.813343",
      long: "-100.779004"
    },
    {
      name: "Ohio",
      capital: "Columbus",
      lat: "39.962245",
      long: "-83.000647"
    },
    {
      name: "Oklahoma",
      capital: "Oklahoma City",
      lat: "35.482309",
      long: "-97.534994"
    },
    {
      name: "Oregon",
      capital: "Salem",
      lat: "44.931109",
      long: "-123.029159"
    },
    {
      name: "Pennsylvania",
      capital: "Harrisburg",
      lat: "40.269789",
      long: "-76.875613"
    },
    {
      name: "Rhode Island",
      capital: "Providence",
      lat: "41.82355",
      long: "-71.422132"
    },
    {
      name: "South Carolina",
      capital: "Columbia",
      lat: "34.000",
      long: "-81.035"
    },
    {
      name: "South Dakota",
      capital: "Pierre",
      lat: "44.367966",
      long: "-100.336378"
    },
    {
      name: "Tennessee",
      capital: "Nashville",
      lat: "36.165",
      long: "-86.784"
    },
    {
      name: "Texas",
      capital: "Austin",
      lat: "30.266667",
      long: "-97.75"
    },
    {
      name: "Utah",
      capital: "Salt Lake City",
      lat: "40.7547",
      long: "-111.892622"
    },
    {
      name: "Vermont",
      capital: "Montpelier",
      lat: "44.26639",
      long: "-72.57194"
    },
    {
      name: "Virginia",
      capital: "Richmond",
      lat: "37.54",
      long: "-77.46"
    },
    {
      name: "Washington",
      capital: "Olympia",
      lat: "47.042418",
      long: "-122.893077"
    },
    {
      name: "West Virginia",
      capital: "Charleston",
      lat: "38.349497",
      long: "-81.633294"
    },
    {
      name: "Wisconsin",
      capital: "Madison",
      lat: "43.074722",
      long: "-89.384444"
    },
    {
      name: "Wyoming",
      capital: "Cheyenne",
      lat: "41.145548",
      long: "-104.802042"
    }
  ]

// Create an array call allCapitalsA with all the states with capitals that start with the letter A.

// const allCapitalsA = states.filter((state) => state.capital.charAt(0) === "A")

const allCapitalsA = states.filter((state) => {
    return state.capital[0] === "A"
})

console.log(allCapitalsA)

// .find()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// returns the first element in the provided array that matches the provided test function. undefind is returned if not found

const cars = [
    {color: 'red', make: 'BMW', year: 2001},
    {color: 'white', make: 'Toyota', year: 2013},
    {color: 'blue', make: 'Ford', year: 2014},
    {color: 'white', make: 'Tesla', year: 2016}
  ]

// let's find the first car object in the cars array that has the color white

const firstWhiteCar = cars.find((car) => {
    return car.color === 'white'
})

console.log(firstWhiteCar)

// now a black car?
const firstBlackCar = cars.find((car) => {
    return car.color === 'black'
})

console.log(firstBlackCar)

// findIndex()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
// Returns the first element's index in the provided array that matches the provdied testing function. -1 is returned if not found

const firstWhiteCarIdx = cars.findIndex((car) => {
    return car.color === 'white'
})

console.log(firstWhiteCarIdx)

// and what if the car is black?
const firstBlackCarIdx = cars.findIndex((car) => {
    return car.color === 'black'
})

console.log(firstBlackCarIdx)

// .some()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
// returns a boolean (true/false) value if atleast one element meets or matches the provided test condition

// let's check if a car in the car array is a ford
const hasFord = cars.some((car) => {
    return car.make === 'Ford'
})

console.log(hasFord)

// .every()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
// returns a boolean (true/false) value if ALL elements meet the provided test condition

// let's check if every car object in the car array is blue programmatically

const isEveryCarBlue = cars.every((car) => {
    return car.color === 'blue'
})
console.log(isEveryCarBlue)

// .reduce()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
// reduces an array to a single value. Note that the "single value" can be a single object, array - anything

const nums = [25, 6, 100, 3]

const totalSum = nums.reduce((accumulator, current) => {
    const sum = accumulator + current
    return sum
})

// 1#
// accumulator = 0
// current = 25
// returning the total 25 // this becomes the accumulator in the next iteration

// 2#
// accumulator = 25
// current 6
// returning the total 31

// 3#
// accumulator = 31
// current = 100
// returning the total 131

// 4#
// accumulator = 131
// current = 3
// returning the final total of 134
console.log(totalSum)

// Another example, count votes

const votes = ['Yes', 'No', 'No', 'Yes', 'Yes']
                /// {}, 'Yes'
                /// {}, 'No'
const tally = votes.reduce((acc, vote) => {
    // #1 vote = 'Yes'
    if (acc[vote]) { // false the first time because the initial value object is empty
        acc[vote] += 1      
    } else {
        acc[vote] = 1
        // first time:
        // acc = { "Yes": 1 }
    }
    return acc
}, {})
// tally is {'No': 2, 'Yes': 3}
console.log(tally)

// #1 hits the else
// acc = {}
// vote = 'Yes'
// acc is {'Yes': 1}

// #2 hits the else for no
// acc = {'Yes': 1}
// vote = 'No'
// acc is {'Yes':1, 'No': 1}

// #3 hits the first part of the if statement
// acc = {'Yes':1, 'No': 1}
// vote = 'No'
// acc is {'Yes':1, 'No': 2}
