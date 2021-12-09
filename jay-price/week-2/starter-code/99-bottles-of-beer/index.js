/*
  Write code that prints the lyrics to "99 Bottles of Beer on the Wall" to the
  console.
  If you're unfamiliar with the song, you can find the lyrics here:
  http://www.99-bottles-of-beer.net/lyrics.html.

  Be sure that all of your output includes proper spacing (no words or values
  running into each other).

  Hint: You can make your output appear on multiple lines by using the string '\n'
  to insert a line break.

  BONUS: For an extra challenge, improve this code to print "1 bottle" rather
  than "1 bottles" as well as the special lyrics for no bottles remaining (Hint:
  read up on if/else conditional statements at https://mdn.io/if...else).
*/

'use strict';

// 99 bottles of beer on the wall, 99 bottles of beer.
// Take one down and pass it around, 98 bottles of beer on the wall.

// v1;
// for (let i = 99; i > 0; i--) {
//   let newCount = i - 1;
//   console.log(
//     `${i} bottles of beer. ${i} bottles of beer.\nTake one down and pass it around, ${newCount} bottles of beer on the wall.`,
//   );
// }

// for (let i = 99; i > 0; i--) {
//   let newCount = i - 1;
//   console.log(
//     `${i} bottles of beer. ${i} bottles of beer.\nTake one down and pass it around, ${newCount} bottles of beer on the wall.`,
//   );

// v2 - decided to create variables for the words, seemed cleaner

// for (let i = 99; i > 0; i--) {
//   let newCount = i - 1;

//   if (i === 1)
//     console.log(
//       `${i} bottle of beer. ${i} bottle of beer.\nTake one down and pass it around, ${newCount} bottles of beer on the wall.`,
//     );
//   else
//     console.log(
//       `${i} bottles of beer. ${i} bottles of beer.\nTake one down and pass it around, ${newCount} bottles of beer on the wall.`,
//     );
// }

// V3 - Added in if statemnet for 0 bottles line in the song

for (let i = 99; i >= 0; i--) {
  let newCount = i - 1;
  if (i === 1) {
    console.log(
      `${i} bottle of beer. ${i} bottle of beer.\nTake one down and pass it around, ${newCount} bottles of beer on the wall.`,
    );
  } else if (i === 0) {
    let i = 99;
    console.log(
      `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, ${i} bottles of beer on the wall.`,
    );
  } else {
    console.log(
      `${i} bottles of beer. ${i} bottles of beer.\nTake one down and pass it around, ${newCount} bottles of beer on the wall.`,
    );
  }
}
