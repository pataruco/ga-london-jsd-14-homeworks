/*
You're adding functionality to a basic website shopping cart. Starting with an
array of prices for the items a user wants to buy, you need to calculate the
price of each item with tax, and then calculate the cart total including tax.
The cart and salesTax variables are already defined for you below.
*/

//The cart variable stores the prices for 3 products selected from an online store.
let cart = [37.49, 8.99, 27.95];

// The salesTax variable stores the local sales tax rate.
let salesTax = 0.0875;

console.log('Cart contents: ' + cart);

// Complete the following:

/*
 1. Create a `cartWithTax` variable with an empty array as its value. 
*/

let cartWithTax = [];

/*
 2. Write a `forEach` loop that calculates the sales tax for each item in the cart 
 array, adds that to the original price of the item, and stores the result in the 
 cartWithTax array.
*/

// v1
// for (item of cart) {
//   taxCalculation = item * (0.0875 / 100);
//   itemTaxTotal = item + taxCalculation;

//   console.log(itemTaxTotal);
// }

//v2
cart.forEach(function (element, index) {
  taxCalculation = element * (0.0875 / 100);
  itemTaxTotal = element + taxCalculation;
  cartWithTax[index] = itemTaxTotal;
});

console.log(cartWithTax);

/*
 3. Log the value of cartWithTax to the console after it includes all values.
 Be sure to label your output in the console (remember: concatenation!)
*/

let [item1, item2, item3] = cartWithTax;
console.log(
  `Items subtotal. Item 1: ${item1}, Item 2: ${item2}, Item 3: ${item3}`,
);

/*
 4. Create a cartTotalWithTax variable and set its value to 0. 
*/

let cartTotalWithTax = 0;
console.log('Cart Total with Tax: ' + cartTotalWithTax);

/*
 5. Write a `for` loop to total the values in the cartWithTax array, and assign
 the total as the value of the cartTotalWithTax variable. 
*/

let sum = cartWithTax.reduce(function (accumulator, item) {
  return accumulator + item;
});

/*
 6. Log the cartTotalWithTax variable to the console. Be sure to label your 
 output in the console.

*/

console.log('Cart Total with Tax: ' + sum);

// BONUS

/*
 7. Update your code in Step 2 to round each item price with tax to the
 nearest penny. (See https://mdn.io/round)
*/

/*
 8. Rewrite your code from Steps 1 & 2 using the `array.map()` method. 
 (See https://mdn.io/map)
*/
