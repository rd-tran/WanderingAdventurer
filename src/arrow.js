export default class Arrow {
  constructor(player, ctx, image) {
    this.ctx = ctx;
    this.player = player;
    this.x = player.x;
    this.y = player.y + (this.player.height / 2);
    this.srcX = 0;
    this.speed = this.player.runSpeed + 30;
    this.image = image.image;
    this.srcWidth = image.width;
    this.srcHeight = image.height;
    this.frameIndex = 0;
    this.frameSet = [
      [0, 0], [0, 0], [0, 0], [0, 0],
      [0, 0], [0, 0], [0, 0], [0, 0],
      [0, 0], [0, 0], [0, 0], [0, 0],
      [0, 1], [0, 1], [0, 1], [0, 1],
      [0, 1], [0, 1], [0, 1], [0, 1],
      [0, 1], [0, 1], [0, 1], [0, 1],
      [0, 2], [0, 2], [0, 2], [0, 2],
      [0, 2], [0, 2], [0, 2], [0, 2],
      [0, 2], [0, 2], [0, 2], [0, 2],
      [0, 3], [0, 3], [0, 3], [0, 3],
      [0, 3], [0, 3], [0, 3], [0, 3],
      [0, 3], [0, 3], [0, 3], [0, 3],
      [0, 4], [0, 4], [0, 4], [0, 4],
      [0, 4], [0, 4], [0, 4], [0, 4],
      [0, 4], [0, 4], [0, 4], [0, 4],
      [0, 5], [0, 5], [0, 5], [0, 5],
      [0, 5], [0, 5], [0, 5], [0, 5],
      [0, 5], [0, 5], [0, 5], [0, 5],
      [0, 6], [0, 6], [0, 6], [0, 6],
      [0, 6], [0, 6], [0, 6], [0, 6],
      [0, 6], [0, 6], [0, 6], [0, 6],
      [0, 7], [0, 7], [0, 7], [0, 7],
      [0, 7], [0, 7], [0, 7], [0, 7],
      [0, 7], [0, 7], [0, 7], [0, 7],
      [0, 8], [0, 8], [0, 8], [0, 8],
      [0, 8], [0, 8], [0, 8], [0, 8],
      [0, 8], [0, 8], [0, 8], [0, 8],
      [0, 9], [0, 9], [0, 9], [0, 9],
      [0, 9], [0, 9], [0, 9], [0, 9],
      [0, 9], [0, 9], [0, 9], [0, 9],
      [0, 10], [0, 10], [0, 10], [0, 10],
      [0, 10], [0, 10], [0, 10], [0, 10],
      [0, 10], [0, 10], [0, 10], [0, 10],
      [0, 11], [0, 11], [0, 11], [0, 11],
      [0, 11], [0, 11], [0, 11], [0, 11],
      [0, 11], [0, 11], [0, 11], [0, 11],
      [0, 12], [0, 12], [0, 12], [0, 12],
      [0, 12], [0, 12], [0, 12], [0, 12],
      [0, 12], [0, 12], [0, 12], [0, 12],
      [0, 13], [0, 13], [0, 13], [0, 13],
      [0, 13], [0, 13], [0, 13], [0, 13],
      [0, 13], [0, 13], [0, 13], [0, 13],
      [0, 14], [0, 14], [0, 14], [0, 14],
      [0, 14], [0, 14], [0, 14], [0, 14],
      [0, 14], [0, 14], [0, 14], [0, 14]
    ];
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
  
  updateHitBox() {
    this.xHitboxFront = this.x + this.srcWidth;
    this.xHitboxBack = this.x;
    this.yHitboxTop = this.y;
    this.yHitboxBottom = this.y + this.srcHeight;
  }
  
  updateFrame() {
    const { frameSet, srcWidth } = this;
    this.frameIndex = (this.frameIndex + 1) % frameSet.length;
    this.srcX = this.frameIndex * srcWidth;
    this.x += this.speed;
    this.updateHitBox();
  }

  animate() {
    const { ctx, image, srcX, srcWidth, srcHeight } = this;

    ctx.drawImage(image,
      srcX, 0, srcWidth, srcHeight,
      this.x, this.y, srcWidth, srcHeight
    );
    this.updateFrame();
  }
}