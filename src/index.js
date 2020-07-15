import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('gameDisplay');
  canvas.width = 1000;
  canvas.height = 600;
  const ctx = canvas.getContext('2d');

  const game = new Game(ctx);
  game.start();

  let count = 0;
  count++;
  if (count === 10000000) {
    game.stop();
  }
});

// canvas.addEventListener('click', () => {
  //   console.log("I'm clicking the canvas")
  //   window.addEventListener('keydown', controller.move);
  //   window.addEventListener('keyup', controller.idle);
  // });

  // window.addEventListener('blur', () => {
  //   console.log('Canvas is blurred')
  //   window.removeEventListener('keydown', controller.move);
  //   window.removeEventListener('keyup', controller.idle);
  // });