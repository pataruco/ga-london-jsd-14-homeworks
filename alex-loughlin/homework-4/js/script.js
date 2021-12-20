const clap = document.querySelector('.clap-sound');
const hihat = document.querySelector('.hihat-sound');
const kick = document.querySelector('.kick-sound');
const openhat = document.querySelector('.openhat-sound');
const boom = document.querySelector('.boom-sound');
const ride = document.querySelector('.ride-sound');
const snare = document.querySelector('.snare-sound');
const tom = document.querySelector('.tom-sound');
const tink = document.querySelector('.tink-sound');

function keyPressed(event) {
  let keyNumber = event.keyCode;

  let audioSource = document.querySelector(
    'audio[data-key="' + keyNumber + '"]',
  );
  audioSource.play();

  // I have commented out the code below to show that I solved the problem with If/Else statments like the readme said.
  // I left it just incase you wanted it to be solved only with if/else.
  // Once it was working I thought there was a better/less verbose way to solve the same issue.

  // if (keyNumber == 65) {
  //   clap.play();
  // } else if (keyNumber == 83) {
  //   hihat.play();
  // } else if (keyNumber == 68) {
  //   kick.play();
  // } else if (keyNumber == 70) {
  //   openhat.play();
  // } else if (keyNumber == 71) {
  //   boom.play();
  // } else if (keyNumber == 72) {
  //   ride.play();
  // } else if (keyNumber == 74) {
  //   snare.play();
  // } else if (keyNumber == 75) {
  //   tom.play();
  // } else if (keyNumber == 76) {
  //   tink.play();
  // }
}

document.addEventListener('keydown', keyPressed);
