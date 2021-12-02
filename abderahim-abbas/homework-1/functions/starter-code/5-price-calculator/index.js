/*
  Write code to to calculate a customer's total cost in pounds based on product price, tax rate, shipping cost,
  and the currency they're using for the purchase (pounds or euros).

  * Create a function called calcTotal() that accepts parameters for all the
    necessary information.
  * Start your calculations by converting the price from euro to pounds if
    necessary (HINT: use a conditional statement, and call the
    convertEurosToPounds() function.)
  * Calculate and store the total tax (price times tax).
  * Calculate and store the total cost (the total of price, total tax, and shipping).
  * Convert the total cost to two decimal places (HINT: look up the toFixed() method).
  * Log the total cost to the console, with text describing what the value is.
  * Call the function with the arguments 85.43 for price, 0.0825 for tax rate,
    and 7.95 for shipping cost, and pounds as the currency, and verify that the
    values returned are realistic.
  * Call the function again with the same values but changing the currency to
    euro and verify that you get a different, but realistic, result.

  BONUS 1: Convert your function to assume a currency of 'pounds' by default.
  No changes, because there are test statement.
  BONUS 2: Convert your function to an arrow function.

*/

'use strict';

// complete the calcTotal() function below:
function calcTotal(currency = 'euros', product_price, tax_rate, shipping_cost) {
    console.log(`Cost based on ${ currency.toUpperCase() } curreny. Product price: ${product_price}, tax rate ${tax_rate} and shipping cost ${shipping_cost}`)
    const price_time_tax = product_price * tax_rate
    const total_cost = price_time_tax + product_price + shipping_cost
    return currency === 'euros' ? total_cost.toFixed(2): convertEurosToPounds(total_cost)
    // return currency === 'euros' ? total_cost.toFixed(2): EurosConvertedToPounds(total_cost) // BONUS
}

// accepts a price in euros and returns the same price in pounds
function convertEurosToPounds(euroPrice) {
    const change_rate = 0.85
    const pounds_price = euroPrice * change_rate
    return pounds_price.toFixed(2)
}

// Bonus : convert to arrow function
const EurosConvertedToPounds = (euroPrice) => (euroPrice * 0.85).toFixed(2)


// add statements below to call your function
console.log('\n')
console.log(`Total Costs : ${calcTotal('pounds', 85.43, 0.0825, 7.95)}`)
console.log('\n')
console.log(`Total Costs : ${calcTotal('euros', 85.43, 0.0825, 7.95)}`)
console.log('\n')