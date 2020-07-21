export default class StartMenu {
  constructor(game) {
    this.game = game;
    this.startMenu = document.getElementById('start-menu');
    this.display = this.display.bind(this);
    this.keyDown = this.keyDown.bind(this);
  }

  display() {
    this.startMenu.classList.remove('hidden');
    document.addEventListener('keydown', this.keyDown);
  }
  
  keyDown(e) {
    if (e.code === 'Enter') {
      this.startMenu.classList.add('hidden')
      document.removeEventListener('keydown', this.keyDown);
      this.game.ctx.clearRect(0, 0, 928, 793);
      this.game.start(e.timeStamp);
    }
  }
}