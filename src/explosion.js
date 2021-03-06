export default class Explosion {
  constructor(enemy, ctx, image) {
    this.ctx = ctx;
    this.x = enemy.x;
    this.y = enemy.y;
    this.srcX = 0;
    this.image = image.image;
    this.width = image.width;
    this.height = image.height;
    this.frameIndex = 0;
    this.frameSets = [
      [0, 0], [0, 1], [0, 2], [0, 3], [0, 4], [0, 5],[0, 6], [0, 7],[0, 8],
      [0, 9], [0, 10], [0, 11]
     ];
  }

  updateFrame() {
    this.frameIndex += 1;
    if (this.frameIndex >= this.frameSets.length) return;
    const [_, xInd] = this.frameSets[this.frameIndex];
    this.srcX = xInd * this.width;
  }

  animate() {
    const { ctx, image, srcX, width, height } = this;

    ctx.drawImage(image,
      srcX, 0, width, height,
      this.x, this.y, width / 1.5, height / 1.5
    );
    this.updateFrame();
  }
}