export default class GameOverScreen {
  constructor(ctx, game) {
    this.ctx = ctx;
    this.game = game;
    this.alpha = 0;
    this.image = new Image();
    this.image.src = 'assets/GameOver.png';
    this.width = 576;
    this.height = 432;
    this.srcX = 0;
    this.choice = 'yes';
    this.frameIndex = 0;
    this.frameSets = {
      yes: [
        [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0],
        [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1], [0, 1]
      ],
      no: [
        [0, 2], [0, 2], [0, 2], [0, 2], [0, 2], [0, 2], [0, 2], [0, 2], [0, 2],
        [0, 3], [0, 3], [0, 3], [0, 3], [0, 3], [0, 3], [0, 3], [0, 3], [0, 3]
      ]
    }
    this.display = this.display.bind(this);
    this.keyDown = this.keyDown.bind(this);
  }

  display() {
    document.addEventListener('keydown', this.keyDown);
  }

  keyDown(e) {
    if (e.code === 'KeyA' || e.code === 'KeyD') {
      const choice = this.choice === 'yes' ? 'no' : 'yes';
      this.changeAnimation(choice);
    } else if (e.code === 'Enter') {
      this.alpha = 0;
      document.removeEventListener('keydown', this.keyDown);
      if (this.choice === 'yes') {
        this.game.start(e.timeStamp);
      } else {
        this.game.startMenu.display();
      }
    }
  }
  
  changeAnimation(choice) {
    if (this.choice !== choice) {
      this.frameIndex = -1;
      this.choice = choice;
    }
  }

  updateFrame() {
    const { choice, frameSets, width } = this;
    this.frameIndex = (this.frameIndex + 1) % frameSets[choice].length;
    const [_, xInd] = frameSets[choice][this.frameIndex];
    this.srcX = xInd * width;
    this.alpha += this.alpha * 0.10 || .05;
    if (this.alpha > 1) {
      this.alpha = 1;
    }
  }
  
  animate() {
    const { ctx, srcX, width, height } = this;

    this.updateFrame();
    this.ctx.globalAlpha = this.alpha;
    ctx.drawImage(this.image,
      srcX, 0, width, height,
      176, 180.5, width, height
    );
  }
}