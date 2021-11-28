'use strict';
console.log('working!');

// 1. create a variable called firstName and assign it the value of your first name

let firstName = 'Alex';

// 2. print firstName to the console

console.log(firstName);

// 3. Create a variable called lastName and assign it the value of your last name

let lastName = 'Loughlin';

// 4. print lastName to the console

console.log(lastName);

// 5. create a variable called age and assign it the value of your age (or any number you like)

let age = 28;

// 6. print a string to the console that reads: 'My name is [first name] [last name] and my favourite number is [age]'

let message = `My name is ${firstName} ${lastName} and my favourite number is ${age} `;
console.log(message);

// 7. create a variable X and assign it any number

let X = 28;

// 8. create a variable Y and assign it any number

let Y = 18;

// 9. print to the console the total of X and Y

let total = X + Y;
console.log(total);

// 10. print to the console the total of X subtracted from Y

let subtracted = X - Y;
console.log(subtracted);

// 11. print to the console the total of X multiplied by Y

let multiply = X * Y;
console.log(multiply);

// 12. create a variable called changeNumber and assign it the number 5 and print it to the console

let changeNumber = 5;
console.log(`ChangeNunber = ${changeNumber}`);

// 13. re-assign the value of changeNumber to 300 and print it to the console

changeNumber = 300;
console.log(`ChangeNunber = ${changeNumber}`);

// 14. uncomment the variables below, concatonate them and print the result to the console

const fruit = 'Oranges';
const vegetable = 'potatos';
const drink = 'cola';

let result = fruit.concat(' ', vegetable, ' ', drink);
console.log(result);
