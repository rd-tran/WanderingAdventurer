export default class Arrow {
  constructor(player, ctx) {
    this.ctx = ctx;
    this.player = player;
    this.x = player.x + this.player.width;
    this.y = player.y + (this.player.height / 2);
    this.speed = this.player.runSpeed + 15;
    this.image = new Image();
    this.image.src = './assets/arrow.png';
    this.srcWidth = 48;
    this.srcHeight = 21;
    this.width = this.srcWidth;
    this.height = this.srcHeight;
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
    // debugger
    return (topClip || bottomClip) && (frontClip || backClip);
  }
  
  updateHitBox() {
    this.xHitboxFront = this.x + this.width;
    this.xHitboxBack = this.x + this.width - 5;
    this.yHitboxTop = this.y;
    this.yHitboxBottom = this.y + this.height;
  }
  
  updateFrame() {
    this.x += this.speed;
    this.updateHitBox();
  }

  animate() {
    const { ctx, image, srcWidth, srcHeight, width, height } = this;

    ctx.drawImage(image,
      0, 0, srcWidth, srcHeight,
      this.x, this.y, width, height
    );
    this.updateFrame();
  }
}