console.log('working!');

const numbersNames = ['one', 'two', 'three', 'four', 'five'];
console.log(numbersNames)
const thingsInMyFridge = ['pizza', 'eggs', 'milk', 'beers', 'ketchup'];
console.log(thingsInMyFridge)

/**
 * .push
 */
console.log("The push() method adds one or more elements to the end of an array and returns the new length of the array.")
let numbersNames1 = numbersNames.slice() //take copy of numbersNames
let number = 'six'
numbersNames1.push(number)
console.log("Push ", number, "on numbersNames:", numbersNames1)
let count = numbersNames1.push('seven')
console.log("Push return the new length of array", count)

/**
 * .unshift
 */

console.log("The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.")
number = 'zero'
console.log(`Unshift ${number} on numberNames: ${numbersNames1.unshift(number)}`)
console.log(numbersNames1)

/**
 * .pop
 */
console.log("The pop() method removes the last element from an array and returns that element. This method changes the length of the array.")
numbersNames1.pop()
console.log(`First Pop on numbersNames: ${numbersNames1}`)
numbersNames1.pop()
console.log(`Second Pop on numbersNames: ${numbersNames1}`)

/**
 * .shift
 */

console.log("The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.")
const removed = numbersNames1.shift()
console.log("Removed number:", removed)
console.log(numbersNames1)

/**
 * .splice
 */

console.log("The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice().")
numbersNames1.splice(0,0,'zero')
console.log(numbersNames1)

/**
 * .for
 */
console.log("Given that for...in is built for iterating object properties, not recommended for use with arrays.")
for (const key in numbersNames) {
    console.log(`${key} => ${numbersNames[key]}`)
}
