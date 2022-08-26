// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest


// const { it } = require("node:test")
// const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.
// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// GOOD FAILURE?:
// totalVotes
// ✓ returns the total net number of votes (1 ms)
// noDupesArray
// ✓ return an array with no duplicate values from two arrays as given input. (1 ms)

// ● shuffledArray › return an array with the first item removed and its contents shuffled

// expect(received).toEqual(expected) // deep equality

// Expected: ArrayContaining ["yellow", "blue", "pink", "green"]
// Received: 0

//   25 |
//   26 |     it("return an array with the first item removed and its contents shuffled",()=>{
// > 27 |         expect(shuffledArray(colors1)).toEqual(expect.arrayContaining(expected))
//      |                                        ^
//   28 |         expect(shuffledArray(colors2)).toEqual(expect.arrayContaining(expectedTwo))
//   29 |     })
//   30 |     it("does not match if recieved does not contain expected elements", ()=>{

//   at Object.toEqual (code-challenges.test.js:27:40)

// ● shuffledArray › does not match if recieved does not contain expected elements

// expect(received).not.toEqual(expected) // deep equality

// Expected: not ArrayContaining ["yellow", "blue", "pink", "green"]
// Received:     ["purple", "yellow", "blue", "pink", "green"]

//   29 |     })
//   30 |     it("does not match if recieved does not contain expected elements", ()=>{
// > 31 |         expect(["purple","yellow", "blue", "pink", "green"]).not.toEqual(expect.arrayContaining(expected))
//      |                                                                  ^
//   32 |         expect(["chartreuse","saffron", "aquamarine", "periwinkle", "indigo", "ochre"]).not.toEqual(expect.arrayContaining(expectedTwo))
//   33 |     })
//   34 |     

//   at Object.toEqual (code-challenges.test.js:31:66)

// Test Suites: 1 failed, 1 total
// Tests:       2 failed, 2 passed, 4 total
// Snapshots:   0 total
// Time:        0.47 s, estimated 1 s
// Ran all test suites.

// describe("shuffledArray",()=>{
//     const expected = ["yellow", "blue", "pink", "green"]
//     const expectedTwo = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

//     it("return an array with the first item removed and its contents shuffled",()=>{
//         expect(shuffledArray(colors1)).toEqual(expect.arrayContaining(expected))
//         expect(shuffledArray(colors2)).toEqual(expect.arrayContaining(expectedTwo))
//     })
//     it("does not match if recieved does not contain expected elements", ()=>{
//         expect(["purple","yellow", "blue", "pink", "green"]).not.toEqual(expect.arrayContaining(expected))
//         expect(["chartreuse","saffron", "aquamarine", "periwinkle", "indigo", "ochre"]).not.toEqual(expect.arrayContaining(expectedTwo))
//     })
    
// })


const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

//PSEUDO CODE
//1. Write a function called shuffledArray that takes an array as an input
//2. the first index in the array must be lopped off using .shift()
//3. next the elements must be randomly shuffled using a while loop
//4. define a variable called currentIndex 
//5. the while loop 
// After doing so return the shuffled array

// b) Create the function that makes the test pass.

const shuffledArray = (array) => {
    array.shift()
    let currentIndex = array.length, randomIndex;

    while(currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }
    return array
}




// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

// a) Create a test with expect statements for each of the variables provided.

// describe("totalVotes", ()=>{
//     it("returns the total net number of votes", ()=>{
//         expect(totalVotes(votes1)).toEqual(11)
//         expect(totalVotes(votes2)).toEqual(-31)
//     })
// })

// GOOD FAILURE:
// FAIL  ./code-challenges.test.js
// totalVotes
//   ✕ returns the total net number of votes (2 ms)

// ● totalVotes › returns the total net number of votes

//   ReferenceError: totalVotes is not defined

//     34 | describe("totalVotes", ()=>{
//     35 |     it("returns the total net number of votes", ()=>{
//   > 36 |         expect(totalVotes(votes1)).toEqual(11)
//        |         ^
//     37 |         expect(totalVotes(votes2)).toEqual(-31)
//     38 |     })
//     39 | })

//     at Object.expect (code-challenges.test.js:36:9)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total
// Snapshots:   0 total
// Time:        0.582 s

const votes1 = {upVotes: 13, downVotes: 2}
// Expected output: 11
const votes2 = {upVotes: 2, downVotes: 33}
// Expected output: -31

//PSEUDO CODE
//1. Create a function that takes an object as an argument
//2. Read the values from each key using obj.key
//3. subtract the value of upVotes from downVotes
//4. return that new value as a number

// b) Create the function that makes the test pass.

const totalVotes = (obj) => {
    numberUpVotes = obj.upVotes
    numberDownVotes = obj.downVotes
    netVotes = numberUpVotes - numberDownVotes
    return netVotes
}

// PASSING TEST:
// PASS  ./code-challenges.test.js
// totalVotes
//   ✓ returns the total net number of votes (3 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.597 s, estimated 1 s
// Ran all test suites.
// ✨  Done in 1.94s.


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// describe("noDupesArray", ()=>{
//     it("return an array with no duplicate values from two arrays as given input.", ()=>{
//         expect(noDupesArray(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
//     })
// })

// GOOD FAILURE:
// FAIL  ./code-challenges.test.js
// totalVotes
//   ✓ returns the total net number of votes (2 ms)
// noDupesArray
//   ✕ return an array with no duplicate values from two arrays as given input. (1 ms)

// ● noDupesArray › return an array with no duplicate values from two arrays as given input.

//   ReferenceError: noDupesArray is not defined

//     105 | describe("noDupesArray", ()=>{
//     106 |     it("return an array with no duplicate values from two arrays as given input.", ()=>{
//   > 107 |         expect(noDupesArray(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
//         |         ^
//     108 |     })
//     109 | })
//     110 |

//     at Object.expect (code-challenges.test.js:107:9)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 passed, 2 total
// Snapshots:   0 total
// Time:        0.519 s




const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]


// b) Create the function that makes the test pass.

//PSEUDO CODE
//1. Create a function called noDupesArray that takes in two arrays as inputs
//2. combine both arrays to create a new array using .concat built in method
//3. use .filter to check if the value of the second array occurs more 0 times in the other array
//4. if value is greater than zero it will be excluded from the new array
//5. return new array

const noDupesArray = (array1, array2) => {
    var combinedArray = array1.concat(array2.filter((value)=> array1.indexOf(value) < 0))
    return combinedArray
}

// PASSING TEST:
// PASS  ./code-challenges.test.js
// totalVotes
//   ✓ returns the total net number of votes (1 ms)
// noDupesArray
//   ✓ return an array with no duplicate values from two arrays as given input.

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.425 s, estimated 1 s
// Ran all test suites.
