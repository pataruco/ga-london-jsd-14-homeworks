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

cart.forEach(element => {
  let addedTax = element + salesTax;
  // console.log(addedTax);
  cartWithTax.push(addedTax);
});

/*
 3. Log the value of cartWithTax to the console after it includes all values.
 Be sure to label your output in the console (remember: concatenation!)
*/
console.log('Each item with tax added ' + cartWithTax);
/*
 4. Create a cartTotalWithTax variable and set its value to 0. 
*/
let cartTotalWithTax = 0;
/*
 5. Write a `for` loop to total the values in the cartWithTax array, and assign
 the total as the value of the cartTotalWithTax variable. 
*/
cartWithTax.forEach(element => {
 cartTotalWithTax = cartTotalWithTax + element;
});
/*
 6. Log the cartTotalWithTax variable to the console. Be sure to label your 
 output in the console.
*/

console.log(`Total: ${cartTotalWithTax}`);

// BONUS

/*
 7. Update your code in Step 2 to round each item price with tax to the
 nearest penny. (See https://mdn.io/round)
*/
console.log(Math.ceil(cartTotalWithTax * 100)/100);

/*
 8. Rewrite your code from Steps 1 & 2 using the `array.map()` method. 
 (See https://mdn.io/map)
*/


let cartWithTaxTwo = [];

cart.map(element => {
  let addedTax = element + salesTax;
  // console.log(addedTax);
  cartWithTaxTwo.push(addedTax);
});

console.log(cartWithTaxTwo);