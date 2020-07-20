import Game from './game';

document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('gameDisplay');
  canvas.width = 928;
  canvas.height = 793;
  const ctx = canvas.getContext('2d');

  const game = new Game(ctx);
  game.start();

  let count = 0;
  count++;
  if (count === 10000000) {
    game.stop();
  }
});