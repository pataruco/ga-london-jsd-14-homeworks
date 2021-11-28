console.log('this works');

/**
 * Arrays
 * Most of your answers should be stored in variables called q1, q2 etc..
 * and the variables printed to the console.
 * See Question 0, which is already completed, for an example.
 */

/*
 * Question 0
 * Create a variable that stores the string "GA JSD Lesson 3 lab".
 */

// This question is already completed for you as an example:
let q0 = 'GA JSD Lesson 3 lab';
console.log('Question 0: ' + q0);

// ____________________________________________________________________________
// SECTION 1: Arrays
// ____________________________________________________________________________

/**
 * Question 1
 * Create a variable called q1. As its value, create an array of image source
 * filenames. Use "image1.png", "image2.png", and "image3.png" as the array
 * values.
 */

let q1 = ["image1.png", "image2.png", "image3.png"];
console.log('Question 1: ' + q1);

/**
 * Question 2
 * Create a variable called q2, and set its value to the value of the first
 * array element from Question 1.
 */

let q2 = q1[0];

let [image1, image2] = q1; // deconstructing (see line 45 for output) 
// this is using variable names and assigning the array 0, 1 )

console.log('Question 2: ' + q2);

console.log({ image1, image2 });
// expected output:
// image1: "image1.png"
// image2: "image2.png"

/**
 * Question 3
 * Create a variable called q3 and store the length of the q1 array (number
 * of elements in the array) in your new variable.
 */

let q3 = q1.length;
console.log('Question 3: ' + q3);
// expected output
// 3 

// .pop --> take last of array
// length -1 

/**
 * Question 4
 * Create a variable called q4, and store the last element of the q1 array
 * in your new variable.
 * Hint: How can we identify the index number of the last element in the array?
 */

let q4 = q1[q1.length - 1];
console.log('Question 4: ' + q4);

// ____________________________________________________________________________
// SECTION 2: Iterating through array elements
// ____________________________________________________________________________

/**
 * Question 5
 * Create a variable called numbers containing an array of numbers using 1, 2, 3,
 * and 4 as values.
 * Create a variable called q5. Set its value to the average of the values in
 * the numbers array. (average = sum of all numbers/number of numbers).
 * Hint: Use a forEach statement to accomplish this.
 */

const numbers = [1, 2, 3, 4]; // total/n = 10 / 4 = 2.5
let sum = 0;

// numbers.forEach(function (number) {
//  console.log("Before ", {sum, number});
//  sum = sum + number;

//  console.log("After ", {sum, number});
// });

function addingNumbers(number, iterationNumber) {
 sum = sum + number;
 console.log("After the addition", {sum, number, iterationNumber});
}

numbers.forEach(addingNumbers);

/**
 * Question 6
 * Create a variable called q6 containing an array of numbers using
 * 100, 200, 300, 400, and 500 as values.
 * Use a forEach function to increase each value by 5, updating the values
 * in the original array. This should result in the original array you created
 * storing the values 105, 205, 305, 405, and 505.
 * (Hint: Look up the index parameter in the forEach documentation at
 * https://mdn.io/forEach#Printing_the_contents_of_an_array)
 */

const q6 = [100, 200, 300, 400, 500];

function addFive(item) {
 console.log(item + 5);
}

const addFiveToArray = q6.forEach(addFive);
console.log(addFiveToArray);

// .map goes through all items in an array but not mutable


const a = [100, 200, 300, 400, 500];
a.forEach((element) => {
    console.log(element + 5);
});


// ____________________________________________________________________________
// SECTION 3: Using other array helper methods
// ____________________________________________________________________________

/**
 * Question 7
 * Create a variable called q7. Set its value to the result of running the
 * map method on the numbers array you created in Question 5, increasing each
 * value by 1.
 * The end result should be a new array stored in the q7 variable with
 * the values 2, 3, 4, and 5.
 */

const q7 = numbers.map(function (item) {
 return item + 1;
})
console.log('Question 7: ', q7);

/**
 * BONUS:
 * Question 8
 * Create a variable called q8. Use the reduce method to set the value of q8 to
 * the total of all the values stored in the numbers array.
 * (Hint: see https://mdn.io/reduce)
 */

const q8 = numbers.reduce((total, amount) => total + amount); 
console.log('Question 8: ', q8);

const q9 = numbers.reduce(function (accumulator, number) {
 return accumulator + number
}, 0);

console.log('Question 9: ', q9);
