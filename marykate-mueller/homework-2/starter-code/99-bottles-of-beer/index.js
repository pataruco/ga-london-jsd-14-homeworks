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

var word = 'bottles';
var count = 99;
while (count > 0) {
  console.log(count + ' ' + word + ' of beer on the wall');
  console.log(count + ' ' + word + ' of beer,');
  console.log('Take one down, pass it around,');
  count = count - 1;
  if (count > 1) {
    console.log(count + ' ' + count + ' of beer on the wall.');
  } else if (count == 1) {
    console.log(count + ' bottle of beer on the wall.');
  } else {
    console.log('No more ' + word + ' of beer on the wall.');
  }
}
