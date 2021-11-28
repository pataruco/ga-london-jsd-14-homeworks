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

 for(let i = 1; i <= exponent; i++) {
  console.log(i);
 }

/**
 * Step 3
 * Within the `for` loop, do the following:
 * - calculate 2 to the power of the current value of the iterator
 *   (Hint: https://mdn.io/pow)
 * - log the result to the console
 **/

for(let i = 1; i <= exponent; i++) {
  let answer =  Math.pow(i, 2); 
  console.log(answer);
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

 for(let i = 1; i <= exponent; i++) {
  console.log(`Calculating 2 to the power of ${exponent}`);
  let answer =  Math.pow(2, i); 
  console.log(`2 to the power of ${i} = ${answer}`);
}

/**
 * BONUS 1: Rewrite your code to allow a user to enter the exponent value,
 * rather than hard-coding it into your program. (Hint: Read up on the
 * `window.prompt` method at https://mdn.io/prompt.)
 **/

const addNumber = Number(window.prompt("Type a number"));
let exponentTwo = addNumber;

for(let i = 1; i <= exponentTwo; i++) {
 console.log(`Calculating 2 to the power of ${exponentTwo}`);
 let answer =  Math.pow(2, i); 
 console.log(`2 to the power of ${i} = ${answer}`);
}

/**
 * BONUS 2: Rewrite your code to use a `while` loop rather than a `for` loop.
 * (https://mdn.io/while)
 **/
 console.log('WHILE LOOP!')
 const addNumber2 = Number(window.prompt("Type a number (while loop)"));
 let exponentThree = addNumber2;
 let baseNumber = 1;

 while(baseNumber <= exponentThree) {
  console.log(`Calculating 2 to the power of ${exponentThree}`);
  let iterator = baseNumber++;
  let answerTwo =  Math.pow(2, iterator); 
  console.log(`2 to the power of ${iterator} = ${answerTwo}`);
 }
 

/**
 * BONUS 3: Rewrite your code to use a `do/while` loop rather than a `for` loop
 * or `while` loop. (https://mdn.io/do...while)
 **/
 console.log('DO WHILE LOOP!')
 const addNumber3 = Number(window.prompt("Type a number (do...while loop)"));
 let exponentFour = addNumber3;
 let iter = 1;
 
 do {
  console.log(`Calculating 2 to the power of ${exponentFour}`);
  answerThree = Math.pow(2, iter); 
  console.log(`2 to the power of ${iter} = ${answerThree}`);
  iter = iter + 1;
 } while (iter <= exponentFour);
 