'use strict';
console.log('working!');

// 1. create a variable called firstName and assign it the value of your first name
const firstName = 'Jay';

// 2. print firstName to the console
console.log(firstName);

// 3. Create a variable called lastName and assign it the value of your last name
const lastName = 'Price';

// 4. print lastName to the console
console.log(lastName);

// 5. create a variable called age and assign it the value of your age (or any number you like)
let age = 33;

// 6. print a string to the console that reads: 'My name is [first name] [last name] and my favourite number is [age]'

// Old Way
console.log(
  'My name is ' +
    firstName +
    ' ' +
    lastName +
    ' and my favourite number is ' +
    age,
);

// New Way
console.log(
  `My name is ${firstName} ${lastName} and my favourite number is ${age}`,
);

// 7. create a variable X and assign it any number
let x = 2;

// 8. create a variable Y and assign it any number
let y = 5;

// 9. print to the console the total of X and Y
console.log(x + y);

// 10. print to the console the total of X subtracted from Y
console.log(y - x);

// 11. print to the console the total of X multiplied by Y
console.log(x * y);

// 12. create a variable called changeNumber and assign it the number 5 and print it to the console
let changeNumber = 5;
console.log(changeNumber);

// 13. re-assign the value of changeNumber to 300 and print it to the console
changeNumber = 300;
console.log(changeNumber);

// 14. uncomment the variables below, concatonate them and print the result to the console

const fruit = 'Oranges';
const vegetable = 'potatos';
const drink = 'cola';

console.log(`${fruit} ${vegetable} ${drink}`);
