export default class Arrow {
  constructor(player, ctx) {
    this.ctx = ctx;
    this.player = player;
    this.x = player.x + 100;
    this.y = player.y + 50;
    this.speed = this.player.runSpeed + 15;
    this.image = new Image();
    this.image.src = './assets/arrow.png';
    this.width = 48;
    this.height = 21;
    this.xHitboxFront = this.x + this.width;
    this.xHitboxBack = this.x + this.width - 10;
    this.yHitboxTop = this.y;
    this.yHitboxBottom = this.y + this.height;
  }

  isOffMap() {
    return this.x >= 928;
  }
  
  isCollideWith(enemy) {
    const topClip = this.yHitboxTop >= enemy.yHitboxTop &&
                    this.yHitboxTop <= enemy.yHitboxBottom;
    const bottomClip = this.yHitboxBottom >= enemy.yHitboxTop &&
                       this.yHitboxTop <= enemy.yHitboxBottom;
    const frontClip = this.xHitboxFront >= enemy.xHitboxFront &&
                      this.xHitboxFront <= enemy.xHitboxBack;
    const backClip = this.xHitboxBack >= enemy.xHitboxFront &&
                     this.xHitboxBack <= enemy.xHitboxBack;
    return (topClip || bottomClip) && (frontClip || backClip);
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