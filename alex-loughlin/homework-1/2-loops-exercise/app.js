/**
 * Write code that creates a `for` loop that calculates 2 to a given power, and
 * console.logs each step of the calculation. For instance, when calculating 2
 * to the 10th power (2^10), the for loop should console.log the result of 2^1,
 * then the result of 2^2, etc., until it gets to 2^10.
 **/

/**
 * Step 1
 * Define a variable named `exponent` whose value is 10 (which is the power of
 * 2 that you want to calculate).
 **/

let exponent = 10;

/**
 * Step 2
 * Create a `for` loop that iterates starting at 1 and ending at the value of
 * the `exponent` variable.
 **/

for (let i = 1; i <= exponent; i++) {
  console.log(i);
}

/**
 * Step 3
 * Within the `for` loop, do the following:
 * - calculate 2 to the power of the current value of the iterator
 *   (Hint: https://mdn.io/pow)
 * - log the result to the console
 **/

for (let i = 1; i <= exponent; i++) {
  console.log(Math.pow(i, 2));
}

/**
 * Step 4
 * Add labeling to your console output.
 *  - Before your `for` loop, log the statement 'Calculating 2 to the power of '
 *    plus the value of the `exponent` variable.
 * -  Within your `for` loop, include the text '2 to the power of ' plus the
 *    iterator value, an equal sign, and then the result (for instance, the
 *    first statement logged to the console would be '2 to the power of 1 = 2')
 **/

console.log(`Calculating 2 to the power of ${exponent}`);

for (let i = 1; i <= exponent; i++) {
  let result = Math.pow(i, 2);
  console.log(`2 to the power of ${i} = ${result}`);
}

/**
 * BONUS 1: Rewrite your code to allow a user to enter the exponent value,
 * rather than hard-coding it into your program. (Hint: Read up on the
 * `window.prompt` method at https://mdn.io/prompt.)
 **/

let userExponent = prompt('Please enter the exponent', '10');
let convertedUserExponent = parseInt(userExponent);
console.log(convertedUserExponent);

for (let j = 1; j <= convertedUserExponent; j++) {
  console.log(j);
}
for (let k = 1; k <= convertedUserExponent; k++) {
  console.log(Math.pow(k, 2));
}
console.log(
  `Calculating 2 to the power of the users inputed exponent which ${convertedUserExponent}`,
);

for (let l = 1; l <= exponent; l++) {
  let userResult = Math.pow(l, 2);
  console.log(`2 to the power of ${l} = ${userResult}`);
}

/**
 * BONUS 2: Rewrite your code to use a `while` loop rather than a `for` loop.
 * (https://mdn.io/while)
 **/

/**
 * BONUS 3: Rewrite your code to use a `do/while` loop rather than a `for` loop
 * or `while` loop. (https://mdn.io/do...while)
 **/
