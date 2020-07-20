export default class GameOverScreen {
  constructor(ctx, game) {
    this.ctx = ctx;
    this.game = game;
    this.image = new Image();
    this.image.src = './assets/GameOver.png';
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
    this.keyDown = this.keyDown.bind(this);
  }

  keyDown(e) {
    if (e.code === 'KeyA' || e.code === 'KeyD') {
      const choice = this.choice === 'yes' ? 'no' : 'yes';
      this.changeAnimation(choice);
    } else if (e.code === 'Enter') {
      if (this.choice === 'yes') {
        this.game.start();
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
  }

  animate() {
    const { ctx, srcX, width, height } = this;

    this.updateFrame();
    ctx.drawImage(this.image,
      srcX, 0, width, height,
      176, 0, width, height
    );
  }
}