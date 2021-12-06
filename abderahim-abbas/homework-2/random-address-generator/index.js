"use strict";
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
*/

const door_number = [50, 51, 52, 53, 54, 55];
const street_name = ["rue du square", "rue le Notre", "rue du Bois", "rue Marcel Hirbec", "rue Pierre Curie"];
const city_name = ["Bois dArcy", "Montigny - le - Bretonneux", "Plaisir", "Saint - Cyr", "Fontenay"];
const post_code = [78390, 78180, 78192, 78188, 78120];

function choice(index = 5) {
    return Math.floor(Math.random() * index);
}

const door_number_choosen = choice(door_number.length);
const street_name_choosen = choice(street_name.length);
const city_name_choosen = choice(city_name.length);
const post_code_choosen = choice(post_code.length);
console.log(`Random Indexes : ${door_number_choosen}, ${street_name_choosen} ${city_name_choosen} ${post_code_choosen}`);
console.log(`Random Address : ${door_number[door_number_choosen]}, ${street_name[street_name_choosen]} ${city_name[city_name_choosen]} ${post_code[post_code_choosen]}`);



