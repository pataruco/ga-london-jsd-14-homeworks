// Element
const clap = document.querySelector('.clap-sound');
const hihat = document.querySelector('audio.hihat-sound');
const kick = document.querySelector('audio.kick-sound');
const openhat = document.querySelector('audio.openhat-sound');
const boom = document.querySelector('audio.boom-sound');
const ride = document.querySelector('audio.ride-sound');
const snare = document.querySelector('audio.snare-sound');
const tom = document.querySelector('audio.tom-sound');
const tink = document.querySelector('audio.tink-sound');

window.addEventListener('keydown', playSound);

// Event
function playSound(event) {
  const key = event.keyCode;
  console.log(key);

  if (key === 65) {
    clap.play();
  } else if (key === 83) {
    hihat.play();
  } else if (key === 68) {
    kick.play();
  } else if (key === 70) {
    openhat.play();
  } else if (key === 71) {
    boom.play();
  } else if (key === 72) {
    ride.play();
  } else if (key === 74) {
    snare.play();
  } else if (key === 75) {
    tom.play();
  } else if (key === 76) {
    tink.play();
  }
}
