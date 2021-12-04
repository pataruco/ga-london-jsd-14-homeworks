// Relying on your newfound knowledge of loops, combine loops and if/else statements together and incrementally build the common fizzbuzz loop.

// - In the loop, every time a number is divisible by **3**, instead of logging the number itself, the word "fizz" should appear.
// - If the number is divisible by  **5**, the word "buzz" should be logged.
// - If the number is divisible by both **3** and  **5**, then the word "fizzbuzz" should be logged.

// Follow the steps below.

'use strict';
// ##### Step 1:
// Construct a for loop that iterates through, and `console.log()`'s out, numbers 1 - 100.

const numbers = [''];
for (let i = 0; i <= 100; i++) 
  console.log(i);


// ##### Step 2:
// Add an `if/else` statement that logs the string `"fizz"` if the value being iterated over is divisible by `3`; otherwise, log out the value.

i = 0;
for (let i = 0; i <= 100; i++) {
  if (isMultipleOfThree(i)) {
    console.log("fizzzzzz");
  }
}

// I know this is wrong, I know it's only showing Fizz. No idea how to fix :'(
  //i also tried putting the else statement right under the if, to try and make it so that if its false, it shows the i, but no luck. 



// ##### Step 3:
// Add an `else if` clause that logs the string `"buzz"` if the value being iterated over is divisible by `5`.

i = 0;
for (let i = 0; i <= 100; i++) {
  if (isMultipleOfThree(i)) {
    console.log("fizzzzzz");
  }
}
i = 0;
for (let i = 0; i <= 100; i++) {
  else if (isMultipleOfFive(i)) {
    console.log("buzzzzzzz");
  }
}

// ##### Step 4:
// Add an additional `else if` clause that logs the string `"fizzbuzz"` if the value being iterated over is divisible by both `3` and `5`.
i = 0;
for (let i = 0; i <= 100; i++) {
  if (isMultipleOfThreeorFive(i)) {
    console.log("fizzzzzzbuzzzz");
  }
}