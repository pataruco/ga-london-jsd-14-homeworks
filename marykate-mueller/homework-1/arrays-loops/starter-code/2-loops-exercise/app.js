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

const exponent
exponent = 10;
console.log('Step 1: ' exponent);

/**
 * Step 2
 * Create a `for` loop that iterates starting at 1 and ending at the value of
 * the `exponent` variable.
 **/

exponent.forEach(+1);
console.log('Step 2: ', exponent);

/**
 * Step 3
 * Within the `for` loop, do the following:
 * - calculate 2 to the power of the current value of the iterator
 *   (Hint: https://mdn.io/pow)
 * - log the result to the console
 **/


for (let exponent = 0; exponent < 20; exponent++) {
    console.log('Step 3: ',)
}

//or would it be for statement 3, exponent*2) ??? I'm honestly terrible at math and don't understand "2 to the power of"
//or.... is it:

for (let exponent = 0; exponent < 20; Math.pow(2, exponent)) {
  console.group('Step 3: ',)
  
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

?

/**
 * BONUS 1: Rewrite your code to allow a user to enter the exponent value,
 * rather than hard-coding it into your program. (Hint: Read up on the
 * `window.prompt` method at https://mdn.io/prompt.)
 **/

/**
 * BONUS 2: Rewrite your code to use a `while` loop rather than a `for` loop.
 * (https://mdn.io/while)
 **/

let exponent = 0
while (exponent < 3) {
  exponent++;
 }

/**
 * BONUS 3: Rewrite your code to use a `do/while` loop rather than a `for` loop
 * or `while` loop. (https://mdn.io/do...while)
 **/


let exponent = 0

for (exponent; exponent < 0; exponent++ <= 10)) {
????console.group('Step 3: ',)
     
}