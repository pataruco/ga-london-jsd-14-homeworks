'use strict';
/*
  Write code that generates random addresses
  Each time you run it, your program should log
  a new randomly-generated address to the console.

  Step 1:
    Create arrays that contain dummy data for each of the following:
    door number, street name, city name, and post code

  Step 2:
    Write code that randomly selects one item from each of these arrays, uses
    the selected values to construct a string containing a random address, and
    then logs the result to the console.

    HINT: You will need to use methods in JavaScript's Math object
    (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

  Step 3:
    Save your work, run the program in Node, and verify
    that a random address is logged.

  Step 4:
    Rerun the program again and verify that a different random address is logged.

  Example output:
    12 Dolphin Street, London , W11 2SE

  Math.random();
*/

const doorNumber = ['1', '2', '3', '4', '5', '6', '7'];
const streetName = [
  'Tremlett Way',
  'Seven Sisters Road',
  'Gloucester Court',
  'Stamford Buildings',
  'Hendon Way',
];
const cityName = ['London', 'Lisburn', 'Manchester', 'Liverpool', 'Belfast'];
const postcodeList = ['N195JX', 'BT266HD', 'N77PL', 'W81UY'];

function randomAddress(doorNumber, streetName, cityName, postcode) {
  let door = doorNumber[Math.floor(Math.random() * doorNumber.length)];
  let street = streetName[Math.floor(Math.random() * streetName.length)];
  let city = cityName[Math.floor(Math.random() * cityName.length)];
  let addressPostcode =
    postcodeList[Math.floor(Math.random() * postcodeList.length)];
  console.log(`${door} ${street}, ${city}, ${addressPostcode}`);
}

randomAddress(doorNumber, streetName, cityName, postcodeList);
