'use strict';
/*
  Write code that generates random addresses
  Each time you run it, your program should log
  a new randomly-generated address to the console.

  Step 1:
    Create arrays that contain dummy data for each of the following:
    door number, street name, city name, and post code
*/

 let doorNumber = ['24', '2', '17', '467']
 let streetName = ['Kingsbury', 'Little Oaks', 'Davey', 'Avenue'];
 let cityName = ['Birmingham', 'Nottingham', 'London', 'Leicester'];
 let postCode = ['B20', 'B24', 'B36', 'L20'];

/*
  Step 2:
    Write code that randomly selects one item from each of these arrays, uses
    the selected values to construct a string containing a random address, and
    then logs the result to the console.

    HINT: You will need to use methods in JavaScript's Math object
    (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)

*/


const randomNumber = Math.floor(Math.random() * doorNumber.length);
const randomStreet = Math.floor(Math.random() * streetName.length);
const randomCity = Math.floor(Math.random() * cityName.length);
const randomCode = Math.floor(Math.random() * postCode.length);
console.log(`${doorNumber[randomNumber]} ${streetName[randomStreet]}, ${cityName[randomCity]}, ${postCode[randomCode]}`);

/*

  Step 3:
    Save your work, run the program in Node, and verify
    that a random address is logged.

  Step 4:
    Rerun the program again and verify that a different random address is logged.

  Example output:
    12 Dolphin Street, London , W11 2SE
*/
