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

"use strict";
for (let i = 100; i--; i === 1) {
    if (i != 0) {
        i === 1 ? console.log(`${i} bottle of Beer on the wall, ${i} bottles of beer.\n Take one down and pass it around, no more bottles of beer on the wall.`) : console.log(`${i} bottle of Beer on the wall, ${i} bottles of beer.\n Take one down and pass it around, ${i - 1} bottles of beer on the wall.`);
    } else {
        console.log("No more bottles of beer on the wall, no more bottles of beer.\n Go to the store and buy some more, 99 bottles of beer on the wall.")
    }
}