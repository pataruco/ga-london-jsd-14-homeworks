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

let q1 = ['image.png', 'image2.png', 'image3.png'];
console.log('Question 1: ', q1);

/**
 * Question 2
 * Create a variable called q2, and set its value to the value of the first
 * array element from Question 1.
 */

let q2 = q1[0];

let [image1, image2] = q1;

console.log('Question 2: ', q2);

console.log({ image1, image2 });

/**
 * Question 3
 * Create a variable called q3 and store the length of the q1 array (number
 * of elements in the array) in your new variable.
 */

let q3 = q1.length;
console.log('Question 3: ', q3);

let students = ['Alex', 'Jay', 'MK'];
console.log(`Question 3: ${students.pop()}`);

/**
 * Question 4
 * Create a variable called q4, and store the last element of the q1 array
 * in your new variable.
 * Hint: How can we identify the index number of the last element in the array?
 */

let q4 = students[students.length - 1];
console.log('Question 4: ', q4);

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

const numbers = [1, 2, 3, 4];

let sum = 0;
numbers.forEach(function (number) {
  sum = sum + number;
  console.log({'Before the addition ', sum, number });
})

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

// const hundreths = [100, 200, 300, 400, 500];

// function addFive(item) {
//   return item + 5;
// }

// hundreths = hundreths.forEach(addFive);

// console.log('hundreths');

const hundredths = [100, 200, 300];
hundredths.forEach(function(element, index) { 
  hundredths[index] = element + 5;
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

const q7 = numbers.maps(function (item) {
  return item + 1;
});

console.log('Question 7: ', q7);

/**
 * BONUS:
 * Question 8
 * Create a variable called q8. Use the reduce method to set the value of q8 to
 * the total of all the values stored in the numbers array.
 * (Hint: see https://mdn.io/reduce)
 */

let q8 = numbers.reduce(function (accumulator, number) {
  return accumulator + number;
}, 0);

console.log('Question 8: ', q8);
