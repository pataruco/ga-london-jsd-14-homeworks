console.log('working!');

const numbersNames = ['one', 'two', 'three', 'four', 'five'];

const thingsInMyFridge = ['pizza', 'eggs', 'milk', 'beers', 'ketchup'];

/**
 * .push --> adds item to the end
 */

thingsInMyFridge.push('cheese');
console.log({
 push: thingsInMyFridge,
});
/**
 * .unshift  --> adds item to the beginning
 */ 

thingsInMyFridge.unshift('addItem');
console.log(thingsInMyFridge);

/**
 * .pop --> removes item
 */
const lastThing = thingsInMyFridge.pop();
console.log(lastThing);

/**
 * .shift --> adds item to the end
 */
thingsInMyFridge.shift('AddToEnd');
console.log(thingsInMyFridge);

/**
 * .splice --> start, elements to remove
 *  ['pizza', 'eggs', 'milk', 'beers', 'ketchup']
 */
thingsInMyFridge.splice(0, 2);
console.log(thingsInMyFridge);
// expected output
// ['milk', 'beers', 'ketchup']


/**
 * .for
 */

for(let i=0; thingsInMyFridge.length > i; i++) {
 console.log(thingsInMyFridge[i])
}
