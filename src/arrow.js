export default class Arrow {
  constructor(player, ctx) {
    this.ctx = ctx;
    this.player = player;
    this.x = player.x + 50;
    this.y = player.y + 50;
    this.speed = 30;
    this.image = new Image();
    this.image.src = './assets/arrow.png';
    this.width = 48;
    this.height = 21;
    // this.updateFrame.bind(this);
    // this.animate.bind(this);
  }

  updateFrame() {
    this.x += this.speed;
  }

  animate() {
    const { ctx, image, width, height } = this;

    ctx.drawImage(image,
      0, 0, width, height,
      this.x, this.y, width, height
    );
    this.updateFrame();
  }
}