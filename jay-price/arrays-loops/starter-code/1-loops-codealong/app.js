console.log('working!');

const numbersNames = ['one', 'two', 'three', 'four', 'five'];

const thingsInMyFridge = ['pizza', 'eggs', 'milk', 'beers', 'ketchup'];

/**
 * .push
 */

console.log({
  thingsInMyFridge,
});

thingsInMyFridge.push('cheese');
console.log({
  push: thingsInMyFridge,
});

/**
 * .unshift
 */

thingsInMyFridge.unshift('jay');
console.log({
  thingsInMyFridge,
});

/**
 * .pop
 */

thingsInMyFridge.pop();
console.log({
  thingsInMyFridge,
});

/**
 * .shift
 */

thingsInMyFridge.shift();
console.log({
  thingsInMyFridge,
});

/**
 * .splice
 */

thingsInMyFridge.splice(0, 2);
console.log({
  thingsInMyFridge,
});

/**
 * .for
 */

for (
  let iterator = 0;
  thingsInMyFridge.length > iterator;
  iterator = iterator + 1
) {
  console.log(thingsInMyFridge[iterator]);
}
