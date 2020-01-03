// void operator
void 0                  // returns undefined
void (0)                // returns undefined
void 'abc'              // returns undefined
void {}                 // returns undefined
void (1 === 1)          // returns undefined
void (1 !== 1)          // returns undefined
void anyfunction()      // returns undefined


// IIFE
(function () {
  console.log('Normal IIFE called')
})()
// Normal IIFE called

void function () {
  console.log('Cool IIFE called')
}()
// Cool IIFE called



// IIFE with a return

result = (function () {
  // ... some code
  return 'Victor Sully'
})()
// result: 'Victor Sully'

result = function () {
  // ... some code
  return 'Nathan Drake'
}()
// result: 'Nathan Drake'


// Constructor with brackets
const date = new Date()
const month = new Date().getMonth()
const myInstance = new MyClass()

// Constructor without brackets
const date = new Date
const month = (new Date).getMonth()
const myInstance = new MyClass


// with block example
const person = {
  firstname: 'Nathan',
  lastname: 'Drake',
  age: 29
}

with (person) {
  console.log(`${firstname} ${lastname} is ${age} years old`)
}
// Nathan Drake is 29 years old


// Tilde operator with indexOf
let username = "Nathan Drake"

if (~username.indexOf("Drake")) {
  console.log('Access denied')
} else {
  console.log('Access granted')
}

// custom functional properties
function greet () {
  if (greet.locale === 'fr') {
    console.log('Bonjour!')
  } else if (greet.locale === 'es') {
    console.log('Hola!')
  } else {
    console.log('Hello!')
  }
}

greet()
// Hello!
greet.locale = 'fr'
greet()
// Bonjour!


// custom functional properties
function generateNumber () {
  if (!generateNumber.counter) {
    generateNumber.counter = 0
  }
  return ++generateNumber.counter
}

console.log(generateNumber())
// 1
console.log(generateNumber())
// 2
console.log('current counter value: ', generateNumber.counter)
// current counter value: 2
generateNumber.counter = 10
console.log('current counter value: ', generateNumber.counter)
// current counter value: 10
console.log(generateNumber())
// 11


// callee && caller
const myFunction = function () {
  console.log('Current function: ', arguments.callee.name)
  console.log('Invoked by function: ', arguments.callee.caller.name)
}

void function main () {
  myFunction()
} ()

// Current function: myFunction
// Invoked by function: main

// Function constructor
const multiply = new Function('x', 'y', 'return x*y;');
multiply(2, 3)
// 6


//Normal template literal
`Hello ${username}!`

//Tagged template literal
myTag`Hello ${username}!`


// Defining a Tag for template literals
function highlight(strings, ...values) {
  // here i is the iterator for the strings array
  let result = ''
  strings.forEach((str, i) => {
    result += str
    if (values[i]) {
      result += `<mark>${values[i]}</mark>`
    }
  })
  return result
}

const author = 'Henry Avery'
const statement = `I am a man of fortune & I must seek my fortune`
const quote = highlight`${author} once said, ${statement}`

// <mark>Henry Avery</mark> once said, <mark>I am a man of fortune
// & I must seek my fortune</mark>


// Getters & Setters
const user = {
  firstName: 'Nathan',
  lastName: 'Drake',

  // fullname is a virtual field
  get fullName() {
    return this.firstName + ' ' + this.lastName
  },

  // validate age before saving
  set age(value) {
    if (isNaN(value)) throw Error('Age has to be a number')
    this._age = Number(value)
  },
  get age() {
    return this._age
  }
}

console.log(user.fullName) // Nathan Drake
user.firstName = 'Francis'
console.log(user.fullName) // Francis Drake
user.age = '29'
console.log(user.age) // 29
// user.age = 'invalid text' // Error: Age has to be a number

// Plus operator
+'9.11'          // returns 9.11
+'-4'            // returns -4
+'0xFF'          // returns 255
+true            // returns 1
+'123e-5'        // returns 0.00123
+false           // returns 0
+null            // returns 0
+'Infinity'      // returns Infinity
+'1,234'         // returns NaN
+dateObject      // returns 1542975502981 (timestamp)
+momentObject    // returns 1542975502981 (timestamp)


// Bang Bang operator

!!null            // returns false
!!undefined       // returns false
!!false           // returns false
!!true            // returns true
!!""              // returns false
!!"string"        // returns true
!!0               // returns false
!!1               // returns true
!!{}              // returns true
!![]              // returns true


declarationBlock: {
  // can be used to group logical code blocks together
  var i, j
}


forLoop1: //The first for statement is labeled "forLoop1"
for (i = 0; i < 3; i++) {      
   forLoop2: //The second for statement is labeled "forLoop2"
   for (j = 0; j < 3; j++) {   
      if (i === 1 && j === 1) {
         continue forLoop1
      }
      console.log('i = ' + i + ', j = ' + j)
   }
}

loopBlock4: {
  console.log('I will print')
  break loopBlock4
  console.log('I will not print')
}
