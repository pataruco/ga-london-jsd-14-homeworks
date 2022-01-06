/*
1. Element : sounds and keywords
2. Event : keybord keydown
3. Execution : play a correspondant sound
*/

// Sounds
const clapSound = document.querySelector('audio.clap-sound');
const hihatSound = document.querySelector('audio.hihat-sound');
const kickSound = document.querySelector('audio.kick-sound');
const openhatSound = document.querySelector('audio.openhat-sound');
const boomSound = document.querySelector('audio.boom-sound');
const rideSound = document.querySelector('audio.ride-sound');
const snareSound = document.querySelector('audio.snare-sound');
const tomSound = document.querySelector('audio.tom-sound');
const tinkSound = document.querySelector('audio.tink-sound');

// Events

// to play a sound, use function play on sounds objects
// by example : clapSound.play();

window.addEventListener('keydown', (letter) => {
  console.log(letter.key);
  switch (letter.key) {
    case 'A':
      clapSound.play();
    case 'S':
      hihatSound.play();
    case 'D':
      kickSound.play();
    case 'F':
      openhatSound.play();
    case 'G':
      boomSound.play();
    case 'H':
      rideSound.play();
    case 'J':
      snareSound.play();
    case 'K':
      tomSound.play();
    case 'L':
      tinkSound.play();
  }
});
