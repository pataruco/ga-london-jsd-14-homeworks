// 'use strict';

//   Write code that generates random addresses
//   Each time you run it, your program should log
//   a new randomly-generated address to the console.

//   Step 1:
//     Create arrays that contain dummy data for each of the following:
//     door number, street name, city name, and post code

const doorNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const streetName = [
  'Abbey Road',
  'Birchtree Terrace',
  'Courtney Street',
  'Dunelm Close',
  'Eaton Road',
  'Francis Street',
];
const cityName = [
  'Swansea',
  'Cardiff',
  'Paris',
  'London',
  'Hamburg',
  'Glasgow',
];

const postCode = ['SA1 9HN', 'BK4 2AH', 'GH7 7JK', 'HKL K2D'];

// const randomCity = '';

// v1 found a youtube video to help with this one,  but i think I understand whats going on
//

// this function allows us to get a random number from 0 to a limit ()
function randomInt(limit) {
  return Math.floor(Math.random() * Math.floor(limit));
}

// gives random item from any array passed in (works out the length of array as the limit )
function random(choices) {
  var index = randomInt(choices.length);
  return choices[index];
}

let randomCity = random(cityName);
let randomPostCode = random(postCode);
let randomDoorNumber = random(doorNumbers);
let randomStreetName = random(streetName);

let randomAddress = `${randomDoorNumber}, ${randomStreetName}, ${randomCity}, ${randomPostCode}`;

console.log(randomAddress);

//   Step 2:
//     Write code that randomly selects one item from each of these arrays, uses
//     the selected values to construct a string containing a random address, and
//     then logs the result to the console.

//     HINT: You will need to use methods in JavaScript's Math object
//     (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

//   Step 3:
//     Save your work, run the program in Node, and verify
//     that a random address is logged.

//   Step 4:
//     Rerun the program again and verify that a different random address is logged.

//   Example output:
//     12 Dolphin Street, London , W11 2SE
