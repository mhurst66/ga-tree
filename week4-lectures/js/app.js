console.log("Introduction to the DOM!")

// getElementById()
// https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById

let titleElement = document.getElementById("Title")

console.log(titleElement)

// id's should be unique

// https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML

titleElement.innerHTML = "Hello!"

// querySelector()

let grabTitleAgain = document.querySelector("#Title")

console.log(grabTitleAgain)

// getElementsByClassName
let classElements = document.getElementsByClassName("text")
console.log(classElements)

// getElementsByTagName
// this return every img element on the page and saves it to the imgElements variable
let imgElements = document.getElementsByTagName("img")
console.log(imgElements)

// querySelector()
let title = document.querySelector("#Title")
console.log(title)

let button = document.querySelector(".button")
console.log(button)

let listLi = document.querySelector(".text")
console.log(listLi)

let listLiAll = document.querySelectorAll(".text")
console.log(listLiAll)

// Differences between innerText, innerHTML, textContent
// https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent#differences_from_innertext



// createElement()

let elementH1 = document.createElement("h1")

// add text to the element first
elementH1.textContent = "This is our Div that we want to add to the DOM"

console.log(elementH1)

// select the body of the HMTL
let bodyElement = document.querySelector('body')

// append the h1 in the DOM of the body
bodyElement.append(elementH1)

// appendChild | append() adds to the end of the node
// prepend adds to the beginning


// lets center our text now for our h1

elementH1.style.textAlign = 'center'

// Selecting Multiple Elements

let ulElements = document.querySelectorAll('li')

console.log(ulElements)

ulElements.forEach((listElement) => {
    console.log(listElement.textContent)
    listElement.style.fontSize = '30px'
})

// remove elements from the DOM
// https://developer.mozilla.org/en-US/docs/Web/API/Element/remove

// let ulList = document.querySelector("#unordered-list")
// ulList.remove()

// to get all of the attributes
console.log(button.attributes)

// getting an attribute
console.log(button.getAttribute("name"))

// setting an attribute
button.setAttribute("name", "hellobutton")
console.log(button)

// note this adds the attribute if it doesn't exist
button.setAttribute("disabled", "")
console.log(button)

// check if an element has an attribute
console.log(button.hasAttribute("disabled"))

// remove
// removeAttribute()

// practical example
// already selected the button node from the DOM

if (button.hasAttribute('disabled') === true) {
    // the button is disabled
    button.removeAttribute('disabled')
}

// Class list API
// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList

// to see the classList
console.log(button.classList)

button.classList.add("hyacinth")

console.log(button.classList)

button.classList.remove("button")
console.log(button.classList)

button.classList.replace("hyacinth", "button")
console.log(button.classList)

// toggle is used a lot to change the style of an element

button.classList.toggle("purple")
console.log(button.classList)
