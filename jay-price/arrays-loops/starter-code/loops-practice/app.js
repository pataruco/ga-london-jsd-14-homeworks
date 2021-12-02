// for loop
// let i = 0;     initialisation
// i < 5;         condition
// i++;           expression

//intialisation sets i/index to start at 0
//condition says i is less than 5, keepin running until i is not less than 5
//expression is incrementing the number stored in i by 1 each time it loops

for (let i = 0; i < 5; i++) {
  console.log('Loop' + i);
}

// for loop with break
// if statement states that if i equals 3 then break the loop.
// for loop with break

for (let i = 0; i < 5; i++) {
  console.log('Scoop' + i);
  if (i === 3) break;
}

// for loop using length of array as condition
// condition is being set by getting the variable names and using the method length to check how many items are in the array

const names = ['john', 'bob', 'mary', 'joe'];

for (let i = 0; i < names.length; i++) {
  console.log('Toob' + i);
}

// for loop assigning strings from array to each iteration
// I think this is whats called deconstruction, what is happening is that in
// the console is logging variable names which contains an array and
// then on each loop it gets the information in the index positon
//

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// for each loop
// for each is taking each value of from the array and assigning it to the variable of name
for (name of names) {
  console.log(name);
}

// also works without curly braces on one line
for (name of names) console.log(name);

// for in loop
// this is creating a var called key and iterating through the user object
// assigning each value to key until its finished.

const user = { firstName: 'John', lastName: 'Doe', age: 43 };

for (key in user) console.log(user[key]);

// While Loop
// run this loop while the condition is true
let k = 0;
while (k < 10) {
  console.log(k);
  k++;
}

// While loop with a continue
// continue pauses the loop and then continues afterwards (not logging value of the if statement)

let j = 15;
while (j < 20) {
  j++;
  if (j === 17) continue;
  console.log(j);
}

// do while loop
// Do loops will always run once first before checking the while statement

let l = 40;
do {
  l++;
  if (l === 45) continue;
  console.log(l);
} while (l < 50);

// for each
//

//
