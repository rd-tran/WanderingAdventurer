export default class Background {
  constructor(ctx, game) {
    this.ctx = ctx;
    this.game = game;
    this.layers = [
      {xPos: 0, speed: -8, alpha: 0.70, image: new Image()},
      {xPos: 0, speed: -7, alpha: 0.95, image: new Image()},
      {xPos: 0, speed: -7, alpha: 0.70, image: new Image()},
      {xPos: 0, speed: -6, alpha: 0.70, image: new Image()},
      {xPos: 0, speed: -5, alpha: 0.70, image: new Image()},
      {xPos: 0, speed: -4, alpha: 0.70, image: new Image()},
      {xPos: 0, speed: -3, alpha: 0.70, image: new Image()},
      {xPos: 0, speed: -3, alpha: 0.70, image: new Image()},
      {xPos: 0, speed: -2, alpha: 0.70, image: new Image()},
      {xPos: 0, speed: -1, alpha: 0.70, image: new Image()}
    ]
    this.layers[0].image.src = './assets/background/layer1.png';
    this.layers[1].image.src = './assets/background/layer2.png';
    this.layers[2].image.src = './assets/background/layer3.png';
    this.layers[3].image.src = './assets/background/layer4.png';
    this.layers[4].image.src = './assets/background/layer5.png';
    this.layers[5].image.src = './assets/background/layer6.png';
    this.layers[6].image.src = './assets/background/layer7.png';
    this.layers[7].image.src = './assets/background/layer8.png';
    this.layers[8].image.src = './assets/background/layer9.png';
    this.layers[9].image.src = './assets/background/layer10.png';
    this.width = 1856;
    this.height = 793;
  }

  animate() {
    const { ctx, width, height } = this;

    for (let i = this.layers.length - 1; i >= 0; i--) {
      if (this.game.gameOver) {
        this.ctx.globalAlpha = this.layers[i].alpha
      }

      ctx.drawImage(this.layers[i].image,
        this.layers[i].xPos, 0, width, height
      );

      if (this.game.gameOver) {
        if (this.layers[i].speed < 0) {
          this.layers[i].speed =
            this.layers[i].speed - (this.layers[i].speed * .05);
          if (this.layers[i].speed > 0) {
            this.layers[i].speed = 0;
          }
        }
      }
      
      this.layers[i].xPos += this.layers[i].speed;
      if (this.layers[i].xPos <= -(width/2)) {
        this.layers[i].xPos = 0;
      }
    }
  }
}